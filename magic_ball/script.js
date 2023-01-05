const img = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const array = [
	'Bardzo możliwe',
	'Tak!',
	'Nie',
	'Lepiej nie będę mówić...:/',
	'Wątpliwe',
	'Może',
];

const showAnimation = () => {
	img.classList.add('shake-animation');

	setTimeout(() => {
		img.classList.remove('shake-animation');
		checkInput();
	}, 1000);
};

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		answerGeneration();
		error.textContent = '';
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem "?"';
		answer.textContent = '';
	} else {
		error.textContent = 'Musisz zadać jakieś pytanie!';
		answer.textContent = '';
	}
};

const answerGeneration = () => {
	const number = Math.floor(Math.random() * 5);
	answer.innerHTML = `<span>Odpowiedź:</span> ${array[number]}`;
};

img.addEventListener('click', showAnimation);