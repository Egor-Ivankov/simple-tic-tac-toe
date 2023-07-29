import React, {useState} from 'react';
import Board from '../board/Board';
import { checkWinner } from '../check-winner/check-winner';
import './Game.css';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = checkWinner(board);

    const handleClick = (i) => {
        const boardCopy = [...board];

        if (winner || boardCopy[i]) return;

        boardCopy[i] = xIsNext ? "X" : "O";

        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const startNewGame = () => <button 
                                    className='start' 
                                    onClick={() => setBoard(Array(9).fill(null))}
                                    >Очистить поле
                                </button>;
    
    return (
        <div className='wrapper'>
            {startNewGame()}
            <Board squares={board} handleClick={handleClick}/>
            <p className='winner'>
                {winner ? `Победитель: ${winner}` : `Сейчас ходит: ${xIsNext ? 'X' : 'O'}`}
            </p>
        </div>
    );
}

export default Game;
