<template>
    <div>
        <div id="Card-1" class="card">
            <img src="../assets/img/highEyesMonkey.png" alt="Monkey Red Card">
        </div>
        <div id="Card-2" class="card">
            <img src="../assets/img/blueBandanaMonkey.png" alt="Monkey Red Card">
        </div>
    <router-view/>
    </div>
</template>

<script>
export default {
    name: 'CardLayout',
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    border: solid white;
}

</style>