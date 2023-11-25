// import { useState } from "react";
import "./Cell.scss";

interface CellProps {
  x: number;
  y: number;
  isOccupied: boolean;
  onClick: (x: number, y: number) => void;
}

const Cell: React.FC<CellProps> = ({ x, y, isOccupied, onClick }) => {
  // const handleClick = () => {
  //   onClick(x, y);
  // };

  return (
    <div className="cell-body" onClick={() => console.log("clicked")}>
      X
    </div>
  );
};

export default Cell;
