import { startGame } from "./startGame.js"


export const createGameMenu = (flag) => {
	const btnPrev = document.querySelector('.header__btn-prev');
	btnPrev.style.display = "none";

	const score = document.querySelector('.score');
	console.log(score.textContent);
	let s1 = Number(score.textContent);
	score.style.display = "none";

	const bestScore = document.querySelector('.best_score');
	console.log(bestScore.textContent);
	if (bestScore.textContent == "") {
		bestScore.style.visibility = "hidden";
		bestScore.textContent = "РЕКОРД: 1000000";
	}
	else {
		if (Number(bestScore.textContent.slice(8, bestScore.textContent.length)) > s1 && flag) {
			bestScore.textContent = `РЕКОРД: ${s1}`;
			bestScore.style.visibility = "visible";
		}
	}


	const title = document.createElement('h2');
	title.classList.add('game-menu__title');
	const gameSection = document.querySelector('.game-section__container');
	gameSection.innerHTML = "";

	title.textContent = "сложность игры";

	const createMenuButton = (lvl) => {
		const button = document.createElement('div');
		button.classList.add('game-btn');

		if (lvl == 1) lvl = 'легкий';
		else if (lvl == 2) lvl = 'средний';
		else if (lvl == 3) lvl = 'сложный';
		button.textContent = lvl;
		button.addEventListener('click', () => startGame(lvl));
		return button;
	}

	gameSection.append(
		title,
		createMenuButton(1),
		createMenuButton(2),
		createMenuButton(3)
	);
}