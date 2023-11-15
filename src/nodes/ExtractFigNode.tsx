import { useAtom } from 'jotai';
import { Handle, Node, NodeProps, Position } from 'reactflow';
import { Data, Section, Status } from '../components';
import { atoms } from '../contexts';

type NodeData = {};

type ExtractFigNode = Node<NodeData>;

export const ExtractFigNode = ({}: NodeProps<NodeData>) => {
  const [pastedData] = useAtom(atoms.pastedData);

  return (
    <div className="flex flex-col bg-white border rounded-lg shadow w-72 nowheel cursor-grab border-slate-300">
      <div className="px-3 py-2 border-b border-slate-300">
        <span className="font-medium text-slate-500">Extract fig data</span>
      </div>
      <div className="flex flex-col gap-3 p-3 ">
        <Section header="Fig version">
          <Data>{pastedData.figVersion > 0 && pastedData.figVersion}</Data>
        </Section>
        <Section header="Schema size (compressed)">
          <Data>{pastedData.schemaSize > 0 && pastedData.schemaSize}</Data>
        </Section>
        <Section header="Data size (compressed)">
          <Data>{pastedData.dataSize > 0 && pastedData.dataSize}</Data>
        </Section>
        {pastedData.decompressedSchemaSize > 0 &&
          pastedData.decompressedDataSize > 0 && (
            <Status>Decompressed successfully</Status>
          )}
        <Section header="Schema size (decompressed)">
          <Data>
            {pastedData.decompressedSchemaSize > 0 &&
              pastedData.decompressedSchemaSize}
          </Data>
        </Section>
        <Section header="Data size (decompressed)">
          <Data>
            {pastedData.decompressedDataSize > 0 &&
              pastedData.decompressedDataSize}
          </Data>
        </Section>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3.5 h-3.5 bg-slate-400 top-5"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-3.5 h-3.5 bg-slate-400 top-5"
      />
    </div>
  );
};
