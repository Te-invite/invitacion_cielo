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
    width: 200px;       
    min-height: 48px;
    padding: 12px 16px;
    font-size: 16px;
    border-radius: 8px;
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