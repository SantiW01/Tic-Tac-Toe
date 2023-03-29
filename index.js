const Game = (() => {
  const play = (e) => {
    const block = e.target;
    if (playerTurn) {
      const player1Turn = document.createElement("p");
      markX.textContent = "X";
      markX.setAttribute("class", "player1");
      block.appendChild(markX);
      playerTurn = false;
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
