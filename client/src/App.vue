<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <PostComponent msg="Welcome to Your Vue.js App"/> -->
    <SlideComponent v-bind:slides="slides"/>
  </div>
</template>

<script>
//import PostComponent from './components/PostComponent.vue';
import SlideComponent from './components/SlideComponent.vue';

export default {
  name: 'App',
  components: {
    // PostComponent,
    SlideComponent
  },
  data() {
    return {
      slides:[
        {
          id: 1,
          title: 'todo1',
          completed: false
        },
        {
          id: 2,
          title: 'todo2',
          completed: true
        },
        {
          id: 3,
          title: 'todo3',
          completed: true
        },
        {
          id: 4,
          title: 'todo4',
          completed: true
        },
        {
          id: 5,
          title: 'todo5',
          completed: true
        }
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
