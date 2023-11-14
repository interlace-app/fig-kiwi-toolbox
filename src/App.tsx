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
