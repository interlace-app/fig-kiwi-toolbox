import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import { useHotkeys } from 'react-hotkeys-hook';
import { Handle, Node, NodeProps, Position } from 'reactflow';
import { atoms } from '../contexts';

type NodeData = {};

type CopyNode = Node<NodeData>;

export const CopyNode = ({}: NodeProps<NodeData>) => {
  const [pastedData] = useAtom(atoms.pastedData);

  const writeClipboardData = async () => {
    const type = 'text/html';
    const blob = new Blob([pastedData.fullHtmlExported], { type });
    const cbi = new ClipboardItem({
      [type]: blob,
    });
    await navigator.clipboard.write([cbi]);
  };

  useHotkeys(['meta+c', 'ctrl+c'], () => writeClipboardData());

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
          <div className="absolute flex items-center gap-1 right-2">
            <div className="flex items-center justify-center w-6 h-6 border rounded-md border-slate-300">
              <span>⌘</span>
            </div>
            <div className="flex items-center justify-center w-6 h-6 border rounded-md border-slate-300">
              <span>C</span>
            </div>
          </div>
        </button>
        {pastedData.fullHtmlExported && (
          <div className="flex justify-center px-3 py-2 text-sm text-green-700 bg-green-100 rounded-md">
            Generated{' '}
            {dayjs(pastedData.fullHtmlLastExported).format('HH:mm:ss')}
          </div>
        )}
        {pastedData.fullHtmlExported && (
          <div className="flex px-3 py-2 overflow-y-auto text-sm rounded-md h-72 text-slate-700 bg-slate-100">
            <p className="w-full break-words">{pastedData.fullHtmlExported}</p>
          </div>
        )}
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-slate-400 top-5"
      />
    </div>
  );
};
