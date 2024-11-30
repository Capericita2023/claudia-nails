function redirectToWhatsApp() {
    const number = "+5358948276";
    const message = "Hola, quisiera reservar una cita.";
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
