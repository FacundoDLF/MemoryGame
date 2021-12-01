<template>
    <div id="app">
        <div id="gameX4" class="card-row">
            <img v-if="card" :key="1" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
            <img v-if="card" :key="2" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
            <img v-if="card" :key="3" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
            <img v-if="card" :key="4" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
        </div>
        <div id="gameX8" class="card-row">
            <img v-if="card" :key="5" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
            <img v-if="card" :key="6" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
            <img v-if="card" :key="7" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
            <img v-if="card" :key="8" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
        </div>
        <div id="gameX12" class="card-row">
            <img v-if="card" :key="9" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
            <img v-if="card" :key="10" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
            <img v-if="card" :key="11" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
            <img v-if="card" :key="12" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
        </div>
        <div id="gameX16" class="card-row">
            <img v-if="card" :key="13" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
            <img v-if="card" :key="14" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
            <img v-if="card" :key="15" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
            <img v-if="card" :key="16" @click="showCard" class="card" :src="card.src" alt="Monkey MemoryCards">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Game',
    data() {
        return {
        index: 0,
        card: null,
        cards: [
            {
                id: 1,
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOKNdUpoBWN860IXpp9GCa1yPzd5C9xFPmnGenDEAAo44uVENo857N3gan_jqPFxq4tc&usqp=CAU",
                alt: "Reverse Card"
            },
            {
                id: 2,
                src: "https://lh3.googleusercontent.com/ULkbT3GMA9SexiN3hcY-mjEIAAzV78qO5bJV9BSE-M7eWvmotrj8Ds6nHdeNb1gqzGMmu3f4G9UwZpgf-eazI3B569SYxdNG23pZiQ=s0",
                alt: "Monkey Card"
            },
            {
                id: 3,
                src: "https://lh3.googleusercontent.com/o3uiULfN4HD_Kxl1MjxiMVwsRLReMe4DPo3slBFnJJBVIy7cE8_XF49fXc_tGZrf6oQtvxFEedSp3PwnkKyI4kYudGmtv6zRnqNovg=s0",
                alt: "Monkey Card"
            },
        ]
        }
    },
    mounted() {
        this.showCard();
    },
    methods: {
        showCard() {
        this.card = this.cards[this.index];
        this.index = (this.index + 1) % this.cards.length;
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