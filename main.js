let board = new Board();

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Calculate size of canvas from constants
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Scale blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

function play() {
    board.reset();
    let piece = new Piece(ctx)
    piece.draw();
    
    board.piece = piece;
}

moves = {
    [KEY.LEFT]:  p => ({ ...p, x: p.x - 1 }),
    [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
    [KEY.DOWN]:    p => ({ ...p, y: p.y + 1 })
};

document.addEventListener('keydown', event => {
    console.log(event);
    if(moves[event.keyCode]) {
        console.log('trying to move piece...');
        // Stop the event from bubbling
        event.preventDefault();

        let p = moves[event.keyCode](board.piece);

        if(true) {
            console.log('piece is gonna move');
            // If the move is valide, move the piece
            board.piece.move(p);

            // Clear the position before drawing
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            board.piece.draw();
        }
    }
});