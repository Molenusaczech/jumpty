import { Tile } from "../interfaces/tiles";

function renderTarget(value: number) {
    let element = document.createElement("div");

    if (value > 0) {
        element.innerHTML = "+" + value + "";
    } else {
        element.innerHTML = value + "";
    }
    return element;
}

function renderEmpty() {
    let element = document.createElement("div");

    element.innerHTML = "";

    return element;
}

function renderWall() {
    let element = document.createElement("div");

    //element.innerHTML = "";
    element.style.backgroundColor = "black";

    return element;
}

function renderTile(tile: Tile) {

    switch (tile.type) {
        case "target": {
            let element: HTMLElement = renderTarget(tile.value);
            return element;
        }
        case "empty": {
            let element: HTMLElement = renderEmpty();
            return element;
        }
        case "wall": {
            let element: HTMLElement = renderWall();
            return element;
        }
        default: {
            return renderEmpty();
        }
    }

}

export { renderTile };