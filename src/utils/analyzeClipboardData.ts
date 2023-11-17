import { Buffer } from 'buffer/';
import { compileSchema, decodeBinarySchema } from 'kiwi-schema';
import pako from 'pako';
import struct from 'python-struct';
import { Message, Schema } from '../kiwi/schema';

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
    decodedMeta: {} as any,
    base64Fig: '',
    figBuffer: Buffer.from([]),
    uint8FigHeader: new Uint8Array([]),
    figVersion: -1,
    schemaSize: -1,
    compressedSchema: new Uint8Array([]),
    decompressedSchema: new Uint8Array([]),
    dataSize: -1,
    compressedData: new Uint8Array([]),
    decompressedData: new Uint8Array([]),
    decodedSchema: {} as any,
    //STUB - type with pre-extracted schema
    compiledSchema: {} as Schema,
    //STUB - type with pre-extracted schema
    decodedData: {} as Message,
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
  analyzed.decodedMeta = JSON.parse(
    Buffer.from(analyzed.base64Meta, 'base64').toString(),
  );

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
  analyzed.uint8FigHeader = analyzed.figBuffer.subarray(0, 12);

  // read fig version
  analyzed.figVersion = struct.unpack(
    '<I',
    //@ts-expect-error can take unit8array
    analyzed.uint8FigHeader.slice(8, 12),
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
  //STUB - type with pre-extracted schema
  // analyzed.decodedData = analyzed.compiledSchema['decodeMessage'](
  //   analyzed.decompressedData,
  // );
  analyzed.decodedData = analyzed.compiledSchema.decodeMessage(
    analyzed.decompressedData,
  );

  return analyzed;
};
