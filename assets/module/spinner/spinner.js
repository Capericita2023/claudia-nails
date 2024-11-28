// Aquí puedes agregar la lógica para ocultar el spinner después de que se complete la carga
window.onload = function() {
    // Ocultar el spinner y mostrar el contenido
    document.querySelector('.window-notice').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
};