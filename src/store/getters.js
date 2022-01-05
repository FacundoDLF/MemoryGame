export default {
    choseLevel: (state) => (level) => {
        return state.cardsInLevel = state.cards.slice(0, level)
    },
    resetGame: (state) => {
        return state.cardsInLevel = null;
    }
}