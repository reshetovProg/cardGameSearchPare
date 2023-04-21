export const createCardsArray = (lvl) => {
	const cardsArray = [
		'type1',
		'type2',
		'type3',
		'type4',
		'type5',
		'type6',
		'type7',
		'type8'
	];

	switch (lvl) {
		case 'легкий':
			return cardsArray.slice(0, 4);
			break;
		case 'средний':
			return cardsArray.slice(0, 6);
			break;
		case 'сложный':
			return cardsArray;
			break;
		default:
			break;
	}
}

export const dublicateArray = (array) => {
	return array.reduce((res, cur) => res.concat([cur, cur]), []);
}

export const shuffle = (array) => {
	for (let i = 0; i < array.length; i++) {
		let randomIndex = Math.floor(Math.random() * array.length);
		[array[i], array[randomIndex]] = [array[randomIndex], array[i]];
	}
	return array;
}