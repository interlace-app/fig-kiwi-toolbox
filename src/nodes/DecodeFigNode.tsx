import { useAtom } from 'jotai';
import _ from 'lodash';
import { Handle, Node, NodeProps, Position } from 'reactflow';
import { atoms } from '../contexts';

type NodeData = {};

type DecodeFigNode = Node<NodeData>;

export const DecodeFigNode = ({}: NodeProps<NodeData>) => {
  const [clipboardFig] = useAtom(atoms.clipboardFig);

  return (
    <div className="flex flex-col bg-white border rounded-lg shadow w-72 nowheel cursor-grab border-slate-300">
      <div className="px-3 py-2 border-b border-slate-300">
        <span className="font-medium text-slate-500">Decode fig data</span>
      </div>
      <div className="flex flex-col gap-3 p-3">
        {!_.isEmpty(clipboardFig.compiledSchema) && (
          <div className="flex justify-center px-3 py-2 text-sm text-green-700 bg-green-100 rounded-md">
            Schema compiled successfully
          </div>
        )}
        <div className="flex flex-col gap-1">
          <p className="ml-2 font-semibold">Kiwi schema</p>
          <div className="flex px-3 py-2 overflow-y-auto text-sm rounded-md h-80 text-slate-700 bg-slate-100">
            {!_.isEmpty(clipboardFig.compiledSchema) && (
              <pre className="w-full text-sm break-words">
                {JSON.stringify(clipboardFig.compiledSchema, null, 2)}
              </pre>
            )}
          </div>
        </div>
        {!_.isEmpty(clipboardFig.decodedData) && (
          <div className="flex justify-center px-3 py-2 text-sm text-green-700 bg-green-100 rounded-md">
            Data decoded successfully
          </div>
        )}
        <div className="flex flex-col gap-1">
          <p className="ml-2 font-semibold">Decoded fig</p>
          <div className="flex px-3 py-2 overflow-y-auto text-sm rounded-md h-80 text-slate-700 bg-slate-100">
            {!_.isEmpty(clipboardFig.decodedData) && (
              <pre className="w-full text-sm break-words">
                {JSON.stringify(clipboardFig.decodedData, null, 2)}
              </pre>
            )}
          </div>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-slate-400 top-5"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-slate-400 top-5"
      />
    </div>
  );
};
