

//* MVC - Model - View - Controller
//* game state (Model) -> render() -> HTML (View)
//* click event -> callback -> 1. change state 2. call render()

//* the game state of your entire app
const game = {
    turn: "X",
    board: ["???", "???", "???"],
};

const renderBoard = (board) => {
    //* [ "XOO", "?X?", "?OO"]
    $("#1").text(`[${board[0][0]}]`);
    $("#2").text(`[${board[0][1]}]`);
    $("#3").text(`[${board[0][2]}]`);
    $("#4").text(`[${board[1][0]}]`);
    $("#5").text(`[${board[1][1]}]`);
    $("#6").text(`[${board[1][2]}]`);
    $("#7").text(`[${board[2][0]}]`);
    $("#8").text(`[${board[2][1]}]`);
    $("#9").text(`[${board[2][2]}]`);
};

const showBoard = () => {
    $("#start").hide();
    $("#score").hide();
    $("#board").show("slow");
};

const showScore = () => {
    $("#start").hide();
    $("#board").hide();
    $("#score").show();
};

const showStart = () => {
    $("#start").show();
    $("#board").hide();
    $("#score").hide();
};

const main = () => {
    $("#startButton").on("click", showBoard);
    $("#scoreButton").on("click", showScore);

    $(".cell").on("click", (event) => {
        const $cell = $(event.target);
        const row = $cell.data("row");
        const col = $cell.data("col");

        const str = game.board[row];
        if (game.board[row][col] !== "?") {
            return;
        }
        game.board[row] = str.slice(0, col) + game.turn + str.slice(col + 1, str.length);
        if (game.turn === "X") {
            game.turn = "O"
        } else {
            game.turn = "X"
        }
        renderBoard(game.board);
    });

    $("#test").on("click", () => {
        game.board[0] = "OXX";
        renderBoard(game.board);
    });
    showBoard();
    renderBoard(game.board);
};

$(main); //* to run the whole game when document.ready
