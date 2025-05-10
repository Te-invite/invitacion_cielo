<script>
// import PopAsistire from './popup/PopAsistire.vue';
import InfoSection from './utils/InfoSection.vue';
export default {
    name:'Asistencia', 
    components:{
        InfoSection
    },
    data() {
        return {
            title: 'María Eventos',
            dia: 'Te espero el sábado <strong>02</strong> de agosto a las <strong>21:00hs</strong>',
            confirmacion: '(Hasta el 25 de junio)',
            
            popup: false
        }
    },
    methods:{
        togglePopUp(){
            this.popup = !this.popup;
        }
    }
}
</script>

<template>
  <div id="asistencia" class="container-asistencia">
    <PopAsistire v-show="popup" @close="togglePopUp()"/>
    <InfoSection
    title=""
    subtitle=""
    :mainText="dia"
    buttonLabel="Confirmar asistencia"
    :confirmationText="confirmacion" 
    buttonClass="btn-mayor"
    :buttonClick="togglePopUp"
        />
    </div>
</template>

