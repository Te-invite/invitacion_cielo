<script>
import { ref, computed } from 'vue'
import PopUpIngreso from '../components/popup/PopUpIngreso.vue';
import Portada from '../components/sections/Portada.vue';
import Fiesta from '../components/sections/Fiesta.vue';
import Regalo from '../components/sections/Regalo.vue';
import Fiesta2 from '../components/sections/Fiesta2.vue';

export default {
  name: 'Invitacion',
  components: {
    PopUpIngreso, Portada, Fiesta, Regalo, Fiesta2
  },
  data() {
    return {
      showPopUp: true,
      currentIndex: 0, // índice actual del carrusel
    };
  },
  methods: {
    hadleClosePopUp() {
      this.showPopUp = false;
    },
    nextSlide() {
      if (this.currentIndex < 1) this.currentIndex++;
    },
    prevSlide() {
      if (this.currentIndex > 0) this.currentIndex--;
    }
  },
  setup() {
    const showPopUp = ref(true)
    const currentIndex = ref(0)
    const slides = [Portada, Fiesta, Regalo, Fiesta2] // Añade más componentes según necesites
    const totalSlides = computed(() => slides.length)

    const handleClosePopUp = () => {
      showPopUp.value = false
    }

    const nextSlide = () => {
      if (currentIndex.value < totalSlides.value - 1) {
        currentIndex.value++
      }
    }

    const prevSlide = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--
      }
    }

    return {
      showPopUp,
      currentIndex,
      totalSlides,
      handleClosePopUp,
      nextSlide,
      prevSlide
    }
  }

}
</script>
<template>
  <PopUpIngreso v-if="showPopUp" :show="showPopUp" @close="hadleClosePopUp" />

  <div v-if="!showPopUp" class="carousel-container">
    <div 
      class="carousel-track" 
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <!-- Sesión 1: Portada -->
      <div class="carousel-slide">
        <Portada @next="nextSlide" />
      </div>
      
      <!-- Sesión 2: Fiesta -->
      <div class="carousel-slide">
        <Fiesta @back="prevSlide" @next="nextSlide" />
      </div>
      <!-- Sesión 2: Regalo -->
      <div class="carousel-slide">
        <Regalo @back="prevSlide" @next="nextSlide" />
      </div>

       <div class="carousel-slide">
        <Fiesta2 @back="prevSlide" />
      </div>
      
      <!-- Añade más sesiones según necesites -->
    </div>

    <!-- Controles de navegación -->
    <button 
      v-if="currentIndex > 0" 
      class="carousel-btn prev" 
      @click="prevSlide">
      ‹
    </button>
    
    <button 
      v-if="currentIndex < totalSlides - 1" 
      class="carousel-btn next" 
      @click="nextSlide"
    >
      ›
    </button>
  </div>
</template>
<style>
.carousel-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
}

.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
}

.carousel-btn.prev {
  left: 20px;
}

.carousel-btn.next {
  right: 20px;
}

.carousel-btn:focus {
  outline: none;
}
</style>