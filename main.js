//* game state -> render() -> HTML
//* click event -> callback -> 1. change state 2. call render()

//* the game state of your entire app
const game = {
  board: ["XXX", "?X?", "OXO"]
};

const renderBoard = board => { //* [ "XOO", "?X?", "?OO"]
  $("#1").text(board[0][0])
  $("#2").text(board[0][1])
  $("#3").text(board[0][2])
  $("#4").text(board[1][0])
  $("#5").text(board[1][1])
  $("#6").text(board[1][2])
  $("#7").text(board[2][0])
  $("#8").text(board[2][1])
  $("#9").text(board[2][2])
}



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

const setTest = () => {
  $("#test").on("click", () => {
    $('#1').text("O")
  }
  )
}

const main = () => {
  $("#startButton").on("click", showBoard);
  $("#scoreButton").on("click", showScore);
  renderBoard(game.board);
  setTest();
};

$(main); //* to run the whole game when document.ready
