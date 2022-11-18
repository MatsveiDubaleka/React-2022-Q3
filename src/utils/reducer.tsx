import React, { createContext, useReducer } from 'react';

type Actions = { type: string; payload: string };

interface InitContextProps {
  state: Record<string, unknown>;
  dispatch: React.Dispatch<Actions>;
}

export const DataContext = createContext({} as InitContextProps);

const initialState = {
  searchValue: '',
};

const reducer = (state: Record<string, unknown>, action: Actions) => {
  switch (action.type) {
    case 'setSearchValue':
      return { ...state, searchValue: action.payload };
    default:
      throw new Error();
  }
};

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>;
};
