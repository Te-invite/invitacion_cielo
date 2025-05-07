<script>
import Boton from '../utils/Boton.vue';
import Swal from 'sweetalert2';
import PopupBase from './PopupBase.vue';
import config from '../../config';
export default {
    name: 'PopAsistire',
    components: {
        Boton, PopupBase
    },
    data() {
        return {
            modalTitle: 'Asistiré?',
            options1: 'Sí',
            options2: 'No',
            inputName: 'Nombre Completo',
            inputTxtArea: 'Información adicional (opcional):',
            isAttending: '',
            nombre: '',
            informacionAdicional: '',
            numMembers: '',
            errorMessage: '',
            showSendButton: false
        }
    },
    methods: {
        handleAttendanceSelection(selection) {
            this.isAttending = selection;
            
            if (selection === 'no') {
                Swal.fire({
                    title: '¿Estás seguro?',
                    text: 'Si confirmas que no asistirás, serás redirigido a WhatsApp para notificarlo.',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Sí, notificar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.showSendButton = true;
                        this.enviarAWhatsApp();
                    } else {
                        this.isAttending = '';
                        this.showSendButton = false;
                    }
                });
            } else if (selection === 'yes') {
                this.showSendButton = true;
            }
        },

        async enviarAWhatsApp() {
            if (!this.nombre) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Por favor, complete su nombre',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                return;
            }

            const mensaje = `*Asistencia:* ${this.isAttending === 'yes' ? 'Sí' : 'No'}\n*Nombre:* ${this.nombre}\n*Cantidad de acompañantes:* ${this.numMembers || '0'}\n*Información adicional:* ${this.informacionAdicional || 'Ninguna'}`;
            const telefono = config.whatsappNumber;
            const enlaceWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

            const confirmResult = await Swal.fire({
                title: 'Confirmación',
                text: '¿Deseas enviar esta información por WhatsApp?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Enviar',
                cancelButtonText: 'Cancelar'
            });

            if (confirmResult.isConfirmed) {
                window.open(enlaceWhatsApp, '_blank');
            }
        }
    },
    computed: {
        isFormIncomplete() {
            return !this.nombre || !this.isAttending;
        }
    }
}
</script>


<template>
    <popup-base :title="modalTitle">
        <div class="modal-body">
            <div class="content__radio content__radio1">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="attendingYes" name="attendance"
                        v-model="isAttending" value="yes" />
                    <label class="form-check-label" for="attendingYes">{{ options1 }}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="attendingNo" name="attendance"
                        v-model="isAttending" value="no" />
                    <label class="form-check-label" for="attendingNo">{{ options2 }}</label>
                </div>
            </div>
            <div class="form-group mb-3 input_nombre" >
                <label for="nombre" class="form-label">{{ inputName }}</label>
                <input type="text" class="form-control input_text" id="nombre" v-model="nombre"
                    placeholder=""/>
            </div>
            <div class="form-group mb-3 selector" >
                <label for="numMembers" class="form-label">
                    <p class="form-label">Cantidad de acompañantes</p>
                </label>
                <select id="numMembers" name="numMembers" class="form-select" aria-label="Default select example" v-model="numMembers">
                    <option value="No">No</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    
                </select>
            </div>
            <div class="form-group mb-3 box_text_area">
                <label for="informacionAdicional" class="form-label">{{ inputTxtArea }}</label>
                <textarea class="form-control input_text" id="informacionAdicional" v-model="informacionAdicional"
                rows="1" placeholder="Ej. alergias, intolerancias alimentarias"></textarea>
            </div>
            
        </div>
        <template #footer>
            <div class="footer_popup">
            <Boton v-if="!isFormIncomplete" label="CONFIRMAR ASISTENCIA" customClass="btn-mayor btn custom_btn_invitacion" @click="enviarAWhatsApp()"/>
            </div>
        </template>
    </popup-base>
</template>
<style>
.modal-body {
    width: 100%;
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form-label{
    font-size:var(--text-mobile);
    font-family: var(--font-subtitle);
    color:var(--font-secondary-dark);
    line-height:115%;
    text-align:center;
    margin-bottom:.3rem;
    
}
.box_text_area{
    width:80%;
    display:flex;
    flex-direction: column;
    align-content: center;
}
.form-check-input {
    border: 2px solid var(--font-primary-color);
}
.input_nombre{
    margin-top:.8rem;
    display:flex;
    flex-direction:column;
    border-bottom: 1px solid var(--font-primary-color);

    align-items: center;
    width:200px;
}
.input_text{
    width:100%;
    background: transparent;
    border:none;
    border-radius:0%;
    border-bottom: 1px solid var(--font-primary-color);
    font-size:.8rem;
    font-family: var(--font-btn);
    color:var(--font-secondary-dark);
}
.form-control::placeholder{
    color: var(--font-secondary);
    font-size:.6rem;
    text-align: center;
    margin-bottom:0;
}
.selector{
    width:74%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row; 
}
.form-select{
    color:var(--font-primary-color);
    border:1px solid var(--font-primary-color);
    background:rgb(255, 255, 255);
    
}
.form-select{
    height:40px;
    width:70px;
    border-radius: 20px;
}

.form-check-label{
    font-family: var(--font-subtitle);
    color:var(--font-secondary-dark);
}
.footer_popup{
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
}
.footer_popup p{
    font-size:1rem;
    font-family: var(--font-subtitle);
    color:var(--font-secondary);
    line-height:115%;
    text-align:center;
    margin-bottom:.3rem;

}


@media(max-width:360px) {

    .circle {
        width: 45px;
        height: 45px;
    }


}

@media (min-width: 768px) and (max-width: 991px) {
    .input_nombre{
        width: 80%;
    }
    .form-label{
        font-size:1rem;
    }
    .container_planta{
        bottom:-7%;
    }
    .form-control::placeholder{
        font-size:.8rem;
    }
    .planta_botom{
        width:150px;
        height:150px;
        clip-path: inset(0px 0px 50px 0px);   
    }
    .form-select{
        height:40px;
        width:70px;
        border-radius: 20px;
    }
    .form-label{
        font-size:1rem;
    }
    .input_nombre{
        width: 80%;
    }
    .form-label{
        font-size:1rem;
    }
    .container_planta{
        bottom:-7%;
    }
    .planta_botom{
        width:150px;
        height:150px;
        clip-path: inset(0px 0px 50px 0px);   
    }
}

@media (min-width: 1024px) {
    .input_nombre{
        width: 80%;
    }
    .form-label{
        font-size:var(--text-tablet);
    }
    
    .form-control::placeholder{
        font-size:1rem;
    }

}

</style>