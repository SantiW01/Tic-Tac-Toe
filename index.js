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
  const clickBlock = (player1, player2, e) => {
    const block = e.target;
    changeTurn(player1, player2, block);
  };

  const changeTurn = (player1, player2, block) => {
    if (playerTurn) {
      const player1Turn = document.createElement("p");
      player1Turn.textContent = "X";
      player1Turn.setAttribute("class", "player1");
      if (!block.hasChildNodes()) {
        block.appendChild(player1Turn);
        player1Moves.push(getDataValue(block));
        if (combinationCompare(player1Moves, winningCombination)) {
          ClaimWinner(player1);
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
        if (combinationCompare(player2Moves, winningCombination)) {
          ClaimWinner(player2);
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
    playerTurn
      ? CongratulateWinner(winner.player1Name)
      : CongratulateWinner(winner.player2Name);
    blockSelected.forEach((block) => {
      if (!block.hasChildNodes()) {
        block.setAttribute("class", "block-notSelected");
      }
    });
  };

  const CongratulateWinner = (winnerName) => {
    const h1 = document.createElement("h1");
    h1.textContent = `Winner: ${winnerName}`;
    h1.setAttribute("class", "winner");
    document.querySelector("main").replaceChildren(h1);
  };

  const play = (player1, player2) => {
    blockSelected.forEach((block, i) => {
      block.setAttribute("data-blockValue", i);
      block.addEventListener("click", (e) => clickBlock(player1, player2, e));
    });
  };

  return { play };
})();

const player = (player1Name, player2Name) => {
  player1Name = document.querySelector(".input_player1").value;
  player2Name = document.querySelector(".input_player2").value;
  return { player1Name, player2Name };
};
document.querySelector(".start_game").addEventListener("click", (e) => {
  const player1 = player();
  const player2 = player();
  Game.play(player1, player2);
});
