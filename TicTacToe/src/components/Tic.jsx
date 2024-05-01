import React from 'react'
import { useState } from 'react'
import "./Tic.css"

const INITIAL_STATE = {
  board: Array(9).fill(null),
  CurrentState : "X",
  winner : null
}

const Tic = () => {

  const [state, setState] = useState(INITIAL_STATE);

const handleClick = (index)=>{
  if(state.board[index] || state.winner) return 

  const newBoard = [...state.board];
  newBoard[index] = state.currentPlayer;

  const winner = calculateWinner(newBoard)
currentPlayer = state.currentPlayer === 'X' ? '0' : 'X'
setState({board : newBoard, currentPlayer, winner})

  
}

const calculateWinner = (board)=>{
  let index = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,5]
  ] 
  for(let i =0;i < index.length;i++){
    const [a,b,c] = index[i];
    if(board[a] && board[b] && board[c] && board[a] === board[b] && board[a] === board[c]){
      return board[a]
    }

  }
  return null
}


function renderSquare(index){
  <button className='board' onClick={()=> handleClick(index)}></button>
     {state.board[index]}
}
const status = state.winner ? `Winner: ${state.winner}` : `Next player: ${state.currentPlayer}`;

  return (
    <div>

      <div className="game">
        <div className="board">
          <div className="row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
       
      </div>

      <div className="game-info">{status}</div>
    </div>
  )
}

export default Tic
