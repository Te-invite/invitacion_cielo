<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  year: Number,
  month: Number,
  date: Number,
  hour: Number,
  minute: Number,
  second: Number,
  millisecond: Number,
  startYear: Number,
  startMonth: Number,
  startDate: Number,
  startHour: Number,
  startMinute: Number,
  startSecond: Number,
  startMillisecond: Number
})

const loaded = ref(false)
const expired = ref(false)

const displayDays = ref('00')
const displayHours = ref('00')
const displayMinutes = ref('00')
const displaySeconds = ref('00')

const progress = ref(0)

const d = 'Días'
const h = 'Horas'
const m = 'Min'
const s = 'Seg'
const title = 'Faltan'
const title1 = 'Llegó el día'
const title2 = '¿Listos para festejar?'

const startTime = computed(() => new Date(
  props.startYear,
  props.startMonth - 1,
  props.startDate,
  props.startHour,
  props.startMinute,
  props.startSecond
))

const end = computed(() => new Date(
  props.year,
  props.month - 1,
  props.date,
  props.hour,
  props.minute,
  props.second,
  props.millisecond
))

const totalTime = computed(() => end.value.getTime() - startTime.value.getTime())


function formatNum(num) {
  return num < 10 ? '0' + num : String(num)
}

onMounted(() => {
  const timer = setInterval(() => {
    const now = new Date()
    const distance = end.value.getTime() - now.getTime()

    // Calcular progreso usando startTime.value
    const elapsedTime = now.getTime() - startTime.value.getTime()
    const progressPercent = (elapsedTime / totalTime.value) * 100
    progress.value = Math.min(100, Math.max(0, progressPercent))

    if (distance <= 0) {
      clearInterval(timer)
      expired.value = true
      progress.value = 100

      displayDays.value = '00'
      displayHours.value = '00'
      displayMinutes.value = '00'
      displaySeconds.value = '00'
      return
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    displayDays.value = formatNum(days)
    displayHours.value = formatNum(hours)
    displayMinutes.value = formatNum(minutes)
    displaySeconds.value = formatNum(seconds)

  }, 1000)
})

</script>



<template>
  <div class="container">
    <section class="title__counter">
      <h3 v-if="!expired" class="counter__txt">{{ title }}</h3>
      <h3 v-if="expired" class="counter__txt">{{ title1 }}</h3>
    </section>

    <!-- Barra de progreso -->
    <div class="progress-container-timer">
      <div class="progress-track-timer"></div>
      <div class="progress-bar-timer" :style="{ width: progress + '%' }">
        <div class="progress-circle"></div>
      </div>
    </div>

    <div class="container_fecha">
      <span><p>{{ displayDays }} {{ d }}</p></span>
      <span><p>{{ displayHours }}:{{ displayMinutes }}:{{ displaySeconds }} hs</p></span>
    </div>
    <div class="controles_reproductor"></div>
    <span class="title__counter1">
      <h3 class="counter__txt2">{{ title2 }}</h3>
    </span>
  </div>
</template>


<style scoped>
.container{
  color:#ffff;
  text-align: center;
  font-family: var(--font-subtitle);
}
.title__counter{
  margin-top:1rem;
}
.counter__txt{
   font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

}
.counter__txt2{
 letter-spacing: 0.12px;
  font-size: 13px;
 font-style: italic;
 font-weight: 700;
 line-height: normal;
 letter-spacing: 0.12px;
 

}
.container_fecha {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.container_fecha p{
  margin-top:.5rem ;
  font-size: 1rem;
}

/* Barra de progreso */
.progress-container-timer {
  width: 320px;
  height: 4px;
  position: relative;
  margin-top: 20px;
}

.progress-track-timer {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 2px;
  z-index: 1;
}

.progress-bar-timer {
  position: absolute;
  left: 0;
  height: 100%;
  background: #C9325D;
  border-radius: 2px;
  z-index: 2;
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
.controles_reproductor{
  background-image: url('../../assets/img/reproductor.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height:60px;
  margin-top: 20px;
}

@media (min-width: 768px){
  .counter__txt{
    font-size: 24px;
  }
  .counter__txt2{
    font-size: 20px;
  }

  .progress-container-timer {
        width: 620px;
  }
  .container_fecha span{
    font-size:1rem;
  }
}

</style>