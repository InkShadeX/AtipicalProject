document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".welcome").classList.add("welcome-hidden");
    }, 4000); // Espera 3 segundos antes de ocultar el div de bienvenida
});