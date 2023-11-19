import { GUID, NodeChange } from '../kiwi/schema';

export const asciiToInt = (ascii: string) => {
  var sum = 0;
  const map = (char: string) => char.charCodeAt(0) - 33;
  for (var i = 0; i < ascii.length; i++) {
    sum += map(ascii[i]);
  }
  return sum;
};

type EditorNode = {
  parentNodeGUID: GUID;
  childrenNodeGUIDs: GUID[];
};

export const createNodeChangTree = (nodeChanges: NodeChange[]) => {
  return;
};
