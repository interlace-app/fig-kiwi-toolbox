import ky from 'ky';
import { useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  NodeTypes,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import {
  CopyNode,
  DecodeFigNode,
  EncodeFigNode,
  ExtractFigNode,
  PasteNode,
  PastedNode,
} from './nodes';

const nodeTypes: NodeTypes = {
  PasteNode: PasteNode,
  PastedNode: PastedNode,
  ExtractFigNode: ExtractFigNode,
  DecodeFigNode: DecodeFigNode,
  EncodeFigNode: EncodeFigNode,
  CopyNode: CopyNode,
};

const App = () => {
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(
    window.location.href.includes('localhost'),
  );

  const initialNodes = [
    {
      id: '0',
      type: 'PasteNode',
      position: { x: 0, y: 0 },
      data: {},
    },
    {
      id: '1',
      type: 'PastedNode',
      position: { x: 250 + 40, y: 0 },
      data: {},
    },
    {
      id: '2',
      type: 'ExtractFigNode',
      position: { x: 250 + 40 + 250 + 40, y: 0 },
      data: {},
    },
    {
      id: '3',
      type: 'DecodeFigNode',
      position: { x: 250 + 40 + 250 + 40 + 250 + 40, y: 0 },
      data: {},
    },
    {
      id: '4',
      type: 'EncodeFigNode',
      position: { x: 250 + 40 + 250 + 40 + 250 + 40 + 250 + 40, y: 0 },
      data: {},
    },
    {
      id: '5',
      type: 'CopyNode',
      position: {
        x: 250 + 40 + 250 + 40 + 250 + 40 + 250 + 40 + 250 + 40,
        y: 0,
      },
      data: {},
    },
  ];
  const initialEdges = [
    { id: 'e0-1', source: '0', target: '1' },
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
    { id: 'e3-4', source: '3', target: '4' },
    { id: 'e4-5', source: '4', target: '5' },
  ];

  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, _setEdges, onEdgesChange] = useEdgesState(initialEdges);

  if (!validated) {
    return (
      <div className="flex items-center justify-center w-screen h-screen gap-2">
        <input
          className="px-2 py-1 border rounded-md border-slate-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="px-2 py-1 transition border rounded-md border-slate-300 hover:bg-slate-100"
          onClick={() => {
            ky.post(
              'https://fig-kiwi-toolbox-passowrd.haoyuzhangca2973.workers.dev/',
              {
                json: { password: password },
              },
            )
              .json()
              .then((value) =>
                //@ts-expect-error
                setValidated(value['validated']),
              );
          }}
        >
          View
        </button>
      </div>
    );
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        className="bg-slate-100"
        nodeTypes={nodeTypes}
        defaultViewport={{ x: 40, y: 40, zoom: 1 }}
      >
        <Controls className="bg-white" />
        <Background gap={20} size={2} className="opacity-50" />
      </ReactFlow>
    </div>
  );
};

export default App;
