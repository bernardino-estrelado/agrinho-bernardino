// Menu de navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Formulário de contato
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e){
    e.preventDefault();
    formMessage.textContent = "Mensagem enviada com sucesso! 🌱";
    formMessage.style.color = "green";
    form.reset();
});