<script>
import DressCodeVue from '../DressCode.vue'
import MusicaVue from '../Musica.vue';
import foto from '../../assets/img/image5.webp'
import waves_monocromatico from '../../assets/img/waves_monocromatico.svg';

export default{
    name:'Fiesta2',
    components:{
        DressCodeVue,
        MusicaVue
    },
    data(){
        return{
            foto:foto,
            waves_monocromatico
        }
    }

}
</script>
<template>
  <div class="fiesta2_container">
    <div class="fiesta2_content">
      <div class="fiesta2_icon">
        <MusicaVue class="musica"/>
        <DressCodeVue/>
      </div>
    </div>
<div class="fiesta2_container_photo">
  <img :src="waves_monocromatico" class="monocromatico" alt="">
  <img :src="foto" alt="">
</div>
<div class="banner_bottom">
            <div class="text_banner">
                <h4 class="text_1">Developed by </h4>
                <h4 class="text_2"> Teinvite.ar</h4>
            </div>
        </div>
    

    <div class="pentagrama_fiesta2"></div>
  </div>
</template>

<style>
.fiesta2_container {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow-x: hidden;
    z-index: 0;
    padding-bottom: 2rem;
}
.fiesta2_container::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('../../assets/img/background_music.svg');
    background-repeat: no-repeat;
    background-size: cover;
    opacity: .2;
}
.pentagrama_fiesta2 {
    background-image:url('../../assets//img/waves.svg') ;
    transform: rotate(-20deg);
    position: absolute;
    top: -8%;
    right:2rem;
    z-index: 1;
    width:100%;
    height:150px;
}
.fiesta2_content{
    position: relative;
    z-index: 0;
    background-color: #201F1F;
    height:550px;
    width:320px;
    margin: 0 auto;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    padding-top:150px;
}
.fiesta2_icon{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
}
.fiesta2_container_photo {
 position: relative;
    width: 100%;
    height: auto;
    align-items: center;
    border: 1px solid red;
    z-index: 1; 
}
.fiesta2_container_photo img{
    width: 100%;
    height:100%;
    object-fit: cover;
}
.monocromatico{
    /* background-image: url('../../assets//img/waves_monocromatico.svg'); */
  
    position: absolute;
    bottom: 60%;
    
    z-index: 2;
    width: 100%;
    height: 250px;
}
</style>