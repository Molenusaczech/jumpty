import { bombType } from "../interfaces/bombs";
import { Side } from "./position";
import { position } from "./position";
import { level } from "./levelLoader";
import { tileCoords } from "../interfaces/tileCoords";
import { getExplosion } from "./explosionPatterns";
import { renderBoard } from "./board";
import { addScore } from "./score";

interface curBombInterface {
    pos: { x: number, y: number },
    direction: Side,
    type: bombType,
};

let selectedBomb: bombType = "small";
let curBomb: curBombInterface | undefined = undefined;
let explosionTiles: tileCoords[] = [];
let bombTickInterval: ReturnType<typeof setTimeout> | undefined = undefined;

function spawnBomb() {

    if (level.bombs.find((bomb) => bomb.type == selectedBomb)?.count == 0) {
        console.log("no bombs left");
        return;
    }

    let positionIndexX = position.x;
    let positionIndexY = 0;
    /*if (position.side == "left" || position.side == "right") {
        positionIndexX = 0;
        positionIndexY = position.x;
    }*/

    switch (position.side) {
        case "left":
            positionIndexX = 0;
            positionIndexY = position.x;
            break;
        case "right":
            positionIndexX = 15;
            positionIndexY = position.x;
            break;
        case "top":
            positionIndexX = position.x;
            positionIndexY = 0;
            break;
        case "bottom":
            positionIndexX = position.x;
            positionIndexY = 15;
            break;
    }

    curBomb = {
        pos: { x: positionIndexX, y: positionIndexY },
        direction: position.side,
        type: selectedBomb,
    };

    bombTickInterval = setInterval(bombTick, 500);
    console.log(bombTickInterval);

    level.bombs.find((bomb) => bomb.type == selectedBomb)!.count--;
}

function bombMove() {

    if (curBomb == undefined) {
        return;
    }

    let positionIndexX = Number(curBomb.pos.x+"");
    let positionIndexY =  Number(curBomb.pos.y+"");
    switch (position.side) {
        case "left":
            positionIndexX++;
            break;
        case "right":
            positionIndexX--;
            break;
        case "top":
            positionIndexY++;
            break;
        case "bottom":
            positionIndexY--;
            break;
    }

    if (positionIndexX < 0 || positionIndexX > level.tiles[0].length - 1 || positionIndexY < 0 || positionIndexY > level.tiles.length - 1) {
        console.log("boom");
        bombExplode();
        return;
    }

    if (level.tiles[positionIndexY][positionIndexX].type != "empty") {
        console.log("boom");
        bombExplode();
        return;
    }
    curBomb.pos.x = positionIndexX;
    curBomb.pos.y = positionIndexY;
}

function bombTick() {

    if (curBomb == undefined) {
        return;
    }

    bombMove();

    renderBoard();
}

function bombExplode() {

    if (curBomb == undefined) {
        return;
    }

    let explosion = getExplosion(curBomb.pos.x, curBomb.pos.y, curBomb.type);
    explosionTiles = explosion;

    explosion.forEach((tile) => {
        if (level.tiles[tile.y]) {
            if (level.tiles[tile.y][tile.x]) {
                if (level.tiles[tile.y][tile.x].type == "target") {
                    let targettile = level.tiles[tile.y][tile.x];
                    if (targettile.type == "target") addScore(targettile.value);
                    level.tiles[tile.y][tile.x].type = "empty";
                }
            }
        }
    });

    curBomb = undefined;
    clearInterval(bombTickInterval);

    renderBoard();

    setTimeout(() => {
        explosionTiles = [];
        renderBoard();
    }, 1000);
}

function renderBombGui() {
    let bombGui = document.createElement('div');
    bombGui.id = 'bombGui';

    level.bombs.forEach((bomb) => {
        let bombButton = document.createElement('button');
        bombButton.innerText = bomb.type + " (" + bomb.count + ")";

        if (selectedBomb == bomb.type) bombButton.classList.add('selected');

        if (bomb.count == 0) bombButton.disabled = true;

        bombButton.onclick = () => {
            selectedBomb = bomb.type;
            renderBombGui();
        };
        bombGui.appendChild(bombButton);
    });

    if (document.body.querySelector("#bombGui")) document.body.removeChild(document.getElementById('bombGui')!);
    document.body.appendChild(bombGui);
}

export { curBomb, selectedBomb, explosionTiles, spawnBomb, bombTick, bombExplode, renderBombGui };