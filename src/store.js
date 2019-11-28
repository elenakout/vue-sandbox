import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import boards from './modules/boards';
import games from './modules/games';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    boards,
    games,
  },
});
