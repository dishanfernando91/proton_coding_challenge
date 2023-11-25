import NAV_ACTIONS from "./navigation.actions";

export interface IInitialState {
  position: {
    x: number;
    y: number;
  };
  error: string | null;
}

interface IAction {
  type: string;
  payload?: Pick<IInitialState, "position">;
}

export const initialState: IInitialState = {
  position: {
    x: 1,
    y: 1,
  },
  error: null,
};

function navigationReducer(state: IInitialState, action: IAction) {
  const { position, error } = state;
  switch (action.type) {
    case NAV_ACTIONS.UP:
      return { ...state, [position.y]: position.y + 1 };
    case NAV_ACTIONS.RIGHT:
      return { ...state, [position.x]: position.x + 1 };
    case NAV_ACTIONS.DOWN:
      return { ...state, [position.y]: position.y - 1 };
    case NAV_ACTIONS.LEFT:
      return { ...state, [position.x]: position.x - 1 };
    case NAV_ACTIONS.TELEPORT:
      // pending
      return { ...state };
    default:
      throw new Error(`Incorrect move command`);
  }
}

export default navigationReducer;
