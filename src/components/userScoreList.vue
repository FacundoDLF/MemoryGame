<template>
  <div id="app">
    <div id="nav">
      <router-link to="/game">Game</router-link> |
      <router-link to="/profile">Profile</router-link> | 
      <router-link to="/userScoreList">Scores</router-link>
    </div>
    <div class="scoresList">
      <h1>This is a SCORE LIST page</h1>
    </div>
    <router-view/>
  </div>
</template>