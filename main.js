const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const body = document.querySelector('body');
const themeSwitcher = document.querySelector('#theme-switcher');
const menuItems = document.querySelectorAll('.hLink');

burger.addEventListener('click', () => {
	menu.classList.toggle('hidden');
});

menuItems.forEach(link => {
	link.addEventListener('click', () => {
		menu.classList.toggle('hidden');
	});
})

themeSwitcher.addEventListener('click', () => {
	body.classList.toggle('dark');
})