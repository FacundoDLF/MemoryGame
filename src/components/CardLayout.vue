<template>
  <div id="app">
    <button
      class="card"
      v-for="card in cards"
      :key="card.id"
      @click="showCard(card)"
      :disabled="card.isBlocked || isGameStopped"
    >
      <img
        class="temp-card"
        :src="
          card.isReversed
            ? card.src
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOKNdUpoBWN860IXpp9GCa1yPzd5C9xFPmnGenDEAAo44uVENo857N3gan_jqPFxq4tc&usqp=CAU'
        "
        alt="Monkey MemoryCards"
      />
    </button>
  </div>
</template>

<script>
import Vue from "vue";
// import reverseCard from '../assets/img/reverseCard.png';
// import { CARDS } from '../router/cards';
import CARD_1 from "../assets/img/aladinMonkey.png";
import CARD_2 from "../assets/img/athenianSmokingMonkey.png";
import CARD_3 from "../assets/img/blueBandanaMonkey.png";
import CARD_4 from "../assets/img/blueMarineMonkey.png";
import CARD_5 from "../assets/img/coinEyesMonkey.png";
import CARD_6 from "../assets/img/highEyesMonkey.png";
import CARD_7 from "../assets/img/highHolyMonkey.png";
import CARD_8 from "../assets/img/jailSmokingMonkey.png";
import CARD_9 from "../assets/img/karateMonkey.png";
import CARD_10 from "../assets/img/marineHighEyesMonkey.png";
import CARD_11 from "../assets/img/marineMonkey.png";
import CARD_12 from "../assets/img/whiteMarineMonkey.png";
import CARD_13 from "../assets/img/athenianRobotMonkey.png";
import CARD_14 from "../assets/img/karate3DMonkey.png";
import CARD_15 from "../assets/img/smokingRobotMonkey.png";
import CARD_16 from "../assets/img/sunglassesRobotMonkey.png";

export default {
  name: "Game",
  data() {
    return {
      cards: [
        {
          id: 1,
          src: CARD_1,
          alt: "Monkey Card",
          isReversed: false,
          isBlock: false,
        },
        {
          id: 2,
          src: CARD_1,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 3,
          src: CARD_3,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 4,
          src: CARD_4,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 5,
          src: CARD_5,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 6,
          src: CARD_6,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 7,
          src: CARD_7,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 8,
          src: CARD_8,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 9,
          src: CARD_9,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 10,
          src: CARD_10,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 11,
          src: CARD_11,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 12,
          src: CARD_12,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 13,
          src: CARD_13,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 14,
          src: CARD_14,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 15,
          src: CARD_15,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 16,
          src: CARD_16,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 17,
          src: CARD_2,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 18,
          src: CARD_2,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 19,
          src: CARD_3,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 20,
          src: CARD_4,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 21,
          src: CARD_5,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 22,
          src: CARD_6,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 23,
          src: CARD_7,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 24,
          src: CARD_8,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 25,
          src: CARD_9,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 26,
          src: CARD_10,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 27,
          src: CARD_11,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 28,
          src: CARD_12,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 29,
          src: CARD_13,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 30,
          src: CARD_14,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 31,
          src: CARD_15,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 32,
          src: CARD_16,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
      ],
      reversedMatch: null,
      isGameStopped: false,
    };
  },
  methods: {
    blockCouple(clickedCard, index) {
      const indexOfRM = this.cards.findIndex(
        (card) => card.id === this.reversedMatch.id
      );
        Vue.set(this.cards, index, { ...clickedCard, isBlocked: true });
        Vue.set(this.cards, indexOfRM, { ...this.reversedMatch, isBlocked: true });
        // this.reversedMatch = null; --> No lo se Rick ...
    },
    showAndHide(clickedCard, index) {
      const indexOfRM = this.cards.findIndex(
        (card) => card.id === this.reversedMatch.id
      );
      this.isGameStopped = true;
      setTimeout(() => {
        Vue.set(this.cards, index, { ...clickedCard, isReversed: false });
        Vue.set(this.cards, indexOfRM, { ...this.reversedMatch, isReversed: false });
        this.isGameStopped = false;
        this.reversedMatch = null;
      }
      ,1000);
    },
    showCard(clickedCard) {
      const indexOfCard = this.cards.findIndex(
        (card) => card.id === clickedCard.id
      );
      // Ver si la carta ya esta dada vuelta
      if (clickedCard.isReversed && clickedCard.id !== this.reversedMatch.id) {
        // Si: La escondo
        this.reversedMatch = null;
        Vue.set(this.cards, indexOfCard, { ...clickedCard, isReversed: false });
        // Sino: Si ya hay otra carta dada vuelta
      } else
        Vue.set(this.cards, indexOfCard, { ...clickedCard, isReversed: true });
      if (this.reversedMatch) {
        // Si: Ver si coincide
        if (clickedCard.src === this.reversedMatch.src) {
          this.blockCouple(clickedCard, indexOfCard);
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
.card {
  width: 150px;
  height: 175px;
  margin: 2px;
  border-style: none;
  background-color: white;
  border-radius: 4px;
}

.temp-card {
  width: 220px;
  height: 272px;
}

.card:hover {
  filter: brightness(1.2);
}
</style>