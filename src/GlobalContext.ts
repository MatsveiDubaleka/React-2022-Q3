import { createContext } from 'react';

export type GlobalContent = {
  title?: string;
  scrum?: string;
};

export const Context = createContext<GlobalContent>({});
