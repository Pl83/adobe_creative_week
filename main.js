const navLinks = document.querySelectorAll('.navLink');
var sections = [];
for (let i = 1; i <= 5; i++) {
    sections.push(document.getElementById('section' + i));
}

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((link) => link.classList.remove('active'));
        link.classList.add('active');
    });
});

sections.forEach((section) => {
    section.addEventListener('mouseenter', () => {
        navLinks.forEach((link) => link.classList.remove('active'));
        document.querySelector('a[href="#' + section.id + '"]').classList.add('active');
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

function selection() {
    var selectedText = window.getSelection().toString().trim();
    
    if (selectedText !== "") {
        speakText(selectedText);
    }
}

function speakText(text) {
    // Utilisez l'API SpeechSynthesis pour lire le texte à haute voix
    var speechSynthesis = window.speechSynthesis;
    var speechUtterance = new SpeechSynthesisUtterance(text);

    // Vous pouvez ajuster les paramètres de la voix ici si nécessaire
    // speechUtterance.voice = ...;

    // Lance la synthèse vocale
    speechSynthesis.speak(speechUtterance);
}

window.addEventListener('mouseup', selection);


const video = document.querySelector('video');

const pToHide = document.querySelectorAll('#section3 p');
const hrToHide = document.querySelectorAll('#section3 hr');
const toHide = [...pToHide, ...hrToHide];
video.addEventListener('play', () => {
    toHide.forEach(element => {
        element.classList.add('fadeOut');
    });
});



