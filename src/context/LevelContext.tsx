import {createContext} from 'react';

type LevelType = {
  level: number;
  setLevel: (level: number) => void;
};

// type TimerContextType = {
//     timer: number;
//     setTimer: Dispatch<SetStateAction<number>>;
//     timerStarted: boolean;
//     setTimerStarted: (_: boolean) => void
// };

const defaultLevel = {
  level: 0,
  setLevel: () => {},
};

export const LevelContext = createContext<LevelType>(defaultLevel);
