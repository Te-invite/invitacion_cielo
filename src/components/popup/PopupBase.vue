<script>
import GlitterTop1 from '../GlitterTop.vue';
export default {
    name: 'BasePopup',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    methods: {
        close() {
            this.$emit('close');
        }
    },
    components:{
        GlitterTop1
    }

}
</script>

<template>
    <div class="pop-up">
        
        <div class="pop-up-inner">
            <GlitterTop1 class="glitter1"/>
            <div class="popup_body">
                <div class="pop-up-close" @click="close">
                    <i class="fa-solid fa-xmark icon__close"></i>
                </div>
                <div class="pop-up-body">
                    <h1 class="title">{{ title }}</h1>
                    <slot></slot>
                </div>
                <div class="pop-up-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
        
    </div>
</template>


<style scoped>
.pop-up {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, .6);
    display: grid;
    place-items: center;
    position:fixed;
}


.glitter1{
    width:100%;
    position:absolute;
    z-index: 1;
    left:0;
    top:-14%;
}

.pop-up-inner[data-v-5c395a1b]{
    border-radius: 0;
} 

.pop-up-inner {
    width: 80%; 
    background-image: url('../../assets/img/Fondo.webp');
    color: black;
    position: relative;
    padding: 20px;
    box-shadow: var(--shadow);
    transition: all 250ms ease-in-out;
    overflow: hidden;
    display:flex;
    flex-direction:column;
    
}
.popup_body {
    width: 100%;
    height: 400px;
}

.icon__close {
    position: absolute;
    height: 52px;
    width: 52px;
    display: flex;
    border-radius: 50%;
    padding: .5rem;
    margin: .5rem;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 2;
}

.pop-up-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

.title {
    font-family: 'Philadelphia';
    font-size: 28px;
    font-weight: 500;
    color: var(--font-primary-color);
    text-align: center;
    line-height: 110%;
    position: relative;
    margin-top:1.5rem;
    z-index: 2;

}

.pop-up-footer {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.fade-enter .pop-up-inner,
.fade-leave-to .pop-up-inner {
    opacity: 0;
    transform: translateY(-32px);
}

.fade-enter-active,
.fade-leave-active {
    transition: all 250ms ease-in-out
}

.fade-leave-active {
    transition-delay: 250ms;
}

@media (min-width: 768px) and (max-width: 991px) {
    .pop-up-inner {
        width:500px;
        height:650px;
    }

    .title {
        font-size: 40px;
    }
    

}

@media (min-width: 1024px) {
    .pop-up-inner[data-v-bcfba020]{
        width:500px;
        height:600px;
    }
    .pop-up-body {
        margin-top:4rem;
    }
    .flor-top{
        width:auto;
        height:130px;
    }
    .flor-bottom{
        width:auto;
        height:130px;
    }
    .pop-up-inner {
        width:600px;
        height:650px;
    }

    .title {
        font-size: 45px;
    }

    .title {
        font-size: 45px;
    }
    .form-control::placeholder{
        font-size:1rem;
    }
  

}
</style>