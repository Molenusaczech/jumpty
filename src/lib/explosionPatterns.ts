import { bombType } from "../interfaces/bombs";
import { tileCoords } from "../interfaces/tileCoords";

function smallExplosion(x: number, y: number) {
    let explosion: tileCoords[] = [];
    
    explosion.push({ x: x, y: y });
    explosion.push({ x: x + 1, y: y });
    explosion.push({ x: x - 1, y: y });
    explosion.push({ x: x, y: y + 1 });
    explosion.push({ x: x, y: y - 1 });

    return explosion;
}

function mediumExplosion(x: number, y: number) {
    let explosion: tileCoords[] = [];

    explosion.push({ x: x, y: y });
    explosion.push({ x: x + 1, y: y });
    explosion.push({ x: x - 1, y: y });
    explosion.push({ x: x, y: y + 1 });
    explosion.push({ x: x, y: y - 1 });
    explosion.push({ x: x + 1, y: y + 1 });
    explosion.push({ x: x - 1, y: y - 1 });
    explosion.push({ x: x - 1, y: y + 1 });
    explosion.push({ x: x + 1, y: y - 1 });

    return explosion;
}

function largeExplosion(x: number, y: number) {
    let explosion: tileCoords[] = [];

    explosion.push({ x: x, y: y });
    explosion.push({ x: x + 1, y: y });
    explosion.push({ x: x - 1, y: y });
    explosion.push({ x: x, y: y + 1 });
    explosion.push({ x: x, y: y - 1 });
    explosion.push({ x: x + 1, y: y + 1 });
    explosion.push({ x: x - 1, y: y - 1 });
    explosion.push({ x: x - 1, y: y + 1 });
    explosion.push({ x: x + 1, y: y - 1 });
    explosion.push({ x: x + 2, y: y });
    explosion.push({ x: x - 2, y: y });
    explosion.push({ x: x, y: y + 2 });
    explosion.push({ x: x, y: y - 2 });

    return explosion;
}

function getExplosion(x: number, y: number, type: bombType) {
    let explosion: tileCoords[] = [];
    switch (type) {
        case "small":
            explosion = smallExplosion(x, y);
            break;
        case "medium":
            explosion = mediumExplosion(x, y);
            break;
        case "large":
            explosion = largeExplosion(x, y);
            break;
    }
    return explosion;
}

export { getExplosion };