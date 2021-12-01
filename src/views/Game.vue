<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Game">Game</router-link> |
      <router-link to="/Profile">Profile</router-link> | 
      <router-link to="/Scores">Scores</router-link>
    </div>
    <div>
      <CardLayout />
    </div>
    <router-view/>
  </div>
</template>
<script>
import CardLayout from '../components/CardLayout.vue';

export default {
  name: 'Game',
  components: {
    CardLayout,
  },
}
</script>
<style scoped>

</style>