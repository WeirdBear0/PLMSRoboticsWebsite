var turn = 1;

window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById("tic-tac-toe");
    if (el) {
      el.addEventListener('click', (ev) => {
        const [x, y] = [
          ev.target.cellIndex, 
          ev.target.parentElement.rowIndex
        ];
        if (x === undefined || y === undefined) {
          return;
        }
        if(ev.target.getInnerHTML() === "") {
            if(turn % 2 == 0) {
                ev.target.innerHTML = "O";
            }else{
                ev.target.innerHTML = "X";
            }
            turn++;
        }
      });
    }
});