<script>
export default{
    name:'Boton',
    props: {
    label: {
      type: String,
      required: false 
    },
    customClass: {
      type: String,
      default: 'btn-mayor'
    }
  }

}
</script>
<template>
   <button type="button" :class="['btn', customClass, 'btn-lg']">
      {{ label }}
    </button>
</template>
<style>
.btn-mayor{
    color:var(--font-primary-color);
    border: 1px solid var(--line_btn);
    background: var(--font-secondary);
    padding: 10px 25px;
    font-weight: 400;
    border-radius: 10px;
    font-size: .8rem;
    font-family: var(--font-subtitle);
    cursor:pointer;
}
.btn-mayor:hover{
  background: var(--font-primary-color);
  color:#000;
}
@media (min-width: 1024px) {
  .btn-mayor{
    font-size: .9rem;
  }
}
</style>