import { useAtom } from 'jotai';
import _ from 'lodash';
import { Handle, Node, NodeProps, Position } from 'reactflow';
import { Data, Section, Status } from '../components';
import { atoms } from '../contexts';

type NodeData = {};

type EncodeFigNode = Node<NodeData>;

export const EncodeFigNode = ({}: NodeProps<NodeData>) => {
  const [exportedFig] = useAtom(atoms.exportedFig);

  return (
    <div className="flex flex-col bg-white border rounded-lg shadow w-72 nowheel cursor-grab border-slate-300">
      <div className="px-3 py-2 border-b border-slate-300">
        <span className="font-medium text-slate-500">Encode fig data</span>
      </div>
      <div className="flex flex-col gap-3 p-3">
        <div className="flex flex-col gap-1">
          <p className="ml-2 font-semibold">Kiwi schema</p>
          <div className="flex justify-center px-3 py-2 text-sm rounded-md text-slate-400 bg-slate-100">
            Reusing the extracted schema...
          </div>
        </div>
        {exportedFig.encodedModifiedData.length > 0 && (
          <Status>Encoded data successfully</Status>
        )}
        <Section header="Data size (decompressed)">
          <Data>
            {exportedFig.encodedModifiedData.length > 0 &&
              exportedFig.encodedModifiedData.length}
          </Data>
        </Section>
        {exportedFig.compressedModifiedData.length > 0 && (
          <Status>Compressed data successfully</Status>
        )}
        <Section header="Data size (compressed)">
          <Data>
            {exportedFig.compressedModifiedData.length > 0 &&
              exportedFig.compressedModifiedData.length}
          </Data>
        </Section>
        <Section header="Exported fig">
          <Data>
            {!_.isEmpty(exportedFig.exportedData) && exportedFig.exportedData}
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
