<template>
  <div class="cardLayout">
    <p class="win-msg" v-if="gameOver" >YOU WIN !!</p>
    <div class="deck">
      <h2 v-if="!cardsInLevel.length">Please, chose your LEVEL to start the game.</h2>
      <button
        class="card"
        v-for="card in cardsInLevel"
        :key="card.id"
        @click="showCard(card)"
        :disabled="card.isBlocked || isGameStopped"
      >
        <img
          class="temp-card"
          :src="
            card.isReversed
              ? card.src
              : srcReverseCard.src
          "
          alt="Monkey MemoryGame"
        />
      </button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex"; // { mapMutations }


export default {

  name: "CardLayout",
    data() {
    return {
      reversedMatch: null,
      isGameStopped: false,
      foundCards: [],
      gameOver: false
    };
  },
  computed: {
    ...mapState([
      'cards',
      'cardsInLevel',
      'srcReverseCard',
      'level',
    ]),
  },
  methods: {
    // ...mapMutations([
    //   'resetGame'
    // ]),
    winGame() {
      if (this.cardsInLevel.length === this.foundCards.length) {
        return this.gameOver = true
        // setTimeout(() => {
        // this.gameOver = false;
        // this.foundCards = null;
        // }
        // ,2000)
        // this.cardsInLevel: {
        //    get(){
        //      return this.nameFromStore
        //    },
        //    set(newName){
        //      return newName
        //    } 
        // }
        // this.resetGame()
        // Vue.set(this.cardsInLevel, this.cardsInLevel, null);
      }
      console.log('cardsInLevel: ', this.cardsInLevel);
    },
    blockCouple(clickedCard, index) {
      const indexOfRM = this.cardsInLevel.findIndex(
        (card) => card.id === this.reversedMatch.id
      );
        Vue.set(this.cardsInLevel, index, { ...clickedCard, isBlocked: true });
        Vue.set(this.cardsInLevel, indexOfRM, { ...this.reversedMatch, isBlocked: true });
        Vue.set(this.cardsInLevel, index, { ...clickedCard, isReversed: true });
        Vue.set(this.cardsInLevel, indexOfRM, { ...this.reversedMatch, isReversed: true });
    },
    showAndHide(clickedCard, index) {
      const indexOfRM = this.cardsInLevel.findIndex(
        (card) => card.id === this.reversedMatch.id
      );
      this.isGameStopped = true;
      setTimeout(() => {
        Vue.set(this.cardsInLevel, index, { ...clickedCard, isReversed: false });
        Vue.set(this.cardsInLevel, indexOfRM, { ...this.reversedMatch, isReversed: false });
        this.isGameStopped = false;
        this.reversedMatch = null;
      }
      ,1000);
    },
    showCard(clickedCard) {
      const indexOfCard = this.cardsInLevel.findIndex(
        (card) => card.id === clickedCard.id
      );
      // Ver si la carta ya esta dada vuelta
      if (clickedCard.isReversed && clickedCard.id !== this.reversedMatch.id) {
        // Si: La escondo
        this.reversedMatch = null;
        Vue.set(this.cardsInLevel, indexOfCard, { ...clickedCard, isReversed: false });
        // Sino: Si ya hay otra carta dada vuelta
      } else
        Vue.set(this.cardsInLevel, indexOfCard, { ...clickedCard, isReversed: true });
      if (this.reversedMatch) {
        // Si: Ver si coincide
        if (clickedCard.src === this.reversedMatch.src) {
          this.blockCouple(clickedCard, indexOfCard);
          this.reversedMatch = null;
          this.foundCards.length += 2;
          this.winGame();
        } else {
          this.showAndHide(clickedCard, indexOfCard);
        }
      } else {
        this.reversedMatch = clickedCard;
      }
    },
  },
};
</script>

<style scoped>
.cardLayout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
}

.win-msg {
  display: block;
  align-self: center;
  justify-content: center;
  width: 40%;
  font-size: 2.3rem;
  color: rgb(24, 143, 0);
  text-shadow: 0 0 5px rgb(0, 255, 13);
}

.deck {
  display: block;
  align-self: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  height: 100%;
}

.card {
  margin: 2px;
  border-style: none;
  background-color: transparent;
  border-radius: 4px;
}

.temp-card {
  width: 90px;
  height: 110px;
}

.card:hover {
  filter: brightness(1.2);
}
</style>