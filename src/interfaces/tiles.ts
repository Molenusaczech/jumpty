interface EmptyTile {
    type: "empty";
}

interface TargetTile {
    type: "target";
    value: number;
}

export type Tile = EmptyTile | TargetTile;