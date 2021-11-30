<template>
  <div>
    <button class="counter" @click="incrementCount">
      <h1>{{ msg }}</h1>
    </button>
    <h1 class="count">{{ count }}</h1>
    <button class="reset" @click="incrementCountByCount">
      <h4>Reset</h4>
    </button>
  </div>
</template>

<script>
export default {
  name: 'MemoryGame',
  props: {
    msg: String,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  
  methods: {
    incrementCount() {
      this.$store.commit('setCount',   this.count +1);
    },
    incrementCountByCount() {
      this.$store.commit('setCount', this.count * this.count);
    },
    resetCount() {
      this.$store.commit('setCount', 0);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
template {
  display: flex;
  justify-content: center;

}

.counter {
  border-radius: 50%;
}

.count {
  color: black;
  font-size: 55px;
}

.reset {
  background-color: white;
  border: none;
}
:hover.reset {
  color: orangered;
}
</style>