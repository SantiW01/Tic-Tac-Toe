const Game = (() => {
  let playerTurn = true;
  const play = (e) => {
    const block = e.target;
    if (playerTurn) {
      const player1Turn = document.createElement("p");
      player1Turn.textContent = "X";
      player1Turn.setAttribute("class", "player1");
      block.appendChild(player1Turn);
      playerTurn = false;
    } else if (!playerTurn) {
      const player2Turn = document.createElement("p");
      player2Turn.textContent = "O";
      player2Turn.setAttribute("class", "player2");
      block.appendChild(player2Turn);
      playerTurn = true;
    }
  };
  const clickBlock = () => {
    let blockSelected = document.querySelectorAll(".main");
    blockSelected.forEach((block) => {
      block.addEventListener("click", (e) => play(e));
    });
  };

  return { clickBlock };
})();

Game.clickBlock();
