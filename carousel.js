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

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', (event) => {
            event.stopPropagation();

            // Si ya está seleccionada, deseleccionar
            if (card.classList.contains('selected')) {
                card.classList.remove('selected');
                
                // Restablecer posición original
                card.style.top = '';
                card.style.left = '';
                card.style.transform = '';
                return;
            }

            // Deseleccionar todas las tarjetas
            productCards.forEach(c => {
                c.classList.remove('selected');
                c.style.top = '';
                c.style.left = '';
                c.style.transform = '';
            });

            // Obtener las coordenadas de la tarjeta original
            const cardRect = card.getBoundingClientRect();
            const gridRect = productGrid.getBoundingClientRect();

            // Calcular el desplazamiento necesario para centrar
            const centerX = (gridRect.width / 2) - (cardRect.width / 2);
            const centerY = (gridRect.height / 2) - (cardRect.height / 2);

            // Calcular el desplazamiento desde la posición original
            const offsetX = (centerX - cardRect.left + gridRect.left) / card.offsetWidth;
            const offsetY = (centerY - cardRect.top + gridRect.top) / card.offsetHeight;

            // Establecer la transformación para centrar desde el punto original
            card.style.transform = `translate(${offsetX * 100}%, ${offsetY * 100}%) scale(1.5)`;
            card.classList.add('selected');
        });
    });

    // Deseleccionar al hacer clic fuera de las tarjetas
    document.addEventListener('click', (event) => {
        const isClickInsideGrid = event.target.closest('.product-grid');
        if (!isClickInsideGrid) {
            productCards.forEach(card => {
                card.classList.remove('selected');
                card.style.top = '';
                card.style.left = '';
                card.style.transform = '';
            });
        }
    });
});