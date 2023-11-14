import { Buffer } from 'buffer/';
import { useAtom } from 'jotai';
import { Handle, Node, NodeProps, Position } from 'reactflow';
import { atoms } from '../contexts';

type NodeData = {};

type PastedNode = Node<NodeData>;

export const PastedNode = ({}: NodeProps<NodeData>) => {
  const [pastedData] = useAtom(atoms.pastedData);

  const base64MetaBuffer = Buffer.from(pastedData.base64Meta, 'base64');

  return (
    <div className="flex flex-col bg-white border rounded-lg shadow w-72 nowheel cursor-grab border-slate-300">
      <div className="px-3 py-2 border-b border-slate-300">
        <span className="font-medium text-slate-500">Get binary data</span>
      </div>
      <div className="flex flex-col gap-3 p-3 ">
        <div className="flex flex-col gap-1">
          <p className="ml-2 font-semibold">Metadata</p>
          <div className="flex px-3 py-2 overflow-y-auto text-sm rounded-md h-28 text-slate-700 bg-slate-100">
            <p className="w-full break-words">{pastedData.base64Meta}</p>
          </div>
          {base64MetaBuffer.length ? (
            <div className="flex h-32 px-3 py-2 overflow-y-auto text-sm rounded-md text-slate-700 bg-slate-100">
              <pre className="w-full text-sm break-words ">
                {JSON.stringify(
                  JSON.parse(base64MetaBuffer.toString()),
                  null,
                  2,
                )}
              </pre>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="relative flex flex-col gap-1">
          <p className="ml-2 font-semibold">Fig</p>
          <div className="flex px-3 py-2 overflow-y-auto text-sm rounded-md h-72 text-slate-700 bg-slate-100">
            <p className="w-full break-words">{pastedData.base64Fig}</p>
          </div>
          <Handle
            type="source"
            position={Position.Right}
            className="w-3 h-3 bg-slate-400 -right-[16px] top-2"
          />
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-slate-400 top-5"
      />
    </div>
  );
};
