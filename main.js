const navLinks = document.querySelectorAll('.navLink');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((link) => link.classList.remove('active'));
        link.classList.add('active');
    });
});

