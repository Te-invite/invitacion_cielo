<script>
import Swal from 'sweetalert2';
import InfoSection from './utils/InfoSection.vue';
import BotonVue from './utils/Boton.vue';
export default {
    name: 'DatosBank',
    
    data() {
        return {
            text: 'Si desean regalarme algo, pueden dejar su aporte en la urna o a través de transferencia.<br/> ¡Gracias por estar conmigo en este día tan especial!',
            cvu: '1234567890123456789012',  // reemplazá por tu CBU/CVU real
            alias: 'mi.alias.banco'        // reemplazá por tu alias real
        }
    },
    components: {
        InfoSection, BotonVue
    },
    methods: {
        async handleCopy(textoACopiar, nombreDato = 'Dato') {
            try {
                await navigator.clipboard.writeText(textoACopiar);
                Swal.fire({
                    title: `¡${nombreDato} Copiado!`,
                    icon: 'success',
                    text: `${nombreDato} ha sido copiado al portapapeles`,
                    confirmButtonText: 'OK',
                    timer: 2000
                });
            } catch (err) {
                console.error('Error al copiar:', err);
                this.fallbackCopyToClipboard(textoACopiar, nombreDato);
            }
        },
        fallbackCopyToClipboard(textoACopiar, nombreDato) {
            const textarea = document.createElement('textarea');
            textarea.value = textoACopiar;
            textarea.style.position = 'fixed';
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                Swal.fire({
                    title: `¡${nombreDato} Copiado!`,
                    icon: 'success',
                    text: `${nombreDato} ha sido copiado al portapapeles`,
                    confirmButtonText: 'OK',
                    timer: 2000
                });
            } catch (err) {
                Swal.fire({
                    title: 'Error',
                    icon: 'error',
                    text: `No se pudo copiar el ${nombreDato}. Por favor intente manualmente.`,
                    confirmButtonText: 'OK'
                });
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }
}
</script>

<template>
    <div id="regalo" class="container-regalo">
        <InfoSection
  title=""
  subtitle=""
  :texts="[text]"
  :containerClass="container__regalo"
  :textClass="text_regalo"
>
  <template #buttons>
   <BotonVue @click="handleCopy(cvu, 'CBU')" class="btn-mayor" label="COPIAR CBU" />
    <BotonVue @click="handleCopy(alias, 'Alias')" class="btn-mayor" label="COPIAR ALIAS" />

  </template>
</InfoSection>

    </div>
</template>

<style>
.container-regalo{
    width:var(--section);
}
@media (min-width: 768px) and (max-width: 991px) {
    .container-regalo{
        width:var(--section-tablet);
    }
}
@media (min-width: 1024px) {
    .container-regalo{
        width:var(--section-desktop);
    }
}
</style>

