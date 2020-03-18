const checkWin = squares => {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = squares[winCondition[0]];
        const b = squares[winCondition[1]];
        const c = squares[winCondition[2]];
        if (a === null || b === null || c === null) {
            continue;
        }
        if (a === b && b === c) {
            return a;
        }
    }
    return null;
};

export default {
    checkWin
};
