function cellClicked() {
    if (turn == 10 || winner == true) {
        gameReset();
        return;
    }
    
    
    if (event.target.textContent == 'X' || event.target.textContent == 'O') {
        console.log("Pick Another Cell");
        return;
    }

    
    if (isXorO == 1) {
        event.target.textContent = 'X';
        isXorO = 0;
    } else {
        event.target.textContent = 'O';
        isXorO = 1;
    }

    
    if (turn >= 5) {
        checkWinner();
    }
    turn++;

}


function checkWinner() {
    console.log("Checking for winner...");
    
    checkRowColumn(0, 1, 2);

    checkRowColumn(3, 4, 5);

    checkRowColumn(6, 7, 8);

    checkRowColumn(0, 3, 6);

    checkRowColumn(1, 4, 7);

    checkRowColumn(2, 5, 8);

    checkRowColumn(0, 4, 8);

    checkRowColumn(2, 4, 6);

    if (turn == 9 && winner == false) {
        console.log("The game is a draw!");
    }
}

function checkRowColumn(c1, c2, c3) {
    if (cells[c1].textContent == 'X' && cells[c2].textContent == 'X' && cells[c3].textContent == 'X') {
        console.log("PLAYER 1 Wins!")
        winner = true;
    } else if (cells[c1].textContent == 'O' && cells[c2].textContent == 'O' && cells[c3].textContent == 'O') {
        console.log("PLAYER 2 Wins!")
        winner = true;
    }
}

function gameReset() {
    for (i=0; i<cells.length; i++) {
        cells[i].textContent = "";
    }
    turn = 1;
    isXorO = 1;
    winner = false;
}

let cells = document.querySelectorAll('.row > div');
console.log(cells);

for (i=0; i<cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let isXorO = 1;
let turn = 1;
let winner = false;