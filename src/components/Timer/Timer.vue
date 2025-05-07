<script>
import Counter from './Counter.vue';
export default {
    name: 'Timer',
    components: {
        Counter
    }
};
</script>

<template>
    <div id="dias" class="section__timer cuadrante" data-aos="fade-up">
        <div class="countdown">
            <Counter :year="2025" :month="5" :date="17" :hour="21" :minute="0" :second="0" :millisecond="31" />
        </div>
    </div>
</template>

<style>
.section__timer {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.cuadrante{
    background-image: url(../../assets/img/marco.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


@media (min-width: 768px) and (max-width: 991px) {
   
    .section__timer {
        width: 600px;
        height: 600px;
    }
}

@media (min-width: 1024px) {
    .section__timer {
        width: 600px;
        height: 600px;
    }

}
</style>