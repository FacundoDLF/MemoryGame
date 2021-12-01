<template>
        <div class="canvas">
            <div id="gameX4" class="card-row">
                <img class="card"  id="Card-1" src="../assets/img/aladinMonkey.png" alt="Monkey Red Card">
                <img class="card"  id="Card-2" src="../assets/img/athenianSmokingMonkey.png" alt="Monkey Red Card">
                <img class="card"  id="Card-3" src="../assets/img/aladinMonkey.png" alt="Monkey Red Card">
                <img class="card"  id="Card-4" src="../assets/img/athenianSmokingMonkey.png" alt="Monkey Red Card">
            </div>
            <div id="gameX8" class="card-row">
                <img class="card"  id="Card-5" src="../assets/img/blueBandanaMonkey.png" alt="Monkey Red Card">
                <img class="card"  id="Card-6" src="../assets/img/blueMarineMonkey.png" alt="Monkey Red Card">
                <img class="card"  id="Card-7" src="../assets/img/blueBandanaMonkey.png" alt="Monkey Red Card">
                <img class="card"  id="Card-8" src="../assets/img/blueMarineMonkey.png" alt="Monkey Red Card">
            </div>
            <div id="gameX12" class="card-row">
                <img class="card" id="Card-9" src="../assets/img/coinEyesMonkey.png" alt="Monkey Red Card">
                <img class="card" id="Card-10" src="../assets/img/highEyesMonkey.png" alt="Monkey Red Card">
                <img class="card" id="Card-11" src="../assets/img/coinEyesMonkey.png" alt="Monkey Red Card">
                <img class="card" id="Card-12" src="../assets/img/highEyesMonkey.png" alt="Monkey Red Card">
            </div>
            <div id="gameX16" class="card-row">
                <img class="card" id="Card-13" src="../assets/img/jailSmokingMonkey.png" alt="Monkey Red Card">
                <img class="card" id="Card-14" src="../assets/img/karateMonkey.png" alt="Monkey Red Card">
                <img class="card" id="Card-15" src="../assets/img/jailSmokingMonkey.png" alt="Monkey Red Card">
                <img class="card" id="Card-16" src="../assets/img/karateMonkey.png" alt="Monkey Red Card">
            </div>
            <router-view/>
        </div>
</template>

<script>
export default {
    name: 'CardLayout',
    computed: {
        showCard: {
            get() {
                return this.$store.state.showCard;
            },
            set(value = 'true') {
                return this.$store.commit("showCard", value)
            }
        }
    }
}
</script>

<style scoped>

.card-row {
    justify-content: center;
    display: flex;
}
.card {
    display: flex;
    width: 150px;
    height: 150px; 
    border: solid white;
    background-image: image('../assets/img/reverseCard.png');
}
/* :hover.card {
    display: none;
} */

</style>