class Board {
    grid;
    piece;

    /* Reset the board when we start a new game. */
    reset() {
        this.grid = this.getEmptyBoard();
    }

    /* Get matrix filled zeros. */
    getEmptyBoard() {
        return Array.from(
            { length: ROWS}, () => Array(COLS).fill(0)
        );
    }

}