import {createContext} from 'react';

type LevelType = {
  level: number;
  setLevel: (level: number) => void;
};

const defaultLevel = {
  level: 0,
  setLevel: () => {},
};

export const LevelContext = createContext<LevelType>(defaultLevel);
