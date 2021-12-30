<template>
    <div id="app">
        <div class="main">
        <div class="nav">
            <router-link class="nav-tab" to="/">Home</router-link> |
            <router-link class="nav-tab" to="/Login">Login</router-link>
        </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'myHeader',
}
</script>

<style scoped>

.nav {
    display: flex;
    justify-content: right ;
    padding: 10px;
    background-color: black;
}
a {
    color: white;
    font-size: 16px;
    font-weight: bold;
}
.nav-tab:hover {
    color: red;
}
</style>