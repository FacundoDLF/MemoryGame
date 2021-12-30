import Vuex from 'vuex';
import Vue from 'vue';
import VueRouter from 'vue-router'
import { CARDS } from "../router/cards.js"
import getters from "./getters.js"

Vue.use(Vuex);
Vue.use(VueRouter)

const Store = new Vuex.Store({
    state: {
      player: '',
      userPass: '',
      score: 0,
      showCard: false,
      cards: [
        {
          id: 1,
          src: CARDS.CARD_1,
          alt: "Monkey Card",
          isReversed: false,
          isBlock: false,
        },
        {
          id: 2,
          src: CARDS.CARD_2,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 3,
          src: CARDS.CARD_3,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 4,
          src: CARDS.CARD_4,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 5,
          src: CARDS.CARD_1,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 6,
          src: CARDS.CARD_2,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 7,
          src: CARDS.CARD_3,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 8,
          src: CARDS.CARD_4,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 9,
          src: CARDS.CARD_5,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 10,
          src: CARDS.CARD_6,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 11,
          src: CARDS.CARD_7,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 12,
          src: CARDS.CARD_8,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 13,
          src: CARDS.CARD_5,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 14,
          src: CARDS.CARD_6,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 15,
          src: CARDS.CARD_7,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 16,
          src: CARDS.CARD_8,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 17,
          src: CARDS.CARD_9,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 18,
          src: CARDS.CARD_10,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 19,
          src: CARDS.CARD_11,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 20,
          src: CARDS.CARD_12,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 21,
          src: CARDS.CARD_9,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 22,
          src: CARDS.CARD_10,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 23,
          src: CARDS.CARD_11,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 24,
          src: CARDS.CARD_12,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 25,
          src: CARDS.CARD_13,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 26,
          src: CARDS.CARD_14,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 27,
          src: CARDS.CARD_15,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 28,
          src: CARDS.CARD_16,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 29,
          src: CARDS.CARD_13,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 30,
          src: CARDS.CARD_14,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 31,
          src: CARDS.CARD_15,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
        {
          id: 32,
          src: CARDS.CARD_16,
          alt: "Monkey Card",
          isReversed: false,
          isBlocked: false,
        },
      ],
    },
    mutations: {
      setPlayer(state, value) {
        return state.player = value
      },
    },
    getter: getters,
  })

export default Store