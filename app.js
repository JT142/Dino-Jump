const SPACEBAR_KEY_ID = 32;
const JUMPING = 'jumping';
const MOVING = 'moving';
const SCORE_PREFIX = 'Score: ';

$(() => {
    const $dino = $('#dino');
    const $obstacle = $('#obstacle');
    const $border = $('#border');
    const $scoreCounter = $('#counter');

    // Setup
    $dino.addClass(MOVING);
    let isDinoJumping = false;

    const totalScore = () => {
        const text = $scoreCounter.text();
        const score = parseInt(text.slice(SCORE_PREFIX.length))
        return score;
    }

    const countScore = () => {
        if (Math.round($obstacle.position()) === $border.position()) {
            $scoreCounter.text(SCORE_PREFIX + (totalScore + 1))

        }
    }

    setInterval(() => {
        countScore();
    }, 500)

    const jump = () => {
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

    setInterval(() => {
        if (isOverlapping($dino, $obstacle)) {
            alert("Game Over");
        }
    }, 50)
})

