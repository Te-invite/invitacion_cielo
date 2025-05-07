<script>
import logo from '../../assets/img/logo.svg';
export default {
    name:'Footer',
    data(){
        return{
            logo,
            link:'https://www.instagram.com/teinviteok/'
        }
    },
    methods: {
        scrollTo(hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>
<template>
    <div class="footer">   
        <div class="option">
            <a href="#dias" class="opcion" @click.prevent="scrollTo('#dias')">Día</a>
            <a href="#asistencia" class="opcion" @click.prevent="scrollTo('#asistencia')">Asistencia</a>
            <a href="#lugar" class="opcion" @click.prevent="scrollTo('#lugar')">¿Cómo llegar?</a>
            <a href="#dresscode" class="opcion" @click.prevent="scrollTo('#dresscode')">Dress Code</a>
            <a href="#regalo" class="opcion" @click.prevent="scrollTo('#regalo')">Regalo</a>
            <a href="#musica" class="opcion" @click.prevent="scrollTo('#musica')">Música</a>
        </div>
            <div class="section_invitation">
                <a :href="link" target="_blank">
                    <img :src="logo" class="img_logo" alt="logo">
                </a>
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
.footer{
    width:100%;
    height:150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position:relative;
    
}

.img_logo{
    margin-top:.5rem;
    width: 108px;
    height: auto;
}
.banner_bottom{
    width: 100%;
    height:auto;
    background-color:#D9D9D9;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.text_banner{
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.text_banner > h4{
    margin-top: .5rem;
    font-size: .7rem;
}
.text_1{
    color:white;
}
.text_2{
    font-size: .5rem;
}
.text_{
    text-decoration: none;
    color:black;
    font-size: .5rem;
    
}
.option{
    margin-top:.5rem;
    width:var(--section);
    height:15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start; 
    position:relative;
    
}

.opcion{
    color:var(--font-secondary);
    font-size:.5rem;
    font-family:var(--font-subtitle);
    text-decoration: none;
    text-align: center;
    cursor: pointer;
}
@media (min-width: 768px) and (max-width: 991px) {
    .footer{
        width:100%;
        height:160px;
    }
    .img_logo{
        width: 200px;
        height: auto;
        margin-top:1rem;
    }
    .option{
        width:var(--section-tablet);
        height: 24px;
    }
    .opcion{
        font-size:1rem;
    }
}
@media (min-width: 1024px) {
    .footer{
        width:100%;
        height:200px;
    }
    .img_logo{
        width: 200px;
        height: auto;
        margin-top:1rem;
    }
    .option{
        width:var(--section-desktop);
        height: 24px;
    }
    .opcion{
        font-size:1rem;
    }
}

</style>