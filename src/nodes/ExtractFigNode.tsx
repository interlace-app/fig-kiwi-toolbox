import { useAtom } from 'jotai';
import { Handle, Node, NodeProps, Position } from 'reactflow';
import { atoms } from '../contexts';

type NodeData = {};

type ExtractFigNode = Node<NodeData>;

export const ExtractFigNode = ({}: NodeProps<NodeData>) => {
  const [clipboardFig] = useAtom(atoms.clipboardFig);

  return (
    <div className="flex flex-col bg-white border rounded-lg shadow w-72 nowheel cursor-grab border-slate-300">
      <div className="px-3 py-2 border-b border-slate-300">
        <span className="font-medium text-slate-500">Extract fig data</span>
      </div>
      <div className="flex flex-col gap-3 p-3 ">
        <div className="flex flex-col gap-1">
          <p className="ml-2 font-semibold">Fig version</p>
          <div className="flex px-3 py-2 overflow-y-auto text-sm rounded-md text-slate-700 bg-slate-100">
            {clipboardFig.figVersion > 0 && (
              <p className="w-full break-words">{clipboardFig.figVersion}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="ml-2 font-semibold">Schema size (compressed)</p>
          <div className="flex px-3 py-2 overflow-y-auto text-sm rounded-md text-slate-700 bg-slate-100">
            {clipboardFig.schemaSize > 0 && (
              <p className="w-full break-words">{clipboardFig.schemaSize}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="ml-2 font-semibold">Data size (compressed)</p>
          <div className="flex px-3 py-2 overflow-y-auto text-sm rounded-md text-slate-700 bg-slate-100">
            {clipboardFig.dataSize > 0 && (
              <p className="w-full break-words">{clipboardFig.dataSize}</p>
            )}
          </div>
        </div>
        {clipboardFig.inflatedSchema.length > 0 &&
          clipboardFig.inflatedData.length > 0 && (
            <div className="flex justify-center px-3 py-2 text-sm text-green-700 bg-green-100 rounded-md">
              Decompressed successfully
            </div>
          )}
        <div className="flex flex-col gap-1">
          <p className="ml-2 font-semibold">Schema size (decompressed)</p>
          <div className="flex px-3 py-2 overflow-y-auto text-sm rounded-md text-slate-700 bg-slate-100">
            {clipboardFig.inflatedSchema.length > 0 && (
              <p className="w-full break-words">
                {clipboardFig.inflatedSchema.length}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="ml-2 font-semibold">Data size (decompressed)</p>
          <div className="flex px-3 py-2 overflow-y-auto text-sm rounded-md text-slate-700 bg-slate-100">
            {clipboardFig.inflatedData.length > 0 && (
              <p className="w-full break-words">
                {clipboardFig.inflatedData.length}
              </p>
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
