<template>
  <div id="app">
    <div id="nav">
      <router-link to="/game">Game</router-link> |
      <router-link to="/profile">Profile</router-link> | 
      <router-link to="/userScoreList">Scores</router-link>
    </div>
    <router-view/>
  </div>
</template>