<script>
import { inject } from 'vue';
import Slider from '../Slider.vue';


export default {
    name: 'PopUpIngreso',
    components: {
        Slider
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        close() {
            this.$emit('close');
        }
    },
    setup(_, { emit }) {
        const audioController = inject('audioController');

        const enterWithMusic = async () => {
            try {
                // await audioController.play(); 
                emit('close'); 
            } catch (error) {
                console.error("Error al reproducir música:", error);
                // audioController.stop(); 
            }
        };

        const enterWithoutMusic = () => {
            // audioController.stop();
            emit('close');  
        };

        return { enterWithMusic, enterWithoutMusic };
    }
}
</script>
<template>
    <div v-if="show" class="container_ingreso">
        <div class="ingreso_content">
            <Slider/>
        <div class="box"></div>
        <div class="panel_control">
                <Boton label="Ingresar con música" customClass="btn-mayor" @click="enterWithMusic()" />
                <Boton label="Ingresar sin" customClass="btn-mayor" @click="enterWithoutMusic()" />
        </div>
        </div>
        <div class="container_box1"></div>
        <div class="container_box2"></div>
    </div>
</template>
<style>
.container_ingreso{
    width:100%;
    min-height:100vh;
    overflow: hidden;
    border:1px solid red;
}
.container_box1{
    border:1px solid red;
    width:100%;
    min-height:40vh;
    background: url('../../assets/img/background_music.svg');
    position:relative;
}
.container_box2{
    border:1px solid red;
    width:100%;
    min-height:60vh;
    background: #000;
    position:relative
}
.box{
    min-width:100vw;
    height:18%;
    background-image: url('../../assets/img/pentagrama.svg');;
    position:absolute;
    z-index: 1;
    bottom:20%;
    display: flex;
    justify-content: center;
}
.panel_control{
     display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 110px;
}
</style>