const Game = (() => {
  let blockSelected = document.querySelectorAll(".main");
  let playerTurn = true;
  let player1Moves = [];
  let player2Moves = [];
  const winningCombination = [
    ["0", "1", "2"],
    ["0", "3", "6"],
    ["0", "4", "8"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["6", "4", "2"],
    ["1", "4", "7"],
    ["2", "5", "8"],
  ];
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
        player1Moves.push(getDataValue(block));
        if (combinationCompare(player1Moves, winningCombination)) {
          ClaimWinner(player1Moves);
        }
        playerTurn = false;
      }
    } else if (!playerTurn) {
      const player2Turn = document.createElement("p");
      player2Turn.textContent = "O";
      player2Turn.setAttribute("class", "player2");
      if (!block.hasChildNodes()) {
        block.appendChild(player2Turn);
        player2Moves.push(getDataValue(block));
        if (combinationCompare(player1Moves, winningCombination)) {
          ClaimWinner(player2Moves);
        }

        playerTurn = true;
      }
    }
  };

  const combinationCompare = (playerMoves, winningCombination) => {
    let res = winningCombination.filter(
      (v) =>
        v.filter((c) => {
          return playerMoves.indexOf(c) > -1;
        }).length == 3
    );
    if (res.length == 1) {
      return JSON.stringify(res);
    }
  };
  const getDataValue = (block) => {
    return block.getAttribute("data-blockvalue");
  };

  const ClaimWinner = (winner) => {
    blockSelected.forEach((block) => {
      if (!block.hasChildNodes()) {
        block.setAttribute("class", "block-notSelected");
      }
    });
  };

  const play = () => {
    blockSelected.forEach((block, i) => {
      block.setAttribute("data-blockValue", i);
      block.addEventListener("click", (e) => clickBlock(e));
    });
  };

  return { play };
})();

Game.play();
