import { atom } from 'jotai';
import { analyzeClipboardData } from '../utils';

const _clipboardData = atom('');

const clipboardDataLastUpdated = atom<Date>(new Date());

const clipboardFig = atom(analyzeClipboardData(''));

const clipboardData = atom(
  (get) => get(_clipboardData),
  (_, set, value: string) => {
    set(_clipboardData, value);
    set(clipboardDataLastUpdated, new Date());
    set(clipboardFig, analyzeClipboardData(value));
  },
);

export const atoms = {
  clipboardData,
  clipboardFig,
  clipboardDataLastUpdated,
};
