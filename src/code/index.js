const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

function resizeEvent() {
    const width = window.innerWidth
    const height = window.innerHeight

    if (width < 768) {
        document.getElementById("title").innerHTML = "Alfred"
    } else {
        document.getElementById("title").innerHTML = "Alfred - Your AI Chatbot Expert"
    }
}

resizeEvent(); window.addEventListener("resize", resizeEvent)