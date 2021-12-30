<template>
  <div id="app">
    <Header />
    <div class="aside">
      <div class="main">
        <router-view/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/myHeader.vue";
import Footer from "./components/layout/myFooter.vue";
// import LeftNavBar from "./components/layout/leftNavBar.vue";


export default {
  components: {
    Header,
    Footer,
    // LeftNavBar,
  },
  name: 'App',
}
</script>

<style>
#app {
  justify-content: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #b94242;
}

.aside {
  display: flex;
  flex-direction: row;
}

.main {
  display: flex;
  flex-direction: column;
  width: 100%;

}
</style>
