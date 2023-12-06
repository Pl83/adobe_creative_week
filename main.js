const navLinks = document.querySelectorAll('.navLink');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((link) => link.classList.remove('active'));
        link.classList.add('active');
    });
});

const QA = document.querySelectorAll('.QA');
const answer = document.querySelectorAll('.answer');
const arrow = document.querySelectorAll('.QA img');

QA.forEach((question, index) => {
    question.addEventListener('click', () => {
        answer[index].classList.toggle('open');
        arrow[index].classList.toggle('rotate');
    });
} );