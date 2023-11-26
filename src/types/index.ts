export interface Position {
  x: number;
  y: number;
}
export interface PositionState {
  position: Position;
  error: boolean;
  isTraversing?: boolean;
}
export interface Action {
  type: string;
  payload?: Pick<PositionState["position"], "x" | "y">;
}
