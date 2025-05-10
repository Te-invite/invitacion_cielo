<script>
import PentagramaVue from '../Pentagrama.vue';
import curva from '../../assets/img/onda.svg';
import IconGiftVue from '../icons/IconGift.vue';
import FooterVue from '../utils/Footer.vue';
import DatosBankVue from '../DatosBank.vue';
import logo2 from '../../assets/img/logo.svg';

export default {
    name: 'Regalo',
    components: {
        PentagramaVue, IconGiftVue, DatosBankVue, FooterVue
    },
    data() {
        return {
            logo2: logo2,
            curva: curva,
            text: 'Quiero que me acompañes en esta noche única. hagamos una fiesta soñada, te invito a colaborar con el valor de la tarjeta: <strong>$50.000</strong> Podés hacerlo en 3 partes:',
            agradecimiento: 'Gracias por ser parte de esta melodía tan especial en mi vida.'
        }
    }
}
</script>
<template>
    <div class="regalo_container">
        <PentagramaVue class="pentagrama_regalo" />
        <div class="regalo_detalle">
            <div class="regalo_tarjeta">
                <p v-html="text"></p>
                <ul>
                    <li><strong>Primer pago:</strong> hasta el 31 de mayo</li>
                    <li><strong>Segundo pago:</strong> hasta el 30 de junio</li>
                    <li><strong>Tercer pago:</strong> hasta el 20 de julio</li>
                </ul>
                <p>{{ agradecimiento }}</p>
            </div>
        </div>

        <div class="regalo_content">

            <div class="regalo_tarjeta2">
                <div class="regalo_icon">
                    <IconGiftVue />
                    <h1>Regalo</h1>
                </div>
                <DatosBankVue />
                <div class="container_logo2">
                    <img :src="logo2" alt="">
                </div>
            </div>
            <img :src="curva" class="curva" alt="">
        </div>
        <div class="banner_bottom">
            <div class="text_banner">
                <h4 class="text_1">Developed by </h4>
                <h4 class="text_2"> Teinvite.ar</h4>
            </div>
        </div>
    </div>
</template>
<style>
.regalo_container {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow-x: hidden;
    z-index: 0;
    padding-bottom: 2rem;
}

.regalo_container::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('../../assets/img/background_music.svg');
    background-repeat: no-repeat;
    background-size: cover;
    opacity: .2;
}

.pentagrama_regalo {
    transform: rotate(-20deg);
    position: relative;
    top: -6%;
    right:2rem;
    z-index: 0;
    opacity: .5;

}

.regalo_detalle {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    font-family: var(--font-subtitle);
    font-size: var(--text_p);
}

.regalo_tarjeta {
    width: 320px;
}

.regalo_tarjeta p {
    text-align: center;

}

.regalo_detalle ul {
    list-style-type: disc;
    margin-left: 2rem;
}

.regalo_content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 3rem;
}


.regalo_tarjeta2 {
    width: 320px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #201F1F;
    position: relative;
}

.regalo_tarjeta2 h1 {
    font-family: var(--font-title);
    text-align: center;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: var(--1, linear-gradient(270deg, #4E4E4E 0%, #FFF 22.79%, #434343 41.4%, #717171 58.6%, #A4A4A4 77.21%, #ACACAC 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.container_logo2{
    width:150px;
    height:50px;
    position:relative;
}
.curva{
    position:absolute;
    top:-8%;
    left:0%;
    width:100%;
}
.container_logo2 img{
    width:100%;
    height:100%;
    object-fit:contain;

}
.regalo_icon{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:100px;
}
</style>