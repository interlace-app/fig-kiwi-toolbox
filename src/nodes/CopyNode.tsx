import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import { Handle, Node, NodeProps, Position } from 'reactflow';
import { Data, Status } from '../components';
import { atoms } from '../contexts';

type NodeData = {};

type CopyNode = Node<NodeData>;

export const CopyNode = ({}: NodeProps<NodeData>) => {
  const [exportedFig] = useAtom(atoms.exportedFig);
  const [exportedFigLastUpdated] = useAtom(atoms.exportedFigLastUpdated);

  const writeClipboardData = async () => {
    const type = 'text/html';
    const blob = new Blob([exportedFig.exportedClipboardData], { type });
    const cbi = new ClipboardItem({
      [type]: blob,
    });
    await navigator.clipboard.write([cbi]);
  };

  return (
    <div className="flex flex-col bg-white border rounded-lg shadow nowheel w-72 cursor-grab border-slate-300">
      <div className="px-3 py-2 border-b border-slate-300">
        <span className="font-medium text-slate-500">Copy Figma</span>
      </div>
      <div className="flex flex-col gap-3 p-3 ">
        <button
          onClick={() => writeClipboardData()}
          className="relative flex items-center justify-center py-2 transition border rounded-md border-slate-300 hover:bg-slate-100"
        >
          Copy
        </button>
        {exportedFig.exportedClipboardData && (
          <>
            <Status>
              Generated {dayjs(exportedFigLastUpdated).format('HH:mm:ss')}
            </Status>
            <Data>{exportedFig.exportedClipboardData}</Data>
          </>
        )}
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3.5 h-3.5 bg-slate-400 top-5"
      />
    </div>
  );
};
