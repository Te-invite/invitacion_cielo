<script>
import logo from '../../assets/img/logo.svg';
export default {
    name:'Footer',
    data(){
        return{
            logo,
            link:'https://www.instagram.com/teinviteok/'
        }
    }
}
</script>
<template>
    <div class="footer">   
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
    height:100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position:absolute;
    
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
@media (min-width: 768px){
    .footer{
        width:100%;
        height:120px;
    }
    .img_logo{
        width: 150px;
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

</style>