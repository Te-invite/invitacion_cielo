<script>
import { inject } from 'vue';
import Slider from '../Slider.vue';
import Boton from '../utils/Boton.vue';

export default {
    name: 'PopUpIngreso',
    components: {
        Slider,
        Boton
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
    <div v-if="show" class="popup-container">
        <!-- Contenedor absoluto único -->
        <div class="absolute-container">
            <!-- Fondo dividido -->
            <div class="background-top"></div>
            <div class="background-bottom"></div>
            
            <!-- Contenido central -->
            <div class="content-wrapper">
                <Slider class="slider" />
                <div class="pentagram-line"></div>
                <div class="control-panel">
                    <Boton label="Ingresar con música" customClass="btn-mayor" @click="enterWithMusic()" />
                    <Boton label="Ingresar sin música" customClass="btn-mayor" @click="enterWithoutMusic()" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.popup-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    z-index: 1000;
}

.absolute-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.background-top {
    flex: 0 0 40%;
    background: url('../../assets/img/background_music.svg') no-repeat center/cover;
}

.background-bottom {
    flex: 1;
    background: #000;
}

.content-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
}

.slider {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 320px;
    height: 520px;
}



.absolute-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.background-top {
    flex: 0 0 40%;
    background: url('../../assets/img/background_music.svg') no-repeat center/cover;
}

.background-bottom {
    flex: 1;
    background: #000;
}

.content-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
}

.slider {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 320px;
    height: 520px;
}

.pentagram-line {
    width: 100vw;
    height: 18%;
    background: url('../../assets/img/pentagrama.svg') no-repeat center;
    background-size: 100% auto;
    margin-top: auto;
    overflow: hidden;
    background-size: cover;
    z-index: 0;

}

.control-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 80%;
    max-width: 300px;
    margin-top: 10px;
    z-index: 2;
}
@media (min-width:768px){
    .slider {
        width: 684px;
        height: 480px;
        aspect-ratio: 4/3;
        border-radius: 10px;
    }
    .pentagram-line {
        width:100%;
        height:30%;
    }
    .control-panel {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;
    }
    .content-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding-bottom: 10px;
    }
    .control-panel {
        max-width: 400px;
        margin-top: 0;
        margin-bottom: 10px;
    }
}
@media (min-width: 1024px) {
    .popup-container {
        width: 100%;
        min-height: 100vh;
    }
    .slider {
        width: 864px;
        height: 480px;
        aspect-ratio: 4/3;
    }
    .pentagram-line {
        width: 100%;
        height: 80%;
        margin-top:20%;
        }
}
</style>