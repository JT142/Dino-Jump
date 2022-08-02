const SPACEBAR_KEY_ID = 32;
const ENTER_KEY_ID = 13;
const JUMPING = 'jumping';
const MOVING = 'moving';
const SCORE_PREFIX = 'Score: ';
const JUMP_COOLDOWN_MS = 1000;
const GAME_OVER_MESSAGE = 'Game Over. Press OK to restart.';
const COLLISION_THRESHOLD_PX = 10;
const INCREASE_DIFFICULTY_SCORE_THRESHOLD = 5;
const OBSTACLE_ANIMATION_FIXED_DURATION = 2000;
const OBSTACLE_ANIMATION_VARIABLE_DURATION = 2400;

$(() => {
  // Declare global variables
  const $dino = $('#dino');
  const $scoreCounter = $('#counter');
  const $instruction1 = $('h3')
  const $instruction2 = $('h4')
  let isDinoJumping = false;
  let isDinoInvincible = true;
  const obstacles = [];

  const getCleanupFunction = (obstacle) => () => {
    if (!isDinoInvincible) {
      $scoreCounter.text(SCORE_PREFIX + (getScore() + 1))
    }
    obstacle.remove();
    createObstacle();
    const index = obstacles.indexOf(obstacle);
    obstacles.splice(index, 1)
  }
  // Setup game
  const createObstacle = () => {
    const $obstacle = $('<div class="obstacle"></div>')
    obstacles.push($obstacle)
    $('#game-screen').append($obstacle)
    $obstacle.animate({
      left: 0,
    }, OBSTACLE_ANIMATION_FIXED_DURATION + Math.random() * OBSTACLE_ANIMATION_VARIABLE_DURATION, "linear", getCleanupFunction($obstacle))
  }

  const setupGame = () => {
    $dino.addClass(MOVING);
    createObstacle();
    setTimeout(createObstacle, 1000)
  }

  setupGame();

  const startGame = () => {
    $instruction1.hide();
    $instruction2.hide();
    isDinoInvincible = false;
  }

  $('body').on("keydown", (e) => {
    if (e.keyCode == ENTER_KEY_ID) {
      startGame()
    }
  });

  const jump = () => {
    if (isDinoJumping) {
      return;
    }
    isDinoJumping = true;
    $('audio#jump')[0].play()
    $dino.removeClass(MOVING);
    $dino.addClass(JUMPING);

    setTimeout(function() {
      $dino.removeClass(JUMPING);
      isDinoJumping = false;
      $dino.addClass(MOVING);
    }, JUMP_COOLDOWN_MS);
  }

  $('body').on("keydown", (e) => {
    if (e.keyCode == SPACEBAR_KEY_ID) {
      jump();
    }
  });

  const isOverlapping = (element1, element2) => {
    const width1 = element1.width()
    const width2 = element2.width()
    const height1 = element1.height()
    const height2 = element2.height()

    const position1 = element1.position()
    const position2 = element2.position()
    const left1 = Math.round(position1.left);
    const left2 = Math.round(position2.left);
    const top1 = Math.round(position1.top);
    const top2 = Math.round(position2.top);

    return (
      left1 < left2 + width2 &&
      left1 + width1 > left2 &&
      top1 < top2 + height2 &&
      top1 + height1 > top2
    )
  }

  const getScore = () => {
    const text = $scoreCounter.text();
    const score = parseInt(text.slice(SCORE_PREFIX.length))
    return score;
  }

  const resetGame = () => {
    $scoreCounter.text('Score: 0')
    isDinoInvincible = true;
    $instruction1.show();
    $instruction2.show();
  }

  // Increase score by one or alert game over 
  const tick = () => {
    if (!isDinoInvincible) {
      obstacles.forEach((obstacle) => {
        if (isOverlapping($dino, obstacle)) {
          $('audio#gameover')[0].play();
          window.requestAnimationFrame(() => {
            alert(GAME_OVER_MESSAGE);
            resetGame();
          });
        }
      });
    }
    window.requestAnimationFrame(tick)
  }

  window.requestAnimationFrame(tick)
})


// Next steps:

// 1. Implement start game only when 'Enter' is pressed - Done
// 2. Fix Game Over bug (Infinite alerts instead of restarting the game)  - Done
// 3. Increase speed -> To increase speed once score hits 5 - Done
// 4. Reset score to 0 once game is over - Done
// 5. Write a README.md: https://github.com/chrysaliswoon/catris-game - Pending 




