window.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    const statusDisplay = document.querySelector('#status');
    const newGameButton = document.querySelector('.btn');

    let currentPlayer = 'X';
    let boardState = Array(9).fill(null);

    function checkForWinner(player) {
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

        return winningConditions.some(combination => {
            const [a, b, c] = combination;
            return boardState[a] === player && boardState[b] === player && boardState[c] === player;
        });
    }

    function checkForDraw() {
        return boardState.every(cell => cell !== null);
    }

    function handleClick(square, index) {
        if (!boardState[index]){
            boardState[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
                
            if (checkForWinner(currentPlayer)) {
                statusDisplay.textContent = `Congratulations! ${currentPlayer} is the winner!`;
                statusDisplay.classList.add('you-won');
            } else if (checkForDraw()) {
                statusDisplay.textContent = "It's a draw!";
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
            }
        }
    }

    function handleNewGame() {
        boardState.fill(null);
        squares.forEach(square => {
          square.textContent = '';
          square.classList.remove('X', 'O');
        });
        statusDisplay.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusDisplay.classList.remove('you-won');
        currentPlayer = 'X';
    }

    // Add base class and hover effect
    squares.forEach((square, index) => {
      square.classList.add('square'); // Add base styling
      square.addEventListener('mouseover', () => square.classList.add('hover'));
      square.addEventListener('mouseout', () => square.classList.remove('hover'));   
      square.addEventListener('click', () => handleClick(square, index));
    });

    


    newGameButton.addEventListener('click', handleNewGame);
});