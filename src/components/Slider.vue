<script>
import image1 from '../assets/img/fotoPortada.png';
import image2 from '../assets/img/1ff956fe-ca2d-4e02-80f3-1f34551ec1f5 1.png';
import image3 from '../assets/img/22d0fb07-26b0-48d8-824d-b34a65a002c8 1.png';
import reproductor from '../assets/img/reproductor.svg';

export default {
    name: "Slider",
    data() {
        return {
            duration: 9, // Duración total del ciclo (3 imágenes × 3s)
            interval: 3, // Intervalo entre imágenes
            progress: 0,
            images: [
                { src: image1 },
                { src: image2 },
                { src: image3 }
            ],
            reproductor:reproductor,
            nombre:'Cielo',
            evento:'MIS 15 AÑOS',
            fecha:'02 . 08 . 2025'
        }
    },
    mounted() {
        this.startProgressBar();
    },
    methods: {
        startProgressBar() {
            const increment = 100 / (this.duration * 10);

            const progressInterval = setInterval(() => {
                this.progress += increment;

                if (this.progress >= 100) {
                    this.progress = 0;
                }
            }, 100);
        }

    }

}
</script>
<template>
    <div class="slider-wrapper">
        <div class="slider-container">
            <div class="slider">
                <figure 
                    v-for="(image, index) in images" 
                    :key="index"
                    :style="{
                        backgroundImage: `url(${image.src})`,
                        animation: `fade ${duration}s infinite ${index * interval}s`
                    }"
                ></figure>

            </div>
            <div class="text-container">
                <h1>{{ nombre }}</h1>
                <h2>{{ evento }}</h2>
                <p>{{ fecha }}</p>
            </div>
        </div>

        <!-- Barra de progreso -->
        <div class="progress-container">
            <div class="progress-track"></div>
            <div class="progress-bar" :style="{ width: progress + '%' }">
                <div class="progress-circle"></div>
            </div>
        </div>
        
        <div class="control_reproductor">
            <!-- <img :src="reproductor" class="control" alt="Control reproductor"> -->
        </div>
        
    </div>
</template>
<style>
.penta{
    position:relative;
    z-index:0;
    width:100%;
}
.slider-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-top:1rem;
    
}

.slider-container {
    width: 320px;
    height: 100%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background-color: #000; 
}

.slider {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    /* background-color: #000;  */
}

.slider figure {
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    animation: fade 9s infinite;
    border-radius: 10px;
    opacity: 0;
    transform: scale(0.98);
    
}
.slider figure::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.74) 79.81%);
    border-radius: 10px;
    z-index: 2;
}
.text-container{
    position: absolute;
    bottom: -22%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    z-index: 4;
}
.text-container h1{
    font-size: 80px;
    font-weight: 100;
    font-family: var(--font-title);
}
.text-container h2{
    font-size: 22px;
    font-weight: 100;
    font-family: var(--font-subtitle);
}
.text-container p{
    font-size: 1rem;
    font-weight: 100;
    font-family: var(--font-subtitle);
}
.slider figure:nth-child(1) { animation-delay: 0s }
.slider figure:nth-child(2) { animation-delay: 3s }
.slider figure:nth-child(3) { animation-delay: 6s }

/* Barra de progreso */
.progress-container {
    width: 320px;
    height: 4px;
    position: relative;
    margin-top: 20px; /* Espacio entre slider y barra */
}

.progress-track {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--font-secondary);
    border-radius: 2px;
}

.progress-bar {
    position: absolute;
    height: 100%;
    background: #C9325D;
    border-radius: 2px;
    transition: width 0.1s linear;
}

.progress-circle {
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.3);
}

/* Control reproductor */
.control_reproductor {
    background-image: url('../assets/img/reproductor.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  height:60px;
  margin-top: 20px;
    margin: 20px 0; /* Espacio entre barra y reproductor */
    position:relative;
}

.control_reproductor .control {
    width: 80%;
    height: 30px;
    object-fit: cover;
}

/* Animación */
@keyframes fade {
    0% { opacity: 0; transform: scale(0.98) }
    10% { opacity: 1; transform: scale(1) }
    30% { opacity: 1; transform: scale(1) }
    40% { opacity: 0; transform: scale(0.98) }
    100% { opacity: 0; transform: scale(0.98) }
}

@media (min-width:768px){
    .slider-container {
        width: 100%;
        height: 400px;
        border-radius: 10px;
    }
    .slider {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .slider figure {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
        object-position: center;
        aspect-ratio: 4/3;
    }
    .control_reproductor .control {
        width: 30%;
        height: 40px;
    }
    .progress-container {
        width: 620px;
        margin: 5px; /* Espacio entre slider y barra */
    }
    .control_reproductor {
        height:80px;
        margin: 5px 0; /* Espacio entre barra y reproductor */
    }
    .text-container{
        position: absolute;
        bottom: -25%;
        left: 50%;
    }
    .text-container h1{
        font-size: 70px;
    }
    .text-container h2{
        font-size: 20px;
    }
    .text-container p{
        font-size: 15px;
    }
}
@media (min-width: 1024px) {
    .slider-container {
        width: 864px;
        height: 480px;
    }
}
</style>