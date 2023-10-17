import { initBoard } from './board'
import { initControls } from './controls';
import { renderScore, resetScore } from './score';
import { renderBombGui } from './bombHandler';

function init() {
    console.log('init');
    initBoard();
    initControls();
    resetScore();
    renderScore();
    renderBombGui();
}

export { init };