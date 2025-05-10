<script>
import InfoSection from './utils/InfoSection.vue';
export default {
    name:'DressCode',
    components: {
        InfoSection
    },
    data() {
        return {
            code: 'Vestite como quieras'
        }
    }
}
</script>
<template>
    <div id="dresscode" class="container-dresscode">
     
        <InfoSection
            title="Dress Code"
            color="var(--color-title2)"
            subtitle="dresscode"
            :mainText="code"
            containerClass="container__dresscode"
            textClass="text_dresscode"
        />
    </div>
</template>
<style scoped>
.icon8{
    right:-5%;
}
.container-dresscode{
    margin-bottom: 10%;
}
</style>