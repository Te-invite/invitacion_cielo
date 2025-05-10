<script>

export default {
  name: 'TitleSection',
  props: {
    title: {
      type: String,
      required: true, // El título debe ser pasado como prop
    }
  }
}
</script>
<template>
    <div class="container_title">
        <slot name="icon"></slot>
        <h1 class="titleSection" >{{ title }}</h1>
    </div>
</template>
<style>
.container_title {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.titleSection {
    font-family: var(--font-title);
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: var(--1, linear-gradient(270deg, #4E4E4E 0%, #FFF 22.79%, #434343 41.4%, #717171 58.6%, #A4A4A4 77.21%, #ACACAC 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
}

@media (min-width: 768px) and (max-width: 991px) {
    .container_title {
        width: 100%;
        height: 120px;
    }

    .titleSection {
        font-size: 3.2rem;
    }
}

@media (min-width: 1025px) {
    .container_title {
        width: 100%;
        height: 180px;
    }

    .titleSection {
        font-size: 5.5rem;
    }
}
</style>