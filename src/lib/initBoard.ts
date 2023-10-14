import { level } from "./globals";
import { position } from "./position";
import { curBomb, explosionTiles } from "./bombHandler";

type Side = "left" | "right" | "top" | "bottom";

function initBoard() {
    renderBoard();
}

function playerSpot(position: Side, x: number) {
    //console.log(position, x);
    let spot = document.createElement('div');
    spot.classList.add('playerSpot');
    spot.classList.add('tile');
    spot.id = 'playerSpot-' + position + '-' + x;
    return spot;
}

function emptyTile() {
    let tile = document.createElement('div');
    tile.classList.add('tile');
    tile.classList.add('empty');
    return tile;
}

function playerRow(position: Side) {
    let row = document.createElement('div');
    row.classList.add('row');
    row.id = 'playerRow-' + position;

    row.appendChild(emptyTile());

    for(let x = 0; x < 16; x++) {
        row.appendChild(playerSpot(position, x));
    }

    row.appendChild(emptyTile());

    return row;
}

function renderBoard() {
    console.log(curBomb);
    const board = level.tiles;

    let newBoard = document.createElement('div');
    newBoard.id = 'board';

    newBoard.appendChild(playerRow("top"));
    
    board.forEach((row, y) => {
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.id = `row-${y+1}`;
        newRow.appendChild(playerSpot("left", y));
        //console.log(row, y);
        row.forEach((tile, x) => {
            //console.log(tile, x);
            let newTile = document.createElement('div');
            newTile.classList.add('tile');
            newTile.classList.add(tile.type);
            newTile.id = `tile-${x}-${y+1}`;
            newRow.appendChild(newTile);
        });
        newRow.appendChild(playerSpot("right", y));
        newBoard.appendChild(newRow);
    });

    newBoard.appendChild(playerRow("bottom"));

    document.querySelector('#board')?.remove();
    document.querySelector('#main')?.appendChild(newBoard);

    document.getElementById('playerSpot-' + position.side + '-' + position.x)?.classList.add('player');

    if (curBomb) {
        document.getElementById('tile-' + curBomb.pos.x + '-' + (curBomb.pos.y + 1))?.classList.add('bomb');
    }

    explosionTiles.forEach((tile) => {
        document.getElementById('tile-' + tile.x + '-' + (tile.y + 1))?.classList.add('explosion');
    });
}

export { initBoard, renderBoard };