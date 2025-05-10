<template>
    <div class="pentagrama_container"></div>
</template>
<style>
.pentagrama_container{
    width: 100vw;
    height:150px;
    background: url('../assets/img/pentagrama.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
     overflow: hidden;

}
@media (min-width:768px){
    .pentagrama_container{
        height:260px;
    }
}
@media (min-width: 1024px) {
    .pentagrama_container{
        width: 100vw;
        height:450px;
    }
}
</style>