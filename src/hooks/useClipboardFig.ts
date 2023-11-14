import { Buffer } from 'buffer/';
import { compileSchema, decodeBinarySchema } from 'kiwi-schema';
import pako from 'pako';
import struct from 'python-struct';
import { useEffect, useState } from 'react';

/**
 * a handy hook to process clipboard data automatically
 * @returns fig data extracted
 */
export const useClipboardFig = () => {
  /**
   * store original clipboard data and timestamp
   */
  const [clipboardData, setClipboardData] = useState('');
  const [clipboardDataLastUpdated, setClipboardDataLastUpdated] = useState(
    new Date(),
  );
  useEffect(() => {
    setClipboardDataLastUpdated(new Date());
  }, [clipboardData]);

  /**
   * update all data upon original clipboard data changes
   */

  // match figmeta
  const base64MetaRegex = /<!--\(figmeta\)(.+)\(\/figmeta\)-->/;
  const base64MetaMatches = clipboardData.match(base64MetaRegex);
  let base64Meta = '';
  if (base64MetaMatches?.length === 2) {
    base64Meta = base64MetaMatches[1];
  }

  // match figma
  const base64FigRegex = /<!--\(figma\)(.+)\(\/figma\)-->/;
  const base64FigMatches = clipboardData.match(base64FigRegex);
  let base64Fig = '';
  if (base64FigMatches?.length === 2) {
    base64Fig = base64FigMatches[1];
  }

  /**
   * create and read binary fig data
   * fig data structure:
   * fig header ->
   * compressed schema size -> compressed schema ->
   * compressed data size -> compressed data
   */
  const figBuffer = Buffer.from(base64Fig, 'base64');

  // read fig header
  const uint8FigHeader = figBuffer.subarray(0, 12);

  // read fig version
  const figVersion = struct.unpack(
    '<I',
    //@ts-expect-error can take unit8array
    uint8FigHeader.slice(8, 12),
  )[0] as number;

  // read schema size
  const schemaSize = struct.unpack(
    '<I',
    //@ts-expect-error can take unit8array
    figBuffer.subarray(12, 12 + 4),
  )[0] as number;

  // read schema
  const compressedSchema = figBuffer.subarray(12 + 4, 12 + 4 + schemaSize);
  const inflatedSchema = pako.inflateRaw(compressedSchema);

  // read data size
  const dataSize = struct.unpack(
    '<I',
    //@ts-expect-error can take unit8array
    figBuffer.subarray(12 + 4 + schemaSize, 12 + 4 + schemaSize + 4),
  )[0] as number;

  // read data
  const compressedData = figBuffer.subarray(
    12 + 4 + schemaSize + 4,
    12 + 4 + schemaSize + 4 + dataSize,
  );
  const decompressedData = pako.inflateRaw(compressedData);

  // compile schema
  const decodedSchema = decodeBinarySchema(inflatedSchema);
  const compiledSchema = compileSchema(decodedSchema);

  // decode data
  const decodedData = compiledSchema['decodeMessage'](decompressedData);

  /**
   * apply modifications
   * //STUB - just a random change for now
   */
  let modifiedData = decodedData;
  modifiedData['pastedId'] = 1234567890;
  const encodedModifiedData = compiledSchema['encodeMessage'](modifiedData);

  // write binary fig data
  const toExport = [...uint8FigHeader];
  toExport.push(...struct.pack('<I', schemaSize));
  toExport.push(...compressedSchema);
  const compressedModifiedData = pako.deflateRaw(encodedModifiedData);
  toExport.push(...struct.pack('<I', compressedModifiedData.length));
  toExport.push(...compressedModifiedData);
  const exported = Buffer.from(toExport);

  // create base64 fig data
  const exportedData = exported.toString('base64');

  // generate the clipboard data
  const exportedClipboardData = `<meta charset='utf-8'><meta charset="utf-8"><span data-metadata="<!--(figmeta)${base64Meta}(/figmeta)-->"></span><span data-buffer="<!--(figma)${exportedData}(/figma)-->"></span><span style="white-space:pre-wrap;"></span>`;

  return {
    clipboardData,
    setClipboardData,
    clipboardDataLastUpdated,
    base64Meta,
    base64Fig,
    figBuffer,
    figVersion,
    schemaSize,
    compressedSchema,
    inflatedSchema,
    dataSize,
    compressedData,
    decompressedData,
    decodedSchema,
    compiledSchema,
    decodedData,
    encodedModifiedData,
    compressedModifiedData,
    exportedData,
    exportedClipboardData,
  };
};
