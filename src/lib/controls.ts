import { move, moveSide } from "./position";
import { renderBoard } from "./board";
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
                //moveRight();
                move("right");
                break;
            case 'KeyA':
                console.log('move left');
                move("left");
                //moveLeft();
                break;
            case 'KeyE':
                console.log('move side right');
                //moveSideRight();
                moveSide("right");
                break;
            case 'KeyQ':
                console.log('move side left');
                //moveSideLeft();
                moveSide("left");
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