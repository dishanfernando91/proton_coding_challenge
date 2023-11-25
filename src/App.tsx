import { createContext } from "react";
import { Table, NavPad } from "src/components";

import "./App.css";

interface InitialState {
  x: number;
  y: number;
  error: string | null;
}

const initialState: InitialState = {
  x: 1,
  y: 1,
  error: null,
};

const PositionContext = createContext<InitialState>(initialState);

function positionReducer(state: InitialState, action: string) {
  switch (action) {
    case "up":
      return { ...state, [state.y]: state.y + 1 };
    case "left":
      return { ...state, [state.x]: state.x + 1 };
    case "down":
      return { ...state, [state.y]: state.y - 1 };
    case "right":
      return { ...state, [state.x]: state.x - 1 };
    default:
      throw new Error(`Incorrect move command`);
  }
}

function App() {
  return (
    <>
      <Table />
      <NavPad />
    </>
  );
}

export default App;
