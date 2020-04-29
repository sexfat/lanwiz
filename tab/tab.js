const tabContent = document.querySelectorAll('.tabContainer');
const tabs = document.querySelectorAll('#ul li');

document.addEventListener('DOMContentLoaded', () => {
	for (let div of tabContent) div.style.display = 'none';
	tabContent[0].style.display = 'block';
});

let tabActive = (e) => {
	for (let tabName of tabs) tabName.classList.remove('is-active');
	e.currentTarget.classList.add('is-active');

	for (let i = 0; i < tabContent.length; i++) {
		tabContent[i].setAttribute('data-id', i);
		e.currentTarget.getAttribute('data-tabid') === tabContent[i].getAttribute('data-id')
			? (tabContent[i].style.display = 'block')
			: (tabContent[i].style.display = 'none');
	}
};

tabs.forEach((currentElement, index) => {
	currentElement.setAttribute('data-tabid', index);
	currentElement.addEventListener('click', tabActive);
});
