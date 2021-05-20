import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    setCount (state, payload) {
      state.count = payload;
    }
  }
});