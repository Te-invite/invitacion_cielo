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
    <div id="dias" class="section__timer">
        <div class="countdown"><Counter
            :year="2025"
            :month="5"
            :date="9"
            :hour="21"
            :minute="33"
            :second="0"
            :millisecond="31"

            :start-year="2025"
            :start-month="5"
            :start-date="9"
            :start-hour="21"
            :start-minute="28"
            :start-second="0"
            :start-millisecond="0"
            />
        </div>
    </div>
</template>

<style>
.section__timer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
}



@media (min-width: 768px) and (max-width: 991px) {
   
    .section__timer {
        width: 600px;
    }
}

@media (min-width: 1024px) {
    .section__timer {
        width: 600px;
    }

}
</style>