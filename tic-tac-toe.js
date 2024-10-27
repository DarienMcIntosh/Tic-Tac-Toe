window.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    let boardState = Array(9).fill(null);
  
    // Add base class and hover effect
    squares.forEach(square => {
      square.classList.add('square'); // Add base styling
      square.addEventListener('mouseover', () => square.classList.add('hover'));
      square.addEventListener('mouseout', () => square.classList.remove('hover'));   
  
    });

    squares.forEach((square, index) => {
        square.addEventListener('click', () => {
          if (!boardState[index]) {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            boardState[index] = currentPlayer;
    
            // Alternate players
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
  });
});