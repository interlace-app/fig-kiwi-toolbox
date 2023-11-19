import { arrayToTree } from 'performant-array-to-tree';
import { NodeChange } from '../kiwi/schema';

export const asciiToInt = (ascii: string) => {
  var sum = 0;
  const map = (char: string) => char.charCodeAt(0) - 33;
  for (var i = 0; i < ascii.length; i++) {
    sum += map(ascii[i]);
  }
  return sum;
};

export const createNodeChangeTree = (nodeChanges: NodeChange[]) => {
  const nodes = nodeChanges.map((c, i) => {
    const id = `${c.guid?.sessionID}-${c.guid?.localID}`;
    let parentId = null;
    if (c.parentIndex) {
      parentId = `${c.parentIndex?.guid?.sessionID}-${c.parentIndex?.guid?.localID}`;
    }
    return {
      id: id,
      parentId: parentId,
      index: i,
    };
  });
  const tree = arrayToTree(nodes);
  return tree;
};
