const Game = (() => {
  let playerTurn = true;
  const clickBlock = (e) => {
    const block = e.target;
    changeTurn(block);
  };

  const changeTurn = (block) => {
    if (playerTurn) {
      const player1Turn = document.createElement("p");
      player1Turn.textContent = "X";
      player1Turn.setAttribute("class", "player1");
      if (!block.hasChildNodes()) {
        block.appendChild(player1Turn);
        playerTurn = false;
      }
    } else if (!playerTurn) {
      const player2Turn = document.createElement("p");
      player2Turn.textContent = "O";
      player2Turn.setAttribute("class", "player2");
      if (!block.hasChildNodes()) {
        block.appendChild(player2Turn);
        playerTurn = true;
      }
    }
  };

  const play = () => {
    let blockSelected = document.querySelectorAll(".main");
    blockSelected.forEach((block) => {
      block.addEventListener("click", (e) => clickBlock(e));
    });
  };

  return { play };
})();

Game.play();
