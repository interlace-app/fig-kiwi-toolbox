import { Buffer } from 'buffer/';
import { compileSchema, decodeBinarySchema } from 'kiwi-schema';
import pako from 'pako';
import struct from 'python-struct';

/**
 * a handy hook to process clipboard data automatically
 * @returns fig data extracted
 */
export const analyzeClipboardData = (clipboardData: string) => {
  /**
   * initialize
   */
  const analyzed = {
    base64Meta: '',
    base64Fig: '',
    figBuffer: Buffer.from([]),
    figVersion: -1,
    schemaSize: -1,
    compressedSchema: new Uint8Array([]),
    decompressedSchema: new Uint8Array([]),
    dataSize: -1,
    compressedData: new Uint8Array([]),
    decompressedData: new Uint8Array([]),
    decodedSchema: {} as any,
    compiledSchema: {} as any,
    decodedData: {} as any,
    encodedModifiedData: new Uint8Array([]),
    compressedModifiedData: new Uint8Array([]),
    exportedData: '',
    exportedClipboardData: '',
  };

  if (!clipboardData) {
    return analyzed;
  }

  // match figmeta
  const base64MetaRegex = /<!--\(figmeta\)(.+)\(\/figmeta\)-->/;
  const base64MetaMatches = clipboardData.match(base64MetaRegex);
  if (base64MetaMatches?.length === 2) {
    analyzed.base64Meta = base64MetaMatches[1];
  }

  // match figma
  const base64FigRegex = /<!--\(figma\)(.+)\(\/figma\)-->/;
  const base64FigMatches = clipboardData.match(base64FigRegex);
  if (base64FigMatches?.length === 2) {
    analyzed.base64Fig = base64FigMatches[1];
  }

  /**
   * create and read binary fig data
   * fig data structure:
   * fig header ->
   * compressed schema size -> compressed schema ->
   * compressed data size -> compressed data
   */
  analyzed.figBuffer = Buffer.from(analyzed.base64Fig, 'base64');

  // read fig header
  const uint8FigHeader = analyzed.figBuffer.subarray(0, 12);

  // read fig version
  analyzed.figVersion = struct.unpack(
    '<I',
    //@ts-expect-error can take unit8array
    uint8FigHeader.slice(8, 12),
  )[0] as number;

  // read schema size
  analyzed.schemaSize = struct.unpack(
    '<I',
    //@ts-expect-error can take unit8array
    analyzed.figBuffer.subarray(12, 12 + 4),
  )[0] as number;

  // read schema
  analyzed.compressedSchema = analyzed.figBuffer.subarray(
    12 + 4,
    12 + 4 + analyzed.schemaSize,
  );
  analyzed.decompressedSchema = pako.inflateRaw(analyzed.compressedSchema);

  // read data size
  analyzed.dataSize = struct.unpack(
    '<I',
    //@ts-expect-error can take unit8array
    analyzed.figBuffer.subarray(
      12 + 4 + analyzed.schemaSize,
      12 + 4 + analyzed.schemaSize + 4,
    ),
  )[0] as number;

  // read data
  analyzed.compressedData = analyzed.figBuffer.subarray(
    12 + 4 + analyzed.schemaSize + 4,
    12 + 4 + analyzed.schemaSize + 4 + analyzed.dataSize,
  );
  analyzed.decompressedData = pako.inflateRaw(analyzed.compressedData);

  // compile schema
  analyzed.decodedSchema = decodeBinarySchema(analyzed.decompressedSchema);
  analyzed.compiledSchema = compileSchema(analyzed.decodedSchema);

  // decode data
  analyzed.decodedData = analyzed.compiledSchema['decodeMessage'](
    analyzed.decompressedData,
  );

  /**
   * apply modifications
   * //STUB - just a random change for now
   */
  let modifiedData = analyzed.decodedData;
  modifiedData['pastedId'] = 1234567890;
  analyzed.encodedModifiedData =
    analyzed.compiledSchema['encodeMessage'](modifiedData);

  // write binary fig data
  const toExport = [...uint8FigHeader];
  toExport.push(...struct.pack('<I', analyzed.schemaSize));
  toExport.push(...analyzed.compressedSchema);
  analyzed.compressedModifiedData = pako.deflateRaw(
    analyzed.encodedModifiedData,
  );
  toExport.push(...struct.pack('<I', analyzed.compressedModifiedData.length));
  toExport.push(...analyzed.compressedModifiedData);
  const exported = Buffer.from(toExport);

  // create base64 fig data
  analyzed.exportedData = exported.toString('base64');

  // generate the clipboard data
  analyzed.exportedClipboardData = `<meta charset='utf-8'><meta charset="utf-8"><span data-metadata="<!--(figmeta)${analyzed.base64Meta}(/figmeta)-->"></span><span data-buffer="<!--(figma)${analyzed.exportedData}(/figma)-->"></span><span style="white-space:pre-wrap;"></span>`;

  return analyzed;
};
