<template>
  <div id="app">
    <div id="nav">
      <router-link to="/game">Game</router-link> |
      <router-link to="/profile">Profile</router-link> | 
      <router-link to="/userScoreList">Scores</router-link>
    </div>
    <div>
      <p>ACA IBAN LAS CARTAS</p>
      <CardLayout />
    </div>
  </div>
</template>
<script>
import CardLayout from '../components/CardLayout.vue';

export default {
  name: 'CardLayout',
  components: {
    CardLayout,
  },
}
</script>
<style scoped>

</style>