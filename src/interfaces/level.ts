import { Tile } from "./tiles";
import { Bomb } from "./bombs";

interface Level {
    name: string;
    description: string;
    author: string;
    goals: number[],
    bombs: Bomb[];
    tiles: Tile[][];
}

export type { Level };