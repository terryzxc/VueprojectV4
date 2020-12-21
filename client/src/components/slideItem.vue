<template>
<div>
    <h3 class="slide-item">{{slide.title}}</h3>
</div>
</template>

<script>
export default {
    name:'slideItem',
    props:["slide"]
}
</script>
<style scoped>
.slide-item{
    background: #f4f4f4;
    padding: 100px;
    width: 40%;
    border: 1px solid black;
    margin: 0 auto;
    margin-bottom: 500px;
}
</style>