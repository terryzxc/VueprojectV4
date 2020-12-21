<template>
<div>
    <h1>TODO</h1>
    <div v-bind:key="slide.id" v-for="slide in slides">
        <slideItem v-bind:data-aos="(slide.id)%2 == 0 ? 'fade-right':'fade-left'" v-bind:slide="slide" data-aos-duration="1500"/>
    </div>
    <div class="container" data-aos="fade-up" data-aos-duration="1500">
        <h1>Hello Dev BITCHES!</h1>
    </div>
</div>
</template>

<script>
import slideItem from './slideItem.vue';
export default {
    name: 'SlideComponent',
    components:{
        slideItem
    },
    props:["slides"]
}
</script>
<style scoped>
.container {
    width: 50%;
    min-width: 100px;
    margin: 0 auto;
    background-color: rgb(113, 113, 141);
    color: white;
    padding: 100px;
}
</style>