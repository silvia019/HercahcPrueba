/*Acordion de nosotros mision vision y valores */
const buttons = document.querySelectorAll('.acordeon-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const panel = button.nextElementSibling;
      panel.classList.toggle('open');
    });
  });

const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });