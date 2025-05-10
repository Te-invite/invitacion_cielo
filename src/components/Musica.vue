<script>
import InfoSection from './utils/InfoSection.vue';
import Swal from 'sweetalert2';
import IconMusicVue from './icons/IconMusic.vue';
export default {
    name:'Musica',
    components: {
        InfoSection, IconMusicVue
    },
    data() {
        return {
            text: '¿Cuál es la canción que no debe faltar en la <strong>PlayList</strong> de la fiesta?',
            
        }
    },
    methods: {
        togglePopUp() {
            this.popup = !this.popup
        },
        redirectToYoutube() {
            Swal.fire({
                title: 'Info!',
                text: 'Será redirigido a YouTube. Para continuar presione OK, o Cancelar para cerrar.',
                icon: 'info',
                showCancelButton: true, // Habilita el botón "Cancelar"
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancelar', // Texto del botón "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Si el usuario presiona "OK"
                    window.open("https://www.youtube.com/playlist?list=PL4WV8HJeFYo-8Ubh7p4QEtD9NYI4D-JiR&jct=C93XiKwi-OrN8pHl8OU25Q");
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    // Si el usuario presiona "Cancelar", cierra el popup de SweetAlert
                    this.togglePopUp();
                }
            });
        }
    }
}
</script>

<template>
    <div id="musica" class="container-musica">
       <IconMusicVue class="musica"/>
        <InfoSection 
        title="Música" 
        color="" 
        :texts="[text]" 
        buttonLabel="Sugerir Canción"
        containerClass="container__musica" 
        textClass="text_musica" 
        buttonClass="btn-mayor"
        :buttonClick="redirectToYoutube" />
    
    </div>
    
</template>

<style>
.container-musica {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.musica{
    margin: 0 auto;
}
@media (min-width: 768px) and (max-width: 991px) {
    .container-musica{
        width:500px;
    }
}
@media (min-width: 1024px) {
    .container-musica{
        width:600px;
    }
}

</style>