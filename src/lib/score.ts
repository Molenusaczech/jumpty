import { level } from "./levelLoader";
let score: number = 0;

function renderScore() {

    let scoreElement = document.createElement('div');

    let curScoreElement = document.createElement('div');
    curScoreElement.innerHTML = "Score: " + score;
    scoreElement.appendChild(curScoreElement);

    level.goals.forEach((goal, index) => {
        let curScoreElement = document.createElement('div');
        curScoreElement.innerHTML = "Goal " + (index + 1) + ": " + goal;
        if (score >= goal) {
            curScoreElement.classList.add("goalReached");
        }
        scoreElement.appendChild(curScoreElement);
    });

    document.querySelector("#score")!.innerHTML = "";
    document.querySelector("#score")!.insertAdjacentElement("beforeend", scoreElement);

}

function resetScore() {
    score = 0;
    renderScore();
}

function addScore(amount: number) {
    score += amount;
    renderScore();
}

export { score, renderScore, resetScore, addScore };