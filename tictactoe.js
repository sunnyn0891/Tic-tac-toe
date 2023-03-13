const classX = "x";
const classZero = "o";
const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const winner = document.querySelector(".winner");
const getBoard = document.querySelector(".board");
let turnx = true;
const prevSelect = classX;
const getAllCell = document.querySelectorAll("[data-cell]");
function checkIfWinner(currentClass) {
  return winningCombo.some((item) => {
    return item.every((index) => {
      return getAllCell[index].classList.contains(currentClass);
    });
  });
}
function init() {
  getBoard.classList.add(classX);
  getAllCell.forEach((cell) => {
    cell.addEventListener(
      "click",
      () => {
        cell.classList.add(turnx ? classX : classZero);
        getBoard.classList.remove(turnx ? classX : classZero);
        getBoard.classList.add(turnx ? classZero : classX);
        turnx = !turnx;
        let xWinner = checkIfWinner(classX);
        let owinner = checkIfWinner(classZero);
        if (xWinner || owinner) {
          winner.textContent = xWinner ? "X Won" : "0 Won";
          winner.style.marginTop = "55px"
          winner.style.marginLeft = "55px"
        }

        console.log(xWinner, owinner);
      },
      { once: true }
    );
  });
}

init();
