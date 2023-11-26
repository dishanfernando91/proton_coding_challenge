export interface Position {
  x: number;
  y: number;
}
export interface PositionState {
  position: Position;
  error: boolean;
  isTraversing?: boolean;
}

export interface RobotControlContextState extends PositionState {
  moveRobot: (direction: string) => void;
  teleportRobot: (startPosition: Position, newPosition: Position) => void;
  completeTeleport: () => void;
}

export interface Action {
  type: string;
  payload?: Pick<PositionState["position"], "x" | "y">;
}
