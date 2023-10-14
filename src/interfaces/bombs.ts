type bombType = "small" | "medium" | "large";

interface Bomb {
    type: bombType;
    count: number;
}
export type { Bomb, bombType };