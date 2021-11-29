<template>
  <div>
    <button class="counter" @click="count = count + 1">
      <h1>{{ msg }}</h1>
    </button>
    <h1 class="count">{{ count }}</h1>
    <button class="reset" @click="count = count * 0">
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
  data: () => ({
    count: 0,
  })
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
