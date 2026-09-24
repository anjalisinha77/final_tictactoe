import { useState } from 'react';

// Function: makes a single square on the game board
function Square({value, onSquareClick}) {
 return (
   <button className="square" onClick={onSquareClick}>
     {value}
   </button>
   );
}

// Function: makes game board & handles user interactions
function Board({ xIsNext, squares, onPlay, playAgain }) {
  function handleClick(i) {
   if (squares[i] || calculateWinner(squares)) {
     return;
   }
  
   const nextSquares = squares.slice();
  
   if (xIsNext) {
     nextSquares[i] = "X";
   }
   else {
     nextSquares[i] = "O";
   }   
   onPlay(nextSquares);
 }


 // Determines game's current status (winner, draw, or next player)
 const winner = calculateWinner(squares);
 const gameEnd = calculateGameEnd(squares);
 let status;
 if (winner) {
   status = 'Winner: ' + winner;
 }
 else if (gameEnd) {            // new addition to check for draw
   status = 'Game ended in a draw.';
 }
 else {
   status = 'Next player: ' + (xIsNext ? 'X' : 'O');
 }

 
 // Makes game board with squares and current status
 return (
   <>
     <div className="status">{status}</div>
     <div className="board-row">
       <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
       <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
       <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
     </div>


     <div className="board-row">
       <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
       <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
       <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
     </div>


     <div className="board-row">
       <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
       <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
       <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
     </div>

     <div> 
      <button onClick={playAgain}>Play Again</button>
     </div>
   </>
 );
}


export default function Game() {
 const [history, setHistory] = useState([Array(9).fill(null)]);
 const [currentMove, setCurrentMove] = useState(0);
 const xIsNext = currentMove % 2 === 0;
 const currentSquares = history[currentMove];

 // Function: resets game, starts over (my additional feature!)
 function playAgain() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

 // Function: handles game moves, updates history, sets current move
 function handlePlay(nextSquares) {
   const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
   setHistory(nextHistory);
   setCurrentMove(nextHistory.length - 1);
 }

 // Function: jumps to specific move in the game
 function jumpTo(nextMove) {
   setCurrentMove(nextMove);
 }

 // Creates a list of moves that the user has made and allows them to jump back to any previous move (time travel)
 const moves = history.map((squares, move) => {
   let description;
   if (move > 0) {
     description = 'Go to move #' + move;
   }
   else {
     description = 'Go to game start';
   }
   return (
     <li key={move}>
       <button onClick={() => jumpTo(move)}>{description}</button>
     </li>
   );
 }
 );
  return (
   <div className="game">
     <div className="game-board">
       <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} playAgain={playAgain}/>
     </div>
     <div className="game-info">
       <ol>{moves}</ol>
     </div>
   </div>   
 );
}

// Function: checks if there's a winner
function calculateWinner(squares) {
 const lines = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
 ];

 for (let i=0; i<lines.length; i++) {
   const [a, b, c] = lines[i];
   if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
     return squares[a];
   }
 }
 return null;
}

// Function: checks if game has ended in a draw
function calculateGameEnd(squares) {
  return !squares.includes(null)
}

