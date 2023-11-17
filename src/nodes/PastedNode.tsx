import { Buffer } from 'buffer/';
import { useAtom } from 'jotai';
import { Handle, Node, NodeProps, Position } from 'reactflow';
import { Data, Section } from '../components';
import { atoms } from '../contexts';

type NodeData = {};

type PastedNode = Node<NodeData>;

export const PastedNode = ({}: NodeProps<NodeData>) => {
  const [clipboardFig] = useAtom(atoms.clipboardFig);

  const base64MetaBuffer = Buffer.from(clipboardFig.base64Meta, 'base64');

  return (
    <div className="flex flex-col bg-white border rounded-lg shadow w-72 nowheel cursor-grab border-slate-300">
      <div className="px-3 py-2 border-b border-slate-300">
        <span className="font-medium text-slate-500">Get binary data</span>
      </div>
      <div className="flex flex-col gap-3 p-3 ">
        <Section header="Metadata">
          <Data>{clipboardFig.base64Meta}</Data>
          <Data isPre>
            {base64MetaBuffer.length > 0 && (
              <pre className="w-full text-sm break-words ">
                {JSON.stringify(clipboardFig.decodedMeta, null, 2)}
              </pre>
            )}
          </Data>
        </Section>
        <Section header="Fig" className="relative">
          <Data>{clipboardFig.base64Fig}</Data>
          <Handle
            type="source"
            position={Position.Right}
            className="w-3.5 h-3.5 bg-slate-400 -right-[16px] top-2"
          />
        </Section>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3.5 h-3.5 bg-slate-400 top-5"
      />
    </div>
  );
};
