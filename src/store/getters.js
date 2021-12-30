export default {
    choseLevel: (state) => (level) => {
        console.log('state ,level: ', {state, level});
        return state.cardsInLevel = state.cards.slice(0, level);
    },
}