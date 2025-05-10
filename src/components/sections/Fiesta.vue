<script>
import fondo from '../../assets/img/background_music_grey.svg';
import SliderFiesta from '../SliderFiesta.vue';
import Timer from '../Timer/Timer.vue';
import Pentagrama from '../Pentagrama.vue';
import Asistencia from '../Asistencia.vue';
import Lugar from '../Lugar.vue';
import Footer from '../utils/Footer.vue';


export default{
    name:'Fiesta',
    components:{SliderFiesta, Timer, Pentagrama, Asistencia, Lugar, Footer},
    data(){
        return{
            fondo:fondo
        }
    }
}
</script>
<template>
    <div class="fiesta_container">
        <div class="background-overlay">
            <img :src="fondo" alt="Fondo musical" class="background-image">
        </div>
        <div class="fiesta_content">
            <SliderFiesta />
            <Timer/>
            <Pentagrama class="separador_penta"/>
            <Asistencia/>
            <Lugar/>
        </div>
        <Footer/>
        
    </div>
</template>
<style>
.fiesta_container {
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #000; 
    overflow-x: hidden;
    z-index: 0;
    padding-bottom:2rem;
}


.background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: overlay; /* Mezcla con el fondo negro */
    opacity: .6;
}
.fiesta_content{
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center; 
    position:relative;
    z-index: 3;  
    margin-top:1rem;
    margin-bottom:2rem;
}
.fiesta_detalles{
    position:relative;
    z-index: 4;
    color:#fff;
}
.separador_penta{
    position:relative;
    z-index: -1;
}
.timer{
    position:relative;
    z-index: 8;
}
.fiesta_detalles_descripcion{
    width:320px;
    display: flex;
    flex-direction: column;

    justify-content: center;
}
.fiesta_detalles_descripcion h1{
    font-family:var(--font-subtitle);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
}
.fiesta_detalles_descripcion p{
    font-family:var(--font-subtitle);
    font-size: 9px;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 text-align: center;
}
.fiesta_detalles_descripcion h3{
    font-family:var(--font-subtitle);
    font-size: 13px;
 font-style: normal;
 font-weight: 700;
 line-height: normal;
 letter-spacing: 1.3px;
 text-align: center;
}
.fiesta_detalles_descripcion h4{
    font-family:var(--font-subtitle);
    font-size: 11px;
 font-style: normal;
 font-weight: 300;
 line-height: normal;
 text-align: center;
}
@media (min-width: 768px) {
    .fiesta_content{
        margin-bottom: 3.5rem;
    }
}
</style>