<script>
import image1 from '../assets/img/1ff956fe-ca2d-4e02-80f3-1f34551ec1f5 1.png';
import image2 from '../assets/img/3fa0425a-d023-4fe7-8649-9a01ba20ea1b1.webp';
import image3 from '../assets/img/22d0fb07-26b0-48d8-824d-b34a65a002c81.webp';

export default {
    name: "SliderFiesta",
    data() {
        return {
            duration: 9,
            interval: 3,
            images: [
                { src: image1 },
                { src: image2 },
                { src: image3 }
            ]
        }
    }
}
</script>

<template>
    <div class="slider-responsive">
        <div class="slider-inner_fiesta">
            <figure 
                v-for="(image, index) in images" 
                :key="index"
                :style="{
                    backgroundImage: `url(${image.src})`,
                    animation: `fade ${duration}s infinite ${index * interval}s`
                }"
            ></figure>
        </div>
    </div>
</template>

<style scoped>

.slider-responsive {
    width: 100%;
  max-width: 800px; 
  margin: 0 auto;
  padding: 0 15px; 
  box-sizing: border-box;
}

.slider-inner_fiesta {
    position: relative;
    width: 100%;
    height:100px;
    padding-top: 56.25%; /* 4:3 Aspect Ratio (3/4 = 0.75) */
    overflow: hidden;
    border-radius: 12px;
    background: #000;
    
}

/* Figuras del slider */
.slider-inner_fiesta figure {
    position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(0.98);
  animation: fade 9s infinite;
}

.slider-inner_fiesta figure::before {
    content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.7) 100%);
  z-index: 1;
}

/* Asignación de delays */
.slider-inner_fiesta figure:nth-child(1) { animation-delay: 0s }
.slider-inner_fiesta figure:nth-child(2) { animation-delay: 3s }
.slider-inner_fiesta figure:nth-child(3) { animation-delay: 6s }

/* Animación */
@keyframes fade {
    0% { opacity: 0; transform: scale(0.98) }
    10% { opacity: 1; transform: scale(1) }
    30% { opacity: 1; transform: scale(1) }
    40% { opacity: 0; transform: scale(0.98) }
    100% { opacity: 0; transform: scale(0.98) }
}

/* Media Queries para diferentes tamaños */
@media (max-width: 374px) {
    .slider-inner {
        padding-top: 100%; /* Relación 1:1 para móviles muy pequeños */
    }
}

@media (min-width: 375px) and (max-width: 767px) {
    .slider-inner {
        padding-top: 85%; /* Ajuste para móviles */
    }
}

@media (min-width: 768px) {
    .slider-inner {
        padding-top: 56.25%; /* Relación 16:9 para tablets */
        max-width: 800px;
        margin: 0 auto;
    }
}

@media (min-width: 1024px) {
    .slider-inner {
        max-width: 864px;
    }
}
</style>