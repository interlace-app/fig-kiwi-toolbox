import { useAtom } from 'jotai';
import _ from 'lodash';
import { NodeChange } from '.';
import { atoms } from '../contexts';
import { TreeItem, createNodeChangeTree } from '../utils';

export const EditorPane = () => {
  const [modifiedFigData, setModifiedFigData] = useAtom(atoms.modifiedFigData);

  if (_.isEmpty(modifiedFigData)) {
    return <></>;
  }

  const tree = modifiedFigData.nodeChanges
    ? createNodeChangeTree(modifiedFigData.nodeChanges)
    : [];

  const renderNodeChange = (item: TreeItem) => {
    if (!item || !modifiedFigData.nodeChanges) {
      return <></>;
    }
    return (
      <NodeChange
        nodeChange={modifiedFigData.nodeChanges[item.data.index]}
        key={item.data.index}
        onChangeTest={(c) => {
          const newData = modifiedFigData;
          //@ts-expect-error
          newData.nodeChanges[i].fillPaints[0].color = c;
          setModifiedFigData(modifiedFigData);
        }}
        parentLinkPath={['nodeChanges', item.data.index]}
      >
        {item.children.map((c: TreeItem) => renderNodeChange(c))}
      </NodeChange>
    );
  };

  return (
    <div className="absolute z-50 flex flex-col w-3/12 max-w-lg min-w-[320px] bg-white border shadow-xl rounded-xl inset-y-3 right-3 border-slate-200">
      <div className="px-4 py-3 border-b border-slate-300">
        <span className="text-xl font-medium">Link to theme</span>
      </div>
      <div className="flex flex-col flex-1 gap-2 px-4 py-4 overflow-y-auto">
        <p className="font-semibold text-md">Node changes</p>
        {renderNodeChange(tree[0])}
      </div>
    </div>
  );
};
