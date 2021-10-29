//!! Tic-Tac-Toe Checker

var board = [
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0],
];

function checkWinner(board) {
    for (let i = 0; i <= 2; i++) {
        //победитель по вертикали
        if (
            board[0][i] == board[1][i] &&
            board[0][i] == board[2][i] &&
            board[0][i] !== 0
        ) {
            return board[0][i];
        }
        //победитель по горизонтали
        if (
            board[i][0] == board[i][1] &&
            board[i][0] == board[i][2] &&
            board[i][0] !== 0
        ) {
            return board[i][0];
        }
    }
    //диагональ 1
    if (
        board[0][0] == board[1][1] &&
        board[0][0] == board[2][2] &&
        board[0][0] !== 0
    ) {
        return board[0][0];
    }
    //диагональ 2
    if (
        board[2][0] == board[1][1] &&
        board[2][0] == board[0][2] &&
        board[2][0] !== 0
    ) {
        return board[2][0];
    }
    //проверка на наличие пустых полей
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (board[i][j] === 0) {
                return -1;
            }
        }
    }
    //ничья
    return 0;
}

console.log(checkWinner(board));

//!! Third

function ipsBetween(start, end) {
    let startArr = start.split('.');
    let endArr = end.split('.');

    const calc = (n, m = 1) => (endArr[n] - startArr[n]) * m;

    return calc(0, 256 ** 3) + calc(1, 256 ** 2) + calc(2, 256) + calc(3);
}

console.log(ipsBetween('10.0.0.0', '10.0.0.50'));
console.log(ipsBetween('10.0.0.0', '10.0.1.0'));
console.log(ipsBetween("20.0.0.10", "20.0.1.0"))

//!! Mission: Hidden Message

let leter =
    "Yesterday, we bumped into Laura. It had to happen, but you can't deny the timing couldn't be worse. The \"mission\" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn't been a pleasurable experience to go through it. I wanted to feel done with it first.";

// 'The mission has been done.'

function getMessage(str) {
    let cleanString = str
        .split('. ')
        .map((el) =>
            el.includes(',') || el.includes('"') ? el.replace(/,|"/g, '') : el
        );

    const IdxLeter = cleanString[0].split(' ').map((el) => el.length - 1);

    let hiddenMessage = [];

    for (let i = 1; i < IdxLeter.length + 1; i++) {
        hiddenMessage.push(cleanString[i].split(' ')[IdxLeter[i - 1]]);
    }
    let result = hiddenMessage.join(' ');

    return `${result.slice(0, 1).toUpperCase()}${result.slice(1)}.`;
}

console.log(getMessage(leter));
