import { Buffer } from 'buffer/';
import { atom } from 'jotai';
import { compileSchema, decodeBinarySchema } from 'kiwi-schema';
import pako from 'pako';
import struct from 'python-struct';

const _clipboardData = atom('');
const clipboardData = atom(
  (get) => get(_clipboardData),
  (_, set, value: string) => {
    set(_clipboardData, value);
    set(clipboardDataLastUpdated, new Date());
    const base64MetaRegex = /<!--\(figmeta\)(.+)\(\/figmeta\)-->/;
    const base64MetaMatch = value.match(base64MetaRegex);
    if (!base64MetaMatch) {
      return;
    }
    const base64FigRegex = /<!--\(figma\)(.+)\(\/figma\)-->/;
    const base64FigMatch = value.match(base64FigRegex);
    if (!base64FigMatch) {
      return;
    }
    const base64FigBuffer = Buffer.from(base64FigMatch[1], 'base64');
    const uint8FigHeader = base64FigBuffer.subarray(0, 12);
    const figVersion = struct.unpack(
      '<I',
      //@ts-expect-error can take unit8array
      uint8FigHeader.slice(8, 12),
    )[0] as number;
    const schemaSize = struct.unpack(
      '<I',
      //@ts-expect-error can take unit8array
      base64FigBuffer.subarray(12, 12 + 4),
    )[0] as number;
    const dataSize = struct.unpack(
      '<I',
      //@ts-expect-error can take unit8array
      base64FigBuffer.subarray(12 + 4 + schemaSize, 12 + 4 + schemaSize + 4),
    )[0] as number;

    const compressedSchema = base64FigBuffer.subarray(
      12 + 4,
      12 + 4 + schemaSize,
    );
    const compressedData = base64FigBuffer.subarray(
      12 + 4 + schemaSize + 4,
      12 + 4 + schemaSize + 4 + dataSize,
    );

    const inflatedSchema = pako.inflateRaw(compressedSchema);
    const decodedSchema = decodeBinarySchema(inflatedSchema);
    const compiledSchema = compileSchema(decodedSchema);
    const inflatedData = pako.inflateRaw(compressedData);
    const decodedData = compiledSchema['decodeMessage'](inflatedData);

    let modifiedData = decodedData;
    modifiedData['pastedId'] = 1234567890;
    const encodedData = compiledSchema['encodeMessage'](modifiedData);

    const toExport = [...uint8FigHeader];
    toExport.push(...struct.pack('<I', schemaSize));
    toExport.push(...compressedSchema);
    const deflatedModifiedData = pako.deflateRaw(encodedData);
    toExport.push(...struct.pack('<I', deflatedModifiedData.length));
    toExport.push(...deflatedModifiedData);
    const exported = Buffer.from(toExport);
    const base64Exported = exported.toString('base64');

    const fullHtmlExported = `<meta charset='utf-8'><meta charset="utf-8"><span data-metadata="<!--(figmeta)${base64MetaMatch[1]}(/figmeta)-->"></span><span data-buffer="<!--(figma)${base64Exported}(/figma)-->"></span><span style="white-space:pre-wrap;"></span>`;

    set(pastedData, {
      base64Meta: base64MetaMatch[1],
      base64Fig: base64FigMatch[1],
      base64FigBuffer: base64FigBuffer,
      figVersion: figVersion,
      schemaSize: schemaSize,
      dataSize: dataSize,
      decompressedSchemaSize: inflatedSchema.length,
      decompressedDataSize: inflatedData.length,
      compiledSchema: compiledSchema,
      decodedData: decodedData,
      encodedModifiedData: encodedData,
      decompressedEncodedDataSize: encodedData.length,
      compressedEncodedDataSize: deflatedModifiedData.length,
      base64Exported: base64Exported,
      fullHtmlExported: fullHtmlExported,
      fullHtmlLastExported: new Date(),
    });
  },
);

const clipboardDataLastUpdated = atom<Date>(new Date());

const pastedData = atom<{
  base64Meta: string;
  base64Fig: string;
  base64FigBuffer: Buffer;
  figVersion: number;
  schemaSize: number;
  dataSize: number;
  decompressedSchemaSize: number;
  decompressedDataSize: number;
  compiledSchema: any;
  decodedData: any;
  encodedModifiedData: Uint8Array;
  decompressedEncodedDataSize: number;
  compressedEncodedDataSize: number;
  base64Exported: string;
  fullHtmlExported: string;
  fullHtmlLastExported: Date;
}>({
  base64Meta: '',
  base64Fig: '',
  base64FigBuffer: Buffer.from([]),
  figVersion: -1,
  schemaSize: -1,
  dataSize: -1,
  decompressedSchemaSize: -1,
  decompressedDataSize: -1,
  compiledSchema: {},
  decodedData: {},
  encodedModifiedData: new Uint8Array([]),
  decompressedEncodedDataSize: -1,
  compressedEncodedDataSize: -1,
  base64Exported: '',
  fullHtmlExported: '',
  fullHtmlLastExported: new Date(),
});

export const atoms = {
  clipboardData,
  clipboardDataLastUpdated,
  pastedData,
};
