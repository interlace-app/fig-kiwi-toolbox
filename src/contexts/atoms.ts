import { atom } from 'jotai';
import { Message, Schema } from '../kiwi/schema';
import { analyzeClipboardData, generateClipboardData } from '../utils';

const _clipboardData = atom('');
const clipboardDataLastUpdated = atom<Date>(new Date());
const clipboardData = atom(
  (get) => get(_clipboardData),
  (_, set, value: string) => {
    set(_clipboardData, value);
    set(clipboardDataLastUpdated, new Date());
    const analyzed = analyzeClipboardData(value);
    set(_clipboardFig, analyzed);
    set(modifiedFigData, analyzed.decodedData);
  },
);

const _clipboardFig = atom(analyzeClipboardData(''));
const clipboardFig = atom((get) => get(_clipboardFig));

//STUB - type with pre-extracted schema
const _modifiedFigData = atom<Message>({});
const modifiedFigData = atom(
  (get) => get(_modifiedFigData),
  (get, set, value: Message) => {
    set(_modifiedFigData, value);
    set(
      _exportedFig,
      generateClipboardData(
        get(_clipboardFig).uint8FigHeader,
        get(_clipboardFig).schemaSize,
        get(_clipboardFig).compressedSchema,
        get(_clipboardFig).base64Meta,
        get(_clipboardFig).compiledSchema,
        get(_clipboardFig).decodedData,
      ),
    );
    set(exportedFigLastUpdated, new Date());
  },
);

const _exportedFig = atom(
  generateClipboardData(
    new Uint8Array([]),
    -1,
    new Uint8Array([]),
    '',
    {} as Schema,
    {},
  ),
);
const exportedFigLastUpdated = atom<Date>(new Date());
const exportedFig = atom((get) => get(_exportedFig));

export const atoms = {
  clipboardData,
  clipboardFig,
  clipboardDataLastUpdated,
  modifiedFigData,
  exportedFig,
  exportedFigLastUpdated,
};
