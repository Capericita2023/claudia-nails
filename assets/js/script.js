function redirectToWhatsApp() {
    const number = "+5351130037";
    const message = "Hola, quisiera reservar una cita.";
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

const modals = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const close = document.getElementById('close');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const menuButton = document.getElementById('menuButton');
const navbar = document.getElementById('left-menu');

let currentIndex = 0;
let currentGallery = [];

document.querySelectorAll('.left-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const galleryId = link.getAttribute('data-gallery');
        showGallery(galleryId);
        if (window.innerWidth <= 440) {
            navbar.style.left = '-200px'; // Ocultar el menú al seleccionar
        }
    });
});

menuButton.addEventListener('click', () => {
    if (navbar.style.left === '0px') {
        navbar.style.left = '-200px'; // Ocultar
    } else {
        navbar.style.left = '0px'; // Mostrar
    }
});

document.querySelectorAll('.gallery-section').forEach(gallery => {
    const images = gallery.querySelectorAll('img');
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentGallery = Array.from(images);
            currentIndex = index;
            showModal(img.src);
        });
    });
});

function showModal(src) {
    modals.style.display = 'flex';
    modalImage.src = src;
}

close.addEventListener('click', () => {
    modals.style.display = 'none';
});

prev.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentGallery.length - 1;
    modalImage.src = currentGallery[currentIndex].src;
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex < currentGallery.length - 1) ? currentIndex + 1 : 0;
    modalImage.src = currentGallery[currentIndex].src;
});

// Cerrar el modal al hacer clic fuera de la imagen
modals.addEventListener('click', (event) => {
    if (event.target === modals) {
        modals.style.display = 'none';
    }
});

function showGallery(id) {
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

window.addEventListener('scroll', function () {
    const button = document.querySelector('.menu-button');
    const sectionInfo = document.querySelector('.info-section');
    const hh = document.querySelector('header').offsetHeight;
    const mh = document.querySelector('main').offsetHeight;

    const rect = sectionInfo.getBoundingClientRect();
    const buttonHeight = button.offsetHeight;

    if (rect.bottom > 0 && rect.bottom < window.innerHeight) {
        button.style.bottom = `${buttonHeight + (window.innerHeight - rect.bottom + mh - hh * 1.5)}px`;
    }
});