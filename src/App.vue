<template>
  
  <h1>{{ count }}</h1>
  <button @click="count++">Click</button>

  <!-- <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/hello">Hello</router-link>
    </li>
  </ul>

  <hr>

  <router-view></router-view> -->

</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue';

export default {
  name: "App",
  setup() {
    const store = useStore();

    fetch('/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview')
      .then(d => d.json())
      .then(d => console.log(d));

    return {
      count: computed({
        get: () => store.state.count,
        set: val => store.commit('setCount', val),
      })
    }

  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
