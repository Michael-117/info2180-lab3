
document.addEventListener('DOMContentLoaded', Main);

function Main(){
    lastmove = "-";
    board = document.querySelector('#board');
    for (let i = 0; i < board.children.length; i++){
        board.children[i].classList.add("square");
        board.children[i].addEventListener('mouseover',function(){
            this.classList.add('hover');
            });
        board.children[i].addEventListener('mouseout',function(){
            this.classList.remove('hover');
            });
        board.children[i].addEventListener('click', function(){
            if (lastmove == "-") {
                this.textContent = "X";
                this.classList.add("X");
                lastmove = "X";
            }
            else if (lastmove == "X") {
                this.textContent = "O";
                this.classList.add("O");
                lastmove = "O";
            }
            else {
                this.textContent = "X";
                this.classList.add("X");
                lastmove = "X";
            }

        })
    }

};
    


