import { atom } from 'jotai';
import { analyzeClipboardData } from '../utils';

const _clipboardData = atom('');

const clipboardDataLastUpdated = atom<Date>(new Date());

const _clipboardFig = atom(analyzeClipboardData(''));
const clipboardFig = atom((get) => get(_clipboardFig));

const clipboardData = atom(
  (get) => get(_clipboardData),
  (_, set, value: string) => {
    set(_clipboardData, value);
    set(clipboardDataLastUpdated, new Date());
    set(_clipboardFig, analyzeClipboardData(value));
  },
);

export const atoms = {
  clipboardData,
  clipboardFig,
  clipboardDataLastUpdated,
};
