var turn = 1;

window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById("tic-tac-toe");
    var stop = false;
    if (el) {
      el.addEventListener('click', (ev) => {
        const [x, y] = [
          ev.target.cellIndex, 
          ev.target.parentElement.rowIndex
        ];
        if (x === undefined || y === undefined || stop) {
          return;
        }
        if(ev.target.getInnerHTML() === "" ) {
            var winner = document.getElementById("winner");
            if(turn % 2 == 0) {
                ev.target.innerHTML = "o";
                ev.target.style.color = "#7C109A";
                if(checkForWin(el, x, y)) {
                    winner.innerHTML = "The winner is O. Reload to play again!";
                    stop=true;
                }
            }else{
                ev.target.innerHTML = "x";
                ev.target.style.color = "#BED600";
                if(checkForWin(el, x, y)) {
                    winner.innerHTML = "The winner is X. Reload to play again!";
                    stop=true;
                }
            }
            turn++;
        }
      });
    }
});

function checkForWin(el, x, y) {
    return checkRow(el, y) || checkCol(el, x) || checkDiag(el);
}
function checkRow(el, y) {
    if(el.rows[y].cells[0].getInnerHTML() === el.rows[y].cells[1].getInnerHTML() && el.rows[y].cells[1].getInnerHTML() === el.rows[y].cells[2].getInnerHTML()) {
        el.rows[y].style.backgroundColor = '#00A1DE';
        return true;
    }
}
function checkCol(el, x) {
    if(el.rows[0].cells[x].getInnerHTML() === el.rows[1].cells[x].getInnerHTML() && el.rows[1].cells[x].getInnerHTML() === el.rows[2].cells[x].getInnerHTML()) {
        for(i = 0; i < 3; i++) {
            el.rows[i].cells[x].style.backgroundColor = '#00A1DE';
        }
        return true;
    }
}
function checkDiag(el) {
    if(el.rows[0].cells[0].getInnerHTML() != "" && el.rows[0].cells[0].getInnerHTML() === el.rows[1].cells[1].getInnerHTML() && el.rows[1].cells[1].getInnerHTML()  === el.rows[2].cells[2].getInnerHTML()) {
        el.rows[0].cells[0].style.backgroundColor = "#00A1DE";
        el.rows[1].cells[1].style.backgroundColor = "#00A1DE";
        el.rows[2].cells[2].style.backgroundColor = "#00A1DE";
        return true;
    } else if(el.rows[0].cells[2].getInnerHTML() != "" && el.rows[0].cells[2].getInnerHTML() === el.rows[1].cells[1].getInnerHTML() && el.rows[1].cells[1].getInnerHTML() === el.rows[2].cells[0].getInnerHTML()) {
        el.rows[0].cells[2].style.backgroundColor = "#00A1DE";
        el.rows[1].cells[1].style.backgroundColor = "#00A1DE";
        el.rows[2].cells[0].style.backgroundColor = "#00A1DE";
        return true;
    }
}