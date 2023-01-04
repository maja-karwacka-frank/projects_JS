const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

const searchEngine = (e) => {
	const text = e.target.value.toLowerCase();

	li.forEach((el) => {
		if (el.textContent.toLocaleLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block';
		} else {
			el.style.display = 'none';
		}
	});
};

// alternatywa

const filterList = () => {
	li.forEach((item) => {
		const match = new RegExp(search.value, 'i').test(item.textContent);

		if (!match) {
			item.style.display = 'none';
		} else {
			item.style.display = 'block';
		}
	});
};

search.addEventListener('keyup', filterList);
