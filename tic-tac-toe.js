
document.addEventListener('DOMContentLoaded', (event) => {


    board = document.querySelector('#board');
    squares = [];
    for (let i = 0; i < board.children.length; i++){
        board.children[i].classList.add("square");
        squares.push(board.children[i].id)
    }
    

    


});
