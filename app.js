const SPACEBAR_KEY_ID = 32
const JUMPING = 'jumping'
const MOVING = 'moving'

$(() => {
    const $dino = $('#dino')
    $dino.addClass(MOVING)
    let isDinoJumping = false;

    const jump = () => {
        if (isDinoJumping) {
            return;
        }
        isDinoJumping = true;
        $dino.removeClass(MOVING);
        $dino.addClass(JUMPING);
        setTimeout(function () {
            $dino.removeClass(JUMPING)
            isDinoJumping = false;
            $dino.addClass(MOVING)
        }, 1200);
    }

    $('body').on("keydown", function (e) {
        if (e.keyCode == SPACEBAR_KEY_ID) {
            jump()
        }
    });
})