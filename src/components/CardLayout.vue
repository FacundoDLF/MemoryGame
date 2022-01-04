<template>
  <div id="app">
    <div v-if="finishGame">
      <h1>CONGRATS!! YOU WIN !!</h1>
    </div>
    <div class="deck">
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
    <h2 v-if="!cardsInLevel.length">Please, choose the difficulty to start the game.</h2>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapGetters } from "vuex";


export default {

  name: "CardLayout",
    data() {
    return {
      reversedMatch: null,
      isGameStopped: false,
      finishGame: false,
    };
  },
  computed: {
    ...mapGetters([
      'choseLevel',
    ]),
    ...mapState([
      'cards',
      'cardsInLevel',
      'srcReverseCard'
    ])
  },
  methods: {
    winGame() {
      var winGame = true;
      Object.keys(this.cardsInLevel).some( isReversed => {
          if (!this.cardsInLevel[isReversed]) {
              this.finishGame = false;
              return false;
          }
      })
      return winGame;
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
      console.log('clickedCard: ', clickedCard);
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
.deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 150px;
  height: 175px;
  margin: 2px;
  border-style: none;
  background-color: transparent;
  border-radius: 4px;
}

.temp-card {
  width: 150px;
  height: 175px;
}

.card:hover {
  filter: brightness(1.2);
}
</style>