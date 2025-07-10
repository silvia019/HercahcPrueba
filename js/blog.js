const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  /*articulo modal */

  const leerMasBtn = document.getElementById('leerMasBtn');
  const cerrarBtn = document.getElementById('cierra');
  const contenido = document.getElementById('contenidoArticulo');

  leerMasBtn.addEventListener('click', () => {
    contenido.style.display = 'block';
    leerMasBtn.style.display = 'none';
  });

  cerrarBtn.addEventListener('click', () => {
    contenido.style.display = 'none';
    leerMasBtn.style.display = 'inline-block';
  });

  const leerMasBtn1 = document.getElementById('leer');
  const cerrar = document.getElementById('cerrar');
  const articulo = document.getElementById('Articulo1');

  leerMasBtn1.addEventListener('click', () => {
    articulo.style.display = 'block';
    leerMasBtn1.style.display = 'none';
  });

  cerrar.addEventListener('click', () => {
    articulo.style.display = 'none';
    leerMasBtn1.style.display = 'inline-block';
  });
