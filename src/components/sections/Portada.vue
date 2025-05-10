<script>
import fotoP from '../../assets/img/c6f690f9-714c-4800-a827-f321634b22d6.webp';
import waves from '../../assets/img/waves.svg';

export default{
    name:'Portada',
    data(){
        return{
            nombre:'Cielo',
            evento:'MIS 15 AÑOS',
            fecha:'02.08.2025',
            frase:'Se viene una noche mágica...<br/> llena de emoción, música y personas que quiero.<br/>Vos sos una de ellas.',
            fotoP:fotoP,
            waves:waves
        }
    }
}
</script>
<template>
    <div class="portada_container">
        
        <div class="portada_foto">
            <img :src="fotoP" alt="Cielo">
            
        </div>
        <div class="separador">
            <img :src="waves" class="waves" alt="">
        </div>
        <div class="portada_detalles">
            <div class="portada_detalles_descripcion">
                <h1>{{nombre}}</h1>
                <h2>{{evento}}</h2>
                <h3>{{fecha}}</h3>
                <p v-html="frase"></p>
            </div>
        </div>
        
        
    </div>
</template>
<style>
.portada_container{
    width:100%;
    height: 100vh;
}
.portada_detalles{
    width:100%;
}
.portada_foto{
    height:60vh;
    /* border:1px solid red; */
    position:relative;
    overflow:hidden;
    z-index: 0;
    background-position: center;;
}
.portada_foto img{
    width:100%;
    height:100%;
    object-fit: cover;
}

.portada_detalles {
    height: 40vh;
    position: relative;
    overflow: hidden;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.portada_detalles::before {
    content: "";
    position: absolute;
    inset: 0; 
    background-image: url('../../assets/img/background_music.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    z-index: -1; 
}
.separador{
    width: 100%;
    height:auto;
    position: absolute;
    overflow: hidden;
    z-index: 100;
    top:47%;
    left:0;
    z-index: 0;
}
.separador .waves{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.portada_detalles_descripcion{
    width:320px;
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.portada_detalles_descripcion h1{
    font-family: var(--font-title);
    font-size:var(--titulo_h1);
    font-weight: 400;
    line-height: 140%;
    background: linear-gradient(270deg, #4E4E4E 0%, #434343 25.96%, #717171 49.52%, #A4A4A4 68.27%, #ACACAC 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
}
.portada_detalles_descripcion h2{
    font-size: var(--subtitle_h2);
    font-style: normal;
    font-weight: 400;
    line-height: 60%;
    letter-spacing: 4.5px;
    text-align: center;
    font-family: var(--font-subtitle);
}
.portada_detalles_descripcion h3{
    font-size: var(--subtitle_h3);
    font-style: normal;
    font-weight: 400;
    line-height: 80%;
    letter-spacing: 4px;
    text-align: center;
    font-family: var(--font-subtitle);
}
.portada_detalles_descripcion p{
    font-size: var(--text_p);
    font-style: 60%;
    font-weight: 400;
    line-height: normal;
    text-align: center;
}

@media(min-width:768px){
    .separador{
        top:40%;
    }
    .portada_detalles_descripcion{
        width: 600px;
    }
    .portada_detalles_descripcion h1{
        margin-top: 2rem;
        font-size: 150px;
        line-height: 130%;
    }
    .portada_detalles_descripcion h2{
        font-size: 40px;
    }
    .portada_detalles_descripcion h3{
        font-size: 25px;
    }
    .portada_detalles_descripcion p{
        font-size: 18px;
    }

}
@media (min-width: 1024px) {
  .portada_container {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }

  .portada_foto {
    height: 100vh;
    width: 60%; /* la foto ocupa el 60% del ancho */
  }

  .portada_foto img {
    height: 100%;
  }

  .portada_detalles {
    width: 40%; /* los detalles ocupan el 40% restante */
    height: 100vh;
  }

  .portada_detalles_descripcion {
    width: 90%;
    max-width: 500px;
    
  }

  .separador {
    display: none;
  }


  .portada_detalles_descripcion h1 {
    font-size: 180px;
    line-height: 1.8;
  }

  .portada_detalles_descripcion h2 {
    font-size: 50px;
  }

  .portada_detalles_descripcion h3 {
    font-size: 30px;
  }

  .portada_detalles_descripcion p {
    font-size: 20px;
  }
}

</style>