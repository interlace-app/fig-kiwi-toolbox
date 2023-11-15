import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import { useHotkeys } from 'react-hotkeys-hook';
import { Handle, Node, NodeProps, Position } from 'reactflow';
import { Data } from '../components';
import { atoms } from '../contexts';

type NodeData = {};

type PasteNode = Node<NodeData>;

export const PasteNode = ({}: NodeProps<NodeData>) => {
  const [clipboardData, setClipboardData] = useAtom(atoms.clipboardData);
  const [clipboardDataLastUpdated] = useAtom(atoms.clipboardDataLastUpdated);

  const getAndSaveClipboardData = () => {
    navigator.clipboard.read().then((clipboardItem) =>
      clipboardItem[0]
        .getType('text/html')
        .then((blob) => blob.text().then((text) => setClipboardData(text)))
        .catch((e) => console.error(e)),
    );
  };

  useHotkeys(['meta+v', 'ctrl+v'], () => getAndSaveClipboardData());

  return (
    <div className="flex flex-col bg-white border rounded-lg shadow nowheel w-72 cursor-grab border-slate-300">
      <div className="px-3 py-2 border-b border-slate-300">
        <span className="font-medium text-slate-500">Paste from Figma</span>
      </div>
      <div className="flex flex-col gap-3 p-3 ">
        <button
          onClick={() => getAndSaveClipboardData()}
          className="relative flex items-center justify-center py-2 transition border rounded-md border-slate-300 hover:bg-slate-100"
        >
          Paste
          <div className="absolute flex items-center gap-1 right-2">
            <div className="flex items-center justify-center w-6 h-6 border rounded-md border-slate-300">
              <span>⌘</span>
            </div>
            <div className="flex items-center justify-center w-6 h-6 border rounded-md border-slate-300">
              <span>V</span>
            </div>
          </div>
        </button>
        {clipboardData && (
          <div className="flex justify-center px-3 py-2 text-sm text-green-700 bg-green-100 rounded-md">
            Pasted {dayjs(clipboardDataLastUpdated).format('HH:mm:ss')}
          </div>
        )}
        {clipboardData && <Data>{clipboardData}</Data>}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-slate-400 top-5"
      />
    </div>
  );
};
