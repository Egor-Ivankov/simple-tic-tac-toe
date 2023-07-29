import React from "react";
import Square from "../square/Square";
import './Board.css';

const Board = ({squares, handleClick}) => {
    return (
        <div className="board">
            {squares.map((item, i) => <Square key={i} value={item} onClick={() => handleClick(i)}/> )}
        </div>
    );
}

export default Board;