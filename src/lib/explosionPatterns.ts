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

function getExplosion(x: number, y: number, type: bombType) {
    let explosion: tileCoords[] = [];
    switch (type) {
        case "small":
            explosion = smallExplosion(x, y);
            break;
    }
    return explosion;
}

export { getExplosion };