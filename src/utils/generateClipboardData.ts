import { Buffer } from 'buffer/';
import _ from 'lodash';
import pako from 'pako';
import struct from 'python-struct';
import { Message, Schema } from '../kiwi/schema';

/**
 * a handy hook to process clipboard data automatically
 * @returns fig data extracted
 */
export const generateClipboardData = (
  uint8FigHeader: Uint8Array,
  schemaSize: number,
  compressedSchema: Uint8Array,
  base64Meta: string,
  schema: Schema,
  data: Message,
) => {
  /**
   * initialize
   */
  const generated = {
    encodedModifiedData: new Uint8Array([]),
    compressedModifiedData: new Uint8Array([]),
    exportedData: '',
    exportedClipboardData: '',
  };

  //TODO - add more checks
  if (_.isEmpty(schema) || _.isEmpty(data)) {
    return generated;
  }

  const gen = () => Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  data.pasteID = gen();
  data.pastePageId = {
    sessionID: gen(),
    localID: gen(),
  };

  //STUB - type with pre-extracted schema
  generated.encodedModifiedData = schema.encodeMessage(data);

  // write binary fig data
  const toExport = [...uint8FigHeader];
  toExport.push(...struct.pack('<I', schemaSize));
  toExport.push(...compressedSchema);
  generated.compressedModifiedData = pako.deflateRaw(
    generated.encodedModifiedData,
  );
  toExport.push(...struct.pack('<I', generated.compressedModifiedData.length));
  toExport.push(...generated.compressedModifiedData);
  const exported = Buffer.from(toExport);

  // create base64 fig data
  generated.exportedData = exported.toString('base64');

  // generate the clipboard data
  generated.exportedClipboardData = `<meta charset='utf-8'><meta charset="utf-8"><span data-metadata="<!--(figmeta)${base64Meta}(/figmeta)-->"></span><span data-buffer="<!--(figma)${generated.exportedData}(/figma)-->"></span><span style="white-space:pre-wrap;"></span>`;

  return generated;
};
