const navLinks = document.querySelectorAll('.navLink');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((link) => link.classList.remove('active'));
        link.classList.add('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
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

function selection(){
    if (window.getSelection) {
        console.log(window.getSelection().toString());
    }
          
}

window.addEventListener('mouseup', selection);


var text = "Hello World!"
