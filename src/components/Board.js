import React, { useState, useEffect } from "react";
import Square from "./Square";
import Helper from "../helpers";
import _ from "lodash";

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winner, setWiner] = useState(null);

    useEffect(() => {
        const winner = Helper.checkWin(squares);
        if (!_.isNull(winner)) {
            setWiner(winner + " Win");
        }
    }, [squares]);

    const handleClick = i => {
        const square = squares.slice();
        if (_.isNull(square[i])) {
            square[i] = "x";
            handleMachine(square);
        }
    };

    const handleMachine = square => {
        let i = 0;

        if (square.some(ele => _.isNull(ele))) {
            while (!_.isNull(square[i])) {
                i = Math.floor(Math.random() * 9);
            }
            square[i] = "o";
        }
        setSquares(square);
    };

    const renderSquare = i => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    };

    const status = _.isNull(winner) ? "Next player: X" : winner;
    const winState = _.isNull(winner) ? "" : "none";
    return (
        <div className="main-game" style={{ pointerEvents:winState }}>
            <div className="status">{status}</div>
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
    );
}

export default Board;
