let randNumber = Math.trunc(Math.random() * 50) + 1;
let score = 5;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // If there's no input
  if (!guess) {
    displayMessage('⛔️ No number!');

  // When player wins
  } else if (guess === randNumber) {
    displayMessage('🎉 Hurray! You got the Correct Number');
    document.querySelector('.number').textContent = randNumber;
    document.querySelector('.grid-container').style.backgroundColor = '#662203';
    document.querySelector('.number').style.backgroundColor = '#16E60B';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  // When guess is wrong
  } else if (guess !== randNumber) {
    if (score > 1) {
      displayMessage(guess > randNumber ? '📉 Too High, Try Lower Number' : '📈 Too Low, Try Higher Number');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost the GAME');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function() {
  // Reset the game state
  score = 20;
  randNumber = Math.trunc(Math.random() * 50) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.grid-container').style.backgroundColor = '#0C5F66';
  document.querySelector('.number').style.backgroundColor = '#46B6EA';
});
