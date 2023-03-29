const Game = (() => {
  const clickBlock = () => {
    let blockSelected = document.querySelectorAll(".main");
    blockSelected.forEach((block) => {
      block.addEventListener("click", (e) => play(e));
    });
  };

  return { clickBlock };
})();

Game.clickBlock();
