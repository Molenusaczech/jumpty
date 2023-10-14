import { moveRight, moveLeft, moveSideRight, moveSideLeft } from "./position";
import { renderBoard } from "./initBoard";
import { spawnBomb, curBomb, bombExplode } from "./bombHandler";

function initControls() {
    document.addEventListener('keydown', (event) => {
        if (event.defaultPrevented) {
            return;
        }
        console.log(event.code);
        switch (event.code) {
            case 'KeyD':
                console.log('move right');
                moveRight();
                break;
            case 'KeyA':
                console.log('move left');
                moveLeft();
                break;
            case 'KeyE':
                console.log('move side right');
                moveSideRight();
                break;
            case 'KeyQ':
                console.log('move side left');
                moveSideLeft();
                break;
            case 'Space':
                console.log('place bomb');

                if (curBomb) {
                    bombExplode();
                    break;
                }

                spawnBomb();
                break;
        }
        renderBoard();
    });
}

export { initControls };