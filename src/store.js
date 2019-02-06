import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const mutations = {
  increment(state) {
    state.count += 1;
  },
  decrement(state) {
    state.count -= 1;
  }
};
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment');
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment');
        resolve();
      }, 1000);
    });
  }
};
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
};
const state = {
  count: 3,
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
