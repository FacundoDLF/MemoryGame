<template>
    <div class="header">
        <div class="main">
        <div class="nav">
            <router-link class="nav-tab" to="/">Home</router-link>|
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
.header {
    display: flex;
    width: 100%;
}
.nav {
    display: flex;
    justify-content: right ;
    padding: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 18);
}

.nav-tab{
    display: flex;
    justify-content: space-around;
    width: 4%
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