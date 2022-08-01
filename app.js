const SPACEBAR_KEY_ID = 32;
const JUMPING = 'jumping';
const MOVING = 'moving';
const SCORE_PREFIX = 'Score: ';

$(() => {

    const $dino = $('#dino');
    const $obstacle = $('#obstacle');
    const $obstacle2 = $('#obstacle2');
    const $scoreCounter = $('#counter');
    const $instruction1 = $('h3')
    const $instruction2 = $('h4')


    // Only start game once spacebar is pressed - stuck! 

    $('body').on("keydown", function (e) {
        if (e.keyCode == SPACEBAR_KEY_ID) {
            $instruction1.hide()
            $instruction2.hide()
        }
    });

    // Setup
    $dino.addClass(MOVING);
    let isDinoJumping = false;

    const jump = () => {
        $('audio#jump')[0].play()
        if (isDinoJumping) {
            return;
        }
        isDinoJumping = true;
        $dino.removeClass(MOVING);
        $dino.addClass(JUMPING);

        setTimeout(function () {
            $dino.removeClass(JUMPING);
            isDinoJumping = false;
            $dino.addClass(MOVING);
        }, 1200);
    }

    $('body').on("keydown", function (e) {
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

    // Increase speed 

    const checkScoreOrLose = () => {
        const obstaclePosition = $obstacle.position();
        const { left: obstacleLeft } = obstaclePosition;
        if (isOverlapping($dino, $obstacle)) {
            $('audio#gameover')[0].play();
            window.requestAnimationFrame(() => {
                alert("Game Over");
                $obstacle.removeClass('slidingLeft')
                window.requestAnimationFrame(() => {
                    $obstacle.addClass('slidingLeft')
                })
            });
        } else if (obstacleLeft < 10) {
            $scoreCounter.text(SCORE_PREFIX + (getScore() + 1))
            $obstacle.removeClass('slidingLeft')
            window.requestAnimationFrame(() => {
                $obstacle.addClass('slidingLeft')
            })
        }
        window.requestAnimationFrame(checkScoreOrLose)
    }

    window.requestAnimationFrame(checkScoreOrLose)

    const checkScoreOrLoseObstacle2 = () => {
        const obstacle2Position = $obstacle2.position();
        const { left: obstacle2Left } = obstacle2Position;
        if (isOverlapping($dino, $obstacle2)) {
            $('audio#gameover')[0].play();
            window.requestAnimationFrame(() => {
                alert("Game Over");
                $obstacle2.removeClass('slidingLeftSpeedUp')
                window.requestAnimationFrame(() => {
                    $obstacle2.addClass('slidingLeftSpeedUp')
                })
            });
        } else if (obstacle2Left < 10) {
            $scoreCounter.text(SCORE_PREFIX + (getScore() + 1))
            $obstacle2.removeClass('slidingLeftSpeedUp')
            window.requestAnimationFrame(() => {
                $obstacle2.addClass('slidingLeftSpeedUp')
            })
        }
        window.requestAnimationFrame(checkScoreOrLoseObstacle2)
    }

    window.requestAnimationFrame(checkScoreOrLoseObstacle2)

})


// Next steps:

// 1. Increase speed -> maybe increase speed once we hit score 3 and then another time at 6?
// 2. Implement a start game page - stuck 
// 3. Reset score to 0 once game is over - stuck
// 4. Implement high score? - Add?
// 5. Write a README.md: https://github.com/chrysaliswoon/catris-game


// Styling - next steps:
// 1. Add environment pixel background - Stuck



