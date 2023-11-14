import { atom } from 'jotai';
import { useClipboardFig } from '../hooks';

const clipboardFig = atom(useClipboardFig());

export const atoms = {
  clipboardFig,
};
