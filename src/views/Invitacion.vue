<script>
import PopUpIngreso from '../components/popup/PopUpIngreso.vue';

export default{
    name:'Invitacion',
    components:{
        PopUpIngreso
    },
    data(){
        return{
            showPopUp:true
        }
    },
    methods:{
      hadleClosePopUp(){
        this.showPopUp = false;
      }
    }
}
</script>
<template>
    <PopUpIngreso 
      v-if="showPopUp" 
      :show="showPopUp" 
      @close="hadleClosePopUp"
    />
    
    <div v-if="!showPopUp" class="container_invitacion">
        Invitacion
    </div>
</template>