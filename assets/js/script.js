function redirectToWhatsApp() {
    const number = "+5351130037";
    const message = "Hola, quisiera reservar una cita.";
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = src; // Asigna la fuente de la imagen ampliada
    modal.style.display = 'flex'; // Muestra la ventana emergente
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Oculta la ventana emergente
}

function ShowGallery(id) {
    const divs = document.querySelectorAll('.gallery-section');
    divs.forEach(div => {
        div.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

function ShowPrice(id) {
    const divs = document.querySelectorAll('.price-section');
    divs.forEach(div => {
        div.style.display = 'none';
    });
    document.getElementById(id).style.display = 'flex';
}