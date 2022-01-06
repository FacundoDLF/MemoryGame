<template>
  <div class="main-game">
    <div class="left-nav-bar">
      <LeftNavBar />
    </div>
    <div class="container">
      <div class="nav">
        <router-link class="nav-tab" to="/Game">Game</router-link>|
        <router-link class="nav-tab" to="/Profile">Profile </router-link>|
        <router-link class="nav-tab" to="/Scores">Scores</router-link>
      </div>
      <div>
        <CardLayout />
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import CardLayout from '../components/CardLayout.vue';
import LeftNavBar from '../components/layout/leftNavBar.vue';

export default {
  name: 'Game',
  components: {
    CardLayout,
    LeftNavBar,
  },
}
</script>
<style scoped>
.main-game {
  display: flex;
  width: 100%;
  height: 100%;
}

.nav {
    display: flex;
    justify-content: space-around;
    align-self: center;
    width: 20%;
    padding: 10px;
}

.nav-tab {
  width: 100%;
}

a {
  color: black;
  font-size: 16px;
  font-weight: bold;
}

.nav-tab:hover {
    color: red;
}

.container {
  display: flex;
  flex-direction: column;
  width: 75%;
}
.left-nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  border-style: groove;
  border-top-right-radius: 5%;
  border-bottom-right-radius: 5% ;
}

</style>