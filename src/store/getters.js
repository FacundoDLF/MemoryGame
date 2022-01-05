export default {
    choseLevel: (state) => (level) => {
        return state.cardsInLevel = state.cards.slice(0, level);
    },
}