
// Seleccionamos el botón y el menú desplegable
const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

// Función para mostrar u ocultar el menú
const toggleMenu = () => {
  if(menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
};


boton.addEventListener('click', toggleMenu);
