import { useState } from 'react';
import { GlobeView } from './components/Globe';
import { NodePopup } from './components/NodePopup';
import type { GlobeNode } from './data/nodes';
import './App.css';

function App() {
  const [selectedNode, setSelectedNode] = useState<GlobeNode | null>(null);

  return (
    <>
      <GlobeView onPointClick={setSelectedNode} />
      <NodePopup node={selectedNode} onClose={() => setSelectedNode(null)} />
    </>
  );
}

export default App;
