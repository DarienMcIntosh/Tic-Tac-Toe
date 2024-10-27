window.addEventListener('DOMContentLoaded', () => {
    // Select all squares
    const squares = document.querySelectorAll('#board div');
  
    // Add base class and hover effect
    squares.forEach(square => {
      square.classList.add('square'); // Add base styling
      square.addEventListener('mouseover', () => square.classList.add('hover'));
      square.addEventListener('mouseout', () => square.classList.remove('hover'));   
  
    });
  });