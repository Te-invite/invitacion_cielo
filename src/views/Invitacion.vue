<script>
import PopUpIngreso from '../components/popup/PopUpIngreso.vue';
import Portada from '../components/sections/Portada.vue';
export default{
    name:'Invitacion',
    components:{
        PopUpIngreso, Portada
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
        <Portada/>
    </div>
</template>
<style>
.container_invitacion{
  width:100%;
  height:100vh;
}
</style>