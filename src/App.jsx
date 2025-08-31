import Square from "./components/Square";
import { useState } from "react";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Board = () => {
  const [sq, setSq] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (ind) => {
    if (sq[ind] || calculateWinner(sq)) return;

    const nextSquares = sq.slice();
    if (xIsNext) {
      nextSquares[ind] = "X";
    } else {
      nextSquares[ind] = "O";
    }
    setXIsNext(!xIsNext);
    setSq(nextSquares);
  };

  const winner = calculateWinner(sq);
  let status = null;
  if (winner) {
    status = "Winner is " + winner;
  } else {
    const nextPlayer = xIsNext ? "X" : "O";
    status = "Next Player is " + nextPlayer;
  }

  return (
    <>
      <div className="board-row">
        <div> {status} </div>
        <Square value={sq[0]} onSquareClick={() => handleClick(0)} />
        <Square value={sq[1]} onSquareClick={() => handleClick(1)} />
        <Square value={sq[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={sq[3]} onSquareClick={() => handleClick(3)} />
        <Square value={sq[4]} onSquareClick={() => handleClick(4)} />
        <Square value={sq[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={sq[6]} onSquareClick={() => handleClick(6)} />
        <Square value={sq[7]} onSquareClick={() => handleClick(7)} />
        <Square value={sq[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
