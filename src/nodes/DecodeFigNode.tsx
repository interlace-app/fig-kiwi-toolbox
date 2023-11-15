import { useAtom } from 'jotai';
import _ from 'lodash';
import { Handle, Node, NodeProps, Position } from 'reactflow';
import { Data, Section, Status } from '../components';
import { atoms } from '../contexts';

type NodeData = {};

type DecodeFigNode = Node<NodeData>;

export const DecodeFigNode = ({}: NodeProps<NodeData>) => {
  const [pastedData] = useAtom(atoms.pastedData);

  return (
    <div className="flex flex-col bg-white border rounded-lg shadow w-72 nowheel cursor-grab border-slate-300">
      <div className="px-3 py-2 border-b border-slate-300">
        <span className="font-medium text-slate-500">Decode fig data</span>
      </div>
      <div className="flex flex-col gap-3 p-3">
        {!_.isEmpty(pastedData.compiledSchema) && (
          <Status>Schema compiled successfully</Status>
        )}
        <Section header="Kiwi schema">
          <Data isPre>
            <pre className="w-full text-sm break-words">
              {!_.isEmpty(pastedData.compiledSchema) &&
                JSON.stringify(pastedData.compiledSchema, null, 2)}
            </pre>
          </Data>
        </Section>
        {!_.isEmpty(pastedData.decodedData) && (
          <Status>Data decoded successfully</Status>
        )}
        <Section header="Decoded fig">
          <Data isPre>
            <pre className="w-full text-sm break-words">
              {!_.isEmpty(pastedData.decodedData) &&
                JSON.stringify(pastedData.decodedData, null, 2)}
            </pre>
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
