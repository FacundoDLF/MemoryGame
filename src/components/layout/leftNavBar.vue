<template>
<div class="leftNavBar">
  <div class="nav-lvl">
    <div class="label-lvl">
      <img class="logo" src="https://i.pinimg.com/originals/97/fd/05/97fd05e0cc5fc8f8204012448bc703ae.jpg" alt="Monkey Memory Game"> 
      <h2>Level: </h2>
    </div>
    <button class="btn-lvl" @click="choseLevel(8)">x4</button>
    <button class="btn-lvl" @click="choseLevel(16)">x8</button>
    <button class="btn-lvl" @click="choseLevel(24)">x12</button>
    <button class="btn-lvl" @click="choseLevel(32)">x16</button>
    <button class="btn-rst" @click="resetGame" >Reset</button>
  </div>
</div>
</template>
<script>

export default {
    name: "asideNavBar",
}
</script>

<style scoped>

.logo {
  display: flex;
  width: 100%;
  height: 100%;
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
.label-lvl{
  display: block;
  font-family: 'Courier New', Courier, monospace;
}
.btn-lvl {
  display: flex;
  width: 50px;
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
  width: 50px;
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