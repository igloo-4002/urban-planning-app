import React, { useState } from 'react';
import AppStateContext from './Context/AppStateContext';
import Canvas from './Components/Canvas';
import { AppState } from './types';
import { getDefaultAppState } from './defaults';

function App() {
  const [appState, setAppState] = useState<AppState>(getDefaultAppState());

  return (
    <AppStateContext.Provider
      value={{ context: appState, setContext: setAppState }}
    >
      <div className="flex items-center justify-center">
        <Canvas />
      </div>
    </AppStateContext.Provider>
  );
}

export default App;
