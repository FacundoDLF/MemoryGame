<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Game">Game</router-link> |
      <router-link to="/Profile">Profile</router-link> | 
      <router-link to="/Scores">Scores</router-link>
    </div>
    <div class="profile">
      <h1>This is a PROFILE page</h1>
    </div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPbDJU0FtzoIKj9OQeo5omGrAbi6aGYdmrQ&usqp=CAU" alt="Profile Gamer">
    <router-view/>
  </div>
</template>
