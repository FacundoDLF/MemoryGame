<template>
    <div id="app">
        <img v-for="card in cards" :key="card.id" @click="showCard(card.id)" class="card" :src="card.isReversed ? card.src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOKNdUpoBWN860IXpp9GCa1yPzd5C9xFPmnGenDEAAo44uVENo857N3gan_jqPFxq4tc&usqp=CAU'" alt="Monkey MemoryCards">
    </div>
</template>

<script>

export default {
    name: 'Game',
    data() {
        return {
        index: 0,
        cards: [
            {
                id: 1,
                src: "https://lh3.googleusercontent.com/ULkbT3GMA9SexiN3hcY-mjEIAAzV78qO5bJV9BSE-M7eWvmotrj8Ds6nHdeNb1gqzGMmu3f4G9UwZpgf-eazI3B569SYxdNG23pZiQ=s0",
                alt: "Monkey Card",
                isReversed: false
            },
            {
                id: 2,
                src: "https://lh3.googleusercontent.com/o3uiULfN4HD_Kxl1MjxiMVwsRLReMe4DPo3slBFnJJBVIy7cE8_XF49fXc_tGZrf6oQtvxFEedSp3PwnkKyI4kYudGmtv6zRnqNovg=s0",
                alt: "Monkey Card",
                isReversed: false
            },
            {
                id: 3,
                src: "https://lh3.googleusercontent.com/ULkbT3GMA9SexiN3hcY-mjEIAAzV78qO5bJV9BSE-M7eWvmotrj8Ds6nHdeNb1gqzGMmu3f4G9UwZpgf-eazI3B569SYxdNG23pZiQ=s0",
                alt: "Monkey Card",
                isReversed: false
            },
            {
                id: 4,
                src: "https://lh3.googleusercontent.com/o3uiULfN4HD_Kxl1MjxiMVwsRLReMe4DPo3slBFnJJBVIy7cE8_XF49fXc_tGZrf6oQtvxFEedSp3PwnkKyI4kYudGmtv6zRnqNovg=s0",
                alt: "Monkey Card",
                isReversed: false
            },
            {
                id: 5,
                src: "https://lh3.googleusercontent.com/ULkbT3GMA9SexiN3hcY-mjEIAAzV78qO5bJV9BSE-M7eWvmotrj8Ds6nHdeNb1gqzGMmu3f4G9UwZpgf-eazI3B569SYxdNG23pZiQ=s0",
                alt: "Monkey Card",
                isReversed: false
            },
            {
                id: 6,
                src: "https://lh3.googleusercontent.com/o3uiULfN4HD_Kxl1MjxiMVwsRLReMe4DPo3slBFnJJBVIy7cE8_XF49fXc_tGZrf6oQtvxFEedSp3PwnkKyI4kYudGmtv6zRnqNovg=s0",
                alt: "Monkey Card",
                isReversed: false
            },
            {
                id: 7,
                src: "https://lh3.googleusercontent.com/ULkbT3GMA9SexiN3hcY-mjEIAAzV78qO5bJV9BSE-M7eWvmotrj8Ds6nHdeNb1gqzGMmu3f4G9UwZpgf-eazI3B569SYxdNG23pZiQ=s0",
                alt: "Monkey Card",
                isReversed: false
            },
            {
                id: 8,
                src: "https://lh3.googleusercontent.com/o3uiULfN4HD_Kxl1MjxiMVwsRLReMe4DPo3slBFnJJBVIy7cE8_XF49fXc_tGZrf6oQtvxFEedSp3PwnkKyI4kYudGmtv6zRnqNovg=s0",
                alt: "Monkey Card",
                isReversed: false
            },
        ]
        }
    },
    methods: {
        showCard(cardId) {
            this.cards = this.cards.map((card) => {
                if(card.id === cardId) {
                    return {...card, isReversed: !card.isReversed}
                } else return card
            });
        }
    },
}

</script>

<style scoped>
.card {
  width: 150px;
  height: 175px;
  margin: 2px;
  cursor: pointer;
}

.card:hover {
  filter: brightness(1.2);
}
</style>