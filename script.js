function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  if (!form.checkValidity()) {
    event.preventDefault(); // Impede o envio se o formulário for inválido
    alert("Por favor, preencha todos os campos.");
  }
});
