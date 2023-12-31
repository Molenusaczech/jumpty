import { level } from "./levelLoader";
import { curBomb } from "./bombHandler";
type Side = "left" | "right" | "top" | "bottom";

interface PlayerPos {
    side: Side;
    x: number;
}

let position: PlayerPos = {
    side: "bottom",
    x: 0
};

function setPosition(x: number, newSide: Side) {
    position.x = x;
    position.side = newSide;
}

function moveRight() {
    if (position.x < level.tiles.length - 1) {
        position.x++;
    }
}

function moveLeft() {
    if (position.x > 0) {
        position.x--;
    }
}

function moveSideLeft() {
    switch (position.side) {
        case "left":
            position.side = "top";
            break;
        case "top":
            position.side = "right";
            break;
        case "right":
            position.side = "bottom";
            break;
        case "bottom":
            position.side = "left";
            break;
    }
}

function moveSideRight() {
    switch (position.side) {
        case "left":
            position.side = "bottom";
            break;
        case "top":
            position.side = "left";
            break;
        case "right":
            position.side = "top";
            break;
        case "bottom":
            position.side = "right";
            break;
    }
}

function move(direction: "left" | "right") {
    if (curBomb) return;
    if (direction == "left") {
        moveLeft();
    } else {
        moveRight();
    }
}

function moveSide(direction: "left" | "right") {
    if (curBomb) return;
    if (direction == "left") {
        moveSideLeft();
    } else {
        moveSideRight();
    }
}

export type { PlayerPos, Side };
export { 
    position, 
    setPosition, 
    move,
    moveSide
};