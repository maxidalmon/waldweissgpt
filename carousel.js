document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    
    let currentIndex = 0;
    let intervalId;

    // Función para mostrar un slide específico
    function showSlide(index) {
        // Desactivar todos los slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Activar el slide actual
        slides[index].classList.add('active');
    }

    // Función para avanzar al siguiente slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Función para retroceder al slide anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Iniciar carrusel automático
    function startAutoSlide() {
        // Limpiar cualquier intervalo existente
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(nextSlide, 5000); // Cambiar slide cada 5 segundos
    }

    // Detener carrusel automático al hacer hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    // Reanudar carrusel automático al salir del hover
    carousel.addEventListener('mouseleave', startAutoSlide);

    // Eventos de botones de navegación
    prevButton.addEventListener('click', () => {
        prevSlide();
        startAutoSlide();
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        startAutoSlide();
    });

    // Iniciar el carrusel mostrando el primer slide
    startAutoSlide();
});