const carousel = 
    `
    <section>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                
                    <div class="carousel-item active">
                        <img src="src/5.jpg" class="d-block w-100 image-height" alt="Slide 1">
                        <div class="carousel-caption text-start">
                            <h3>Exclusivos</h3>
                            <p>Comprometidos con traer la ultima tecnologia a Colombia.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="src/1.jpg" class="d-block w-100 image-height" alt="Slide 2">
                        <div class="carousel-caption text-start">
                            <h3>Todo en un solo lugar</h3>
                            <p>Desde la compra hasta la engallada!</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="src/2.jpg" class="d-block w-100 image-height" alt="Slide 3">
                        <div class="carousel-caption text-start">
                            <h3>Somos Clasicos</h3>
                            <p>Miramos hacia el futuro con los pies en la tierra!</p>
                        </div>
                    </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>

    <style>
        .image-height {
            height: 500px; /* Altura deseada */
            object-fit: cover;
        }

        @media (max-width: 768px) {
            .image-height {
            height: 600px; /* Altura deseada para pantallas más pequeñas */
            }
        }  
    </style>
  
    `
export default carousel