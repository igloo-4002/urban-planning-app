import { Dispatch, SetStateAction, createContext } from 'react';
import { AppState } from '~/types';
import { getDefaultAppState } from '~/defaults';

type AppStateContextType = {
  context: AppState;
  setContext: Dispatch<SetStateAction<AppState>>;
};

const AppStateContextState = {
  context: getDefaultAppState(),
  setContext: () => {
    console.warn('unitialized setAppState context!');
  },
};

const AppStateContext =
  createContext<AppStateContextType>(AppStateContextState);

export default AppStateContext;
