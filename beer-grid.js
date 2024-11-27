document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('product-grid');
    
    const beers = [
        {
            id: 1,
            category: "IPA",
            name: "Red I.P.A",
            image: "img/RedIPA.png", // Tu ruta de imagen
            description: "De color rojo, éste estilo se caracteriza por una gran proporción de diferentes lúpulo, no es ni mas ni menos que una I.P.A. roja, con la diferencia que las maltas tostadas asimilan diferentes aspectos y matices de los lúpulos dando una cerveza roja con gran carácter. 55 ibu / 7.5%"
        },
        {
            id: 2,
            category: "Blonde",
            name: "Blonde Ale",
            image: "img/BlondeAle.png", // Tu ruta de imagen
            description: "Rubia brillante, de cuerpo liviano pero cremosa con un acabado a lúpulo apetitoso y bien balanceado. 26 ibu / 5.5% alc"
        },
        {
            id: 3,
            category: "IPA",
            name: "Red I.P.A",
            image: "img/RedIPA.png", // Tu ruta de imagen
            description: "De color rojo, éste estilo se caracteriza por una gran proporción de diferentes lúpulo, no es ni mas ni menos que una I.P.A. roja, con la diferencia que las maltas tostadas asimilan diferentes aspectos y matices de los lúpulos dando una cerveza roja con gran carácter. 55 ibu / 7.5%"
        },
        {
            id: 4,
            category: "Blonde",
            name: "Blonde Ale",
            image: "img/BlondeAle.png", // Tu ruta de imagen
            description: "Rubia brillante, de cuerpo liviano pero cremosa con un acabado a lúpulo apetitoso y bien balanceado. 26 ibu / 5.5% alc"
        },
        {
            id: 5,
            category: "IPA",
            name: "Red I.P.A",
            image: "img/RedIPA.png", // Tu ruta de imagen
            description: "De color rojo, éste estilo se caracteriza por una gran proporción de diferentes lúpulo, no es ni mas ni menos que una I.P.A. roja, con la diferencia que las maltas tostadas asimilan diferentes aspectos y matices de los lúpulos dando una cerveza roja con gran carácter. 55 ibu / 7.5%"
        },
        {
            id: 6,
            category: "Blonde",
            name: "Blonde Ale",
            image: "img/BlondeAle.png", // Tu ruta de imagen
            description: "Rubia brillante, de cuerpo liviano pero cremosa con un acabado a lúpulo apetitoso y bien balanceado. 26 ibu / 5.5% alc"
        },
        {
            id: 7,
            category: "IPA",
            name: "Red I.P.A",
            image: "img/RedIPA.png", // Tu ruta de imagen
            description: "De color rojo, éste estilo se caracteriza por una gran proporción de diferentes lúpulo, no es ni mas ni menos que una I.P.A. roja, con la diferencia que las maltas tostadas asimilan diferentes aspectos y matices de los lúpulos dando una cerveza roja con gran carácter. 55 ibu / 7.5%"
        },
        {
            id: 8,
            category: "Blonde",
            name: "Blonde Ale",
            image: "img/BlondeAle.png", // Tu ruta de imagen
            description: "Rubia brillante, de cuerpo liviano pero cremosa con un acabado a lúpulo apetitoso y bien balanceado. 26 ibu / 5.5% alc"
        },
        {
            id: 9,
            category: "IPA",
            name: "Red I.P.A",
            image: "img/RedIPA.png", // Tu ruta de imagen
            description: "De color rojo, éste estilo se caracteriza por una gran proporción de diferentes lúpulo, no es ni mas ni menos que una I.P.A. roja, con la diferencia que las maltas tostadas asimilan diferentes aspectos y matices de los lúpulos dando una cerveza roja con gran carácter. 55 ibu / 7.5%"
        },
        {
            id: 10,
            category: "Blonde",
            name: "Blonde Ale",
            image: "img/BlondeAle.png", // Tu ruta de imagen
            description: "Rubia brillante, de cuerpo liviano pero cremosa con un acabado a lúpulo apetitoso y bien balanceado. 26 ibu / 5.5% alc"
        },
        {
            id: 11,
            category: "IPA",
            name: "Red I.P.A",
            image: "img/RedIPA.png", // Tu ruta de imagen
            description: "De color rojo, éste estilo se caracteriza por una gran proporción de diferentes lúpulo, no es ni mas ni menos que una I.P.A. roja, con la diferencia que las maltas tostadas asimilan diferentes aspectos y matices de los lúpulos dando una cerveza roja con gran carácter. 55 ibu / 7.5%"
        },
        {
            id: 12,
            category: "Blonde",
            name: "Blonde Ale",
            image: "img/BlondeAle.png", // Tu ruta de imagen
            description: "Rubia brillante, de cuerpo liviano pero cremosa con un acabado a lúpulo apetitoso y bien balanceado. 26 ibu / 5.5% alc"
        },
        {
            id: 13,
            category: "IPA",
            name: "Red I.P.A",
            image: "img/RedIPA.png", // Tu ruta de imagen
            description: "De color rojo, éste estilo se caracteriza por una gran proporción de diferentes lúpulo, no es ni mas ni menos que una I.P.A. roja, con la diferencia que las maltas tostadas asimilan diferentes aspectos y matices de los lúpulos dando una cerveza roja con gran carácter. 55 ibu / 7.5%"
        },
        {
            id: 14,
            category: "Blonde",
            name: "Blonde Ale",
            image: "img/BlondeAle.png", // Tu ruta de imagen
            description: "Rubia brillante, de cuerpo liviano pero cremosa con un acabado a lúpulo apetitoso y bien balanceado. 26 ibu / 5.5% alc"
        },
        {
            id: 15,
            category: "IPA",
            name: "Red I.P.A",
            image: "img/RedIPA.png", // Tu ruta de imagen
            description: "De color rojo, éste estilo se caracteriza por una gran proporción de diferentes lúpulo, no es ni mas ni menos que una I.P.A. roja, con la diferencia que las maltas tostadas asimilan diferentes aspectos y matices de los lúpulos dando una cerveza roja con gran carácter. 55 ibu / 7.5%"
        },
        {
            id: 16,
            category: "Blonde",
            name: "Blonde Ale",
            image: "img/BlondeAle.png", // Tu ruta de imagen
            description: "Rubia brillante, de cuerpo liviano pero cremosa con un acabado a lúpulo apetitoso y bien balanceado. 26 ibu / 5.5% alc"
        },
        {
            id: 17,
            category: "IPA",
            name: "Red I.P.A",
            image: "img/RedIPA.png", // Tu ruta de imagen
            description: "De color rojo, éste estilo se caracteriza por una gran proporción de diferentes lúpulo, no es ni mas ni menos que una I.P.A. roja, con la diferencia que las maltas tostadas asimilan diferentes aspectos y matices de los lúpulos dando una cerveza roja con gran carácter. 55 ibu / 7.5%"
        },
        {
            id: 18,
            category: "Blonde",
            name: "Blonde Ale",
            image: "img/BlondeAle.png", // Tu ruta de imagen
            description: "Rubia brillante, de cuerpo liviano pero cremosa con un acabado a lúpulo apetitoso y bien balanceado. 26 ibu / 5.5% alc"
        },
        
    ];

    function renderGrid() {
        productGrid.innerHTML = `
            <div class="grid grid-cols-6 gap-4">
                ${beers.map(beer => `
                    <div 
                        class="beer-card relative overflow-hidden rounded-lg shadow-lg" 
                        data-id="${beer.id}"
                        data-category="${beer.category}"
                    >
                        <img 
                            src="${beer.image}" 
                            alt="${beer.name}" 
                            class="w-full h-48 object-contain"
                        >
                        <h3 class="text-center font-bold p-2">${beer.name}</h3>
                        <div class="beer-description absolute inset-0 bg-white p-4 overflow-auto">
                            <img 
                                src="${beer.image}" 
                                alt="${beer.name}" 
                                class="w-full h-32 object-contain mb-2"
                            >
                            <h3 class="text-center font-bold mb-2">${beer.name}</h3>
                            <p class="text-sm text-gray-700">${beer.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Añadir evento de clic
        document.querySelectorAll('.beer-card').forEach(card => {
            card.addEventListener('click', function() {
                // Primero, cerrar cualquier tarjeta que esté abierta
                const currentlySelected = document.querySelector('.beer-card.selected');
                if (currentlySelected && currentlySelected !== this) {
                    currentlySelected.classList.remove('selected');
                }

                // Luego, alternar la selección de la tarjeta actual
                this.classList.toggle('selected');
            });
        });
    }

    renderGrid();
});

document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('main-footer');

    // Función para mostrar/ocultar footer al hacer scroll
    function toggleFooterVisibility() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Muestra el footer cuando se llega al final de la página
        if (scrollPosition + windowHeight >= documentHeight - 100) {
            footer.classList.add('visible');
        } else {
            footer.classList.remove('visible');
        }
    }

    // Agregar event listener de scroll
    window.addEventListener('scroll', toggleFooterVisibility);
});