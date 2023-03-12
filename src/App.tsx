import React, { useRef, useState } from 'react';
import AppStateContext from './Context/AppStateContext';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appState = useState(null);

  return (
    <AppStateContext.Provider value={appState}>
      <div className="flex items-center justify-center">
        <canvas ref={canvasRef} />
      </div>
    </AppStateContext.Provider>
  );
}

export default App;
