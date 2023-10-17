interface EmptyTile {
    type: "empty";
}

interface TargetTile {
    type: "target";
    value: number;
}

interface WallTile {
    type: "wall";
}

export type Tile = EmptyTile | TargetTile | WallTile;