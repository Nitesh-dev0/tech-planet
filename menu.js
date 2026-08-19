// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
	const mobileMenuButton = document.getElementById('mobile-menu-button');
	const mobileMenu = document.getElementById('mobile-menu');

	if (!mobileMenuButton || !mobileMenu) {
		return;
	}

	mobileMenuButton.setAttribute('aria-expanded', 'false');

	mobileMenuButton.addEventListener('click', () => {
		const isHidden = mobileMenu.classList.toggle('hidden');
		mobileMenuButton.setAttribute('aria-expanded', String(!isHidden));
	});

	mobileMenu.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			mobileMenu.classList.add('hidden');
			mobileMenuButton.setAttribute('aria-expanded', 'false');
		});
	});
});
