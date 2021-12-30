<template>
<div class="leftNavBar">
  <div class="nav-lvl">
    <img class="logo" src="https://i.pinimg.com/originals/97/fd/05/97fd05e0cc5fc8f8204012448bc703ae.jpg" alt="Monkey Memory Game"> 
    <p class="label-lvl">Level:</p>
    <button class="btn-lvl" @click="choseLevel(8)">x4</button>
    <button class="btn-lvl" @click="choseLevel(16)">x8</button>
    <button class="btn-lvl" @click="choseLevel(24)">x12</button>
    <button class="btn-lvl" @click="choseLevel(32)">x16</button>
    <button class="btn-rst" @click="resetGame" >Reset</button>
  </div>
</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "asideNavBar",
  
  computed: {
    ...mapGetters([
      'choseLevel',
    ]),
  },
  methods: {
    resetGame() {
      this.$store.state.cardsInLevel;
    }
  },
}
</script>

<style scoped>

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  justify-self: center;
  align-self: center;
  width: 70%;
  height: 70%;
}
.nav-lvl {
  display: flex;
  width: 100%;
  height: 15%;
  flex-direction: column;
  align-items: center;
  color: black;
  font-weight: bold;
}
.btn-lvl, .label-lvl {
  display: flex;
  width: 100%;
  height: 35px;
  justify-content: center;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  background-color: transparent;  
  border-color: transparent;
}

.btn-lvl:hover {
  background-color: rgb(255, 34, 34);
  border-color: rgb(156, 5, 5);
  color: rgb(250, 250, 250);
  font-style: oblique;
  font-weight: bolder;
  font-size: 25px;

}

.btn-rst {
  display: flex;
  width: 50%;
  height: 35px;
  justify-content: center;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 15px;
  background-color: transparent;  
  border-color: transparent;
}

.btn-rst:hover {
  background-color: rgb(0, 0, 18);
  border-color: rgb(156, 5, 5);
  color: rgb(255, 34, 34);
  font-style: oblique;
  font-weight: bolder;
}
</style>