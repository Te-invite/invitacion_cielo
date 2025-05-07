<script>
import image1 from '../assets/img/fotoPortada.png';
import image2 from '../assets/img/1ff956fe-ca2d-4e02-80f3-1f34551ec1f5 1.png';
import image3 from '../assets/img/22d0fb07-26b0-48d8-824d-b34a65a002c8 1.png';
import reproductor from '../assets/img/reproductor.svg'

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
            reproductor:reproductor
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
    <div class="slider-container">
        <div class="slider">
            <figure v-for="(image, index) in images" :key="index" :style="{
                backgroundImage: `url(${image.src})`,
                  animation: `fade ${duration}s infinite ${index * interval}s`
            }"></figure>
        </div>

        <!-- Barra de progreso -->
        <div class="progress-container">
            <div class="progress-track"></div>
            <div class="progress-bar"
            :style="{ width: progress + '%' }">
                <div class="progress-circle"></div>
            </div>
        </div>
        <div class="control_reproductor">
            <img :src="reproductor" class="control" alt="">
        </div>
    </div>
</template>
<style>
/* Estilos de transición Vue */
.slider-container {
    position: absolute;
    width: 320px;
    height:auto;
    z-index: 2;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.slider {
    width: 320px;
    height: 420px;
    position: relative;
    border-radius: 20px;
    background: #000;
    overflow: hidden;

}

.slider figure {
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    animation: fade 9s;
    border-radius: 20px;
    opacity: 0;
    transform: scale(0.98);
}

.slider figure:nth-child(1) {
    animation-delay: 0s
}

.slider figure:nth-child(2) {
    animation-delay: 3s
}

.slider figure:nth-child(3) {
    animation-delay: 6s
}

@keyframes fade {
    0% {
        opacity: 0;
        transform: scale(0.98)
    }

    10% {
        opacity: 1;
        transform: scale(1)
    }

    30% {
        opacity: 1;
        transform: scale(1)
    }

    40% {
        opacity: 0;
        transform: scale(0.98)
    }

    100% {
        opacity: 0;
        transform: scale(0.98)
    }
}

.progress-container {
    position: relative;
    width: 80%;
    height: 4px;
    margin-top: 15px;
}

.progress-track {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #585B5E;
    border-radius: 2px;
}

.progress-bar {
    position: absolute;
    height: 100%;
    background: #C9325D;
    border-radius: 2px;
    /* transition: width 0.1s linear; */
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

.slider::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.74) 79.81%);
    border-radius: 20px;
    z-index: 2;
}
.control_reproductor{
    min-width:100%;
    height:50%;
    display: flex;
    justify-content: center;
}
.control{
    margin:1rem 0;
}
</style>