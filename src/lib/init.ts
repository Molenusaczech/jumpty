import { initBoard } from './initBoard'
import { initControls } from './controls';
import { renderScore, resetScore } from './score';

function init() {
    console.log('init');
    initBoard();
    initControls();
    resetScore();
    renderScore();
}

export { init };