<template>
<Buttons :text="123"/>
<h1>123</h1>
</template>

<script>
import Buttons from './components/Buttons/Buttons.vue'

export default {
  components: { Buttons },
  name: 'App',
}
</script>

<style>
#app {
  font-family: "Gilroy", "Fira Sans Extra Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
