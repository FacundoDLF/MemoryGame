<template>
  <div>
    <header id="header" class="header">
        <div id="iso-logo" class="iso-logo">
            <span>Wellcome {{ player }} to Monkey MemoryGame</span>
        </div>
    </header>
    <section id="main" class="main">
        <div id="main-form" class="main-form">
            <form id="main-fills" class="main-fills">
                <div class="row">
                  <fieldset class="fill-in">
                      <label id="get-name" class="label-form" for="GET-name" >Player </label>
                      <input id="inputName" class="input-form" v-model="player" value="player">
                      <span id="errorName" class="error-span"></span>
                  </fieldset>

                  <fieldset class="fill-in">
                      <label id="get-name" class="label-form" for="GET-pass">Password: </label>
                      <input id="inputPass" class="input-form" type="password" name="pass">
                      <span id="errorPass" class="error-span"></span>
                  </fieldset>
                  <button id="submit" class="submit" type="submit" @click="handleStart">
                    START
                  </button>
                </div>
            </form>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login',

  props: {
    msg: String,
  },

  computed: {
    player: {
      get() {
        return this.$store.state.player;
      },
      set(value) {
        return this.$store.commit("setPlayer", value)
      },
    }
  },
  
  methods: {
    handleStart() {
      console.log('handleStar:');
      this.$router.push('/Canvas');

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
template {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.iso-logo {
  padding: 20px;
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bolder;
}

.main {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    text-align: center;
    width: 100%;
    height: 100%;
    
}

.main-form {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    
}
.main-fills {
    display: flex;
    flex-direction: row;
    column-count: 1;
    padding: 0% 0% 0% 0%;
    margin: 0;

}

.fill-in {
    display: flex;
    flex-basis: 50%;
    padding: 0%;
    margin: 0;
    border: 0;
}

.label-form{
    display: flex;
    height: 50%;
    padding: 4px;
    font-weight: bold;
    text-align: left;
    color: rgb(0, 0, 0);
}
.input-form{
    display: flex;
    border-style: solid;
    border-color: rgb(8, 0, 0);
}
.submit {
    justify-content: center;
    margin-top: 20%;
    padding: 2px;
    width: 6rem;
    font-family: 'New Rocker';
    font-size: 150%;
    color: rgb(8, 0, 0);
    border-radius: 15px;
}
</style>