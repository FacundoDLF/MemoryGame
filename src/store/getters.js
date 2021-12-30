export default {
    choseLevel(level) {
        this.cardsInLevel = this.$store.state.cards.slice(0, level);
        console.log('choseLevel: ', level);
    },
}