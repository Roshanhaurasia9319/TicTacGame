import React, { useState } from 'react';
import './App.css';
import Tic from './components/Tic';

const INITIAL_STATE = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null
};

const App = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleClick = (index) => {
    if (state.board[index] || state.winner) return;

    const newBoard = [...state.board];
    newBoard[index] = state.currentPlayer;
     
    


    const winner = calculateWinner(newBoard);

    const squareColor = state.currentPlayer === 'X' ? 'red' : 'blue';
    const squareId = `square-${index}`;
    const square = document.getElementById(squareId);
    if (square) {
      square.style.color = squareColor;
      document.querySelector(".game-info").style.color = squareColor;
    }

    const currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
    
    
    
    setState({ board: newBoard, currentPlayer, winner });
  };

  const renderSquare = (index) => (
    <button id={`square-${index}`} className="square" onClick={() => handleClick(index)}>
      {state.board[index]}
    </button>
  );

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[b] && board[c] && board[a] === board[b] && board[a] === board[c]) {
        document.querySelector(".game-board").style.display = "none";
        document.querySelector(".game-info").style.backgroundColor = "gold";
        return board[a];
      }
    }

    return null;
  };

  const status = state.winner ? `Winner: ${state.winner}` : `Next player: ${state.currentPlayer}`;

  return (

    <div className="game">
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info">{status}</div>
    </div>
  );
};

export default App;
