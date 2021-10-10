document.addEventListener('DOMContentLoaded', Main);

function Main(){
    lastmove = "-";
    boardState = Array(9);
    board = document.querySelector('#board');
    for (let i = 0; i < board.children.length; i++){
        //Event Listener for game environment creation
        board.children[i].classList.add("square");
        //Event Listener for game square hover on
        board.children[i].addEventListener('mouseover',function(){
            this.classList.add('hover');
            });
        //Event Listener for game square hover off
        board.children[i].addEventListener('mouseout',function(){
            this.classList.remove('hover');
            });
        //Event Listeners for game square clicks
        board.children[i].addEventListener('click', function(){
            if (lastmove == "-") {
                this.textContent = "X";
                this.classList.add("X");
                lastmove = "X";
                boardState[i] = "X";
            }
            else if (lastmove == "X") {
                this.textContent = "O";
                this.classList.add("O");
                lastmove = "O";
                boardState[i] = "O";
            }
            else {
                this.textContent = "X";
                this.classList.add("X");
                lastmove = "X";
                boardState[i] = "X";
            }
            //Disallow Cheating
            this.removeEventListener('click',arguments.callee);
            //Confirm Winner
            checkWin();
        });
    }
    //Reset Game
    document.querySelector('button').addEventListener('click', function(){
        window.location.reload();
    });
};
    
function checkWin(){
    //X Win Conditions
    if (boardState[0] == "X" && boardState[1] == "X" && boardState[2] == "X"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! X is the Winner!";
    }
    else if (boardState[3] == "X" && boardState[4] == "X" && boardState[5] == "X"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! X is the Winner!";
    }
    else if (boardState[6] == "X" && boardState[7] == "X" && boardState[8] == "X"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! X is the Winner!";
    }
    else if (boardState[0] == "X" && boardState[3] == "X" && boardState[6] == "X"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! X is the Winner!";
    }
    else if (boardState[1] == "X" && boardState[4] == "X" && boardState[7] == "X"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! X is the Winner!";
    }
    else if (boardState[2] == "X" && boardState[5] == "X" && boardState[8] == "X"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! X is the Winner!";
    }
    else if (boardState[0] == "X" && boardState[4] == "X" && boardState[8] == "X"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! X is the Winner!";
    }
    else if (boardState[2] == "X" && boardState[4] == "X" && boardState[6] == "X"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! X is the Winner!";
    }

    //O Win Conditions
    else if (boardState[0] == "O" && boardState[1] == "O" && boardState[2] == "O"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! O is the Winner!";
    }    
    else if (boardState[3] == "O" && boardState[4] == "O" && boardState[5] == "O"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! O is the Winner!";
    }
    else if (boardState[6] == "O" && boardState[7] == "O" && boardState[8] == "O"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! O is the Winner!";
    }
    else if (boardState[0] == "O" && boardState[3] == "O" && boardState[6] == "O"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! O is the Winner!";
    }
    else if (boardState[1] == "O" && boardState[4] == "O" && boardState[7] == "O"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! O is the Winner!";
    }
    else if (boardState[2] == "O" && boardState[5] == "O" && boardState[8] == "O"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! O is the Winner!";
    }
    else if (boardState[0] == "O" && boardState[4] == "O" && boardState[8] == "O"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! O is the Winner!";        
    }
    else if (boardState[2] == "O" && boardState[4] == "O" && boardState[6] == "O"){
        document.querySelector('#status').classList.add("you-won");
        document.querySelector('#status').textContent = "Congratulations! O is the Winner!";
    }
};