
const navButton = document.querySelector('.nav-button');

// List of Navigation links
const navLinks = document.querySelectorAll('.nav__link')

// Opening
navButton.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
})

// Closing when a link is clicked
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
})