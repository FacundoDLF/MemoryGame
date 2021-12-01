<template>
        <div class="canvas">
            <div id="gameX4" class="card-row">
                <img class="card" v-if="card" :key="card.id" @click="showCard" :src="card.src" alt="Monkey Red Card">
                <!-- <img  class="card"  id="Card-1" src="../assets/img/reverseCard.png" alt="Monkey Card"> -->
                <!-- <img class="card"  id="Card-2" src="../assets/img/athenianSmokingMonkey.png" alt="Monkey Red Card">
                <img class="card"  id="Card-3" src="../assets/img/aladinMonkey.png" alt="Monkey Red Card">
                <img class="card"  id="Card-4" src="../assets/img/athenianSmokingMonkey.png" alt="Monkey Red Card"> -->
            </div>
            <!-- <div id="gameX8" class="card-row">
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
            </div> -->
            <router-view/>
        </div>
</template>

<script>
export default {
    name: 'CardLayout',
    data() {
        return {
            index: 0,
            image: null,
            card: [{
                id: 0,
                src: "../assets/img/reverseCard.png",
                alt: "Reverse Card"
            },
            {
                id: 1,
                src: "../assets/img/aladinMonkey.png",
                alt: "Monkey Card"
            }]
        }
    },
    mounted() {
        this.showCard();
    },      
    computed: {
        // showCard: {
        //     get() {
        //         return this.$store.state.showCard;
        //     },
        //     set(value) {
        //         return this.$store.commit("showCard", value)
        //     }
        // },   
    },
    methods: {
    showCard() {
      this.card = this.card[this.index];
      this.index = (this.index + 1) % this.card.length;
    }
  },
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
    height: 175px; 
    border: solid white;
}

</style>