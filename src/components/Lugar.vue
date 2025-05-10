<script>
import InfoSection from './utils/InfoSection.vue';
import Swal from 'sweetalert2';
export default {
    name:'Lugar',
    components:{
        InfoSection
    },
    data(){
        return{
            salo:'María Eventos',
            direccion:'Av. San Martín y Av. Juárez, Adolfo Gonzáles Chaves',
            mapUrl:'https://maps.app.goo.gl/TUwmVqkrPAqL4eXj6'
        }
    },
    methods:{
        openMap(){
            window.open(this.mapUrl, '_blank');
        },
        redirectToSheet() {
            Swal.fire({
                title: 'Info!',
                text: 'Será redirigido a Google Maps. Para continuar presione OK, o Cancelar para cerrar.',
                icon: 'info',
                showCancelButton: true, 
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancelar', 
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open(this.mapUrl);
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    // Si el usuario presiona "Cancelar", cierra el popup de SweetAlert
                    Swal.close();
                }
            });
        }
    }

}
</script>

<template>
  <div id="lugar" class="container-lugar">
    <InfoSection
        title="María Eventos"
        subtitle="Lugar"
        :texts="[direccion]"
        buttonLabel="¿Cómo llegar?"
        containerClass="container__lugar"
        textClass="text_lugar"
        buttonClass="btn-mayor"
        :buttonClick="redirectToSheet"
    />
    </div>
</template>
<style>
.container-lugar{
    width:var(--section);
}
@media (min-width: 768px) and (max-width: 991px) {
    .container-lugar{
        width:var(--section-tablet);
    }
}
@media (min-width: 1024px) {
    .container-lugar{
        width:var(--section-desktop);
    }
}
</style>
