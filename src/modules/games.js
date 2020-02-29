const data = {
  matchDate: '',
  awayTeamId: null,
  homeTeamId: null,
};

const getters = {
  getMatchDate(state) {
    return state.matchDate;
  },

  getHomeTeam(state) {
    return state.homeTeamId;
  },

  getAwayTeam(state) {
    return state.awayTeamId;
  },
};

const mutations = {
  setMatchDate(state, payload) {
    state.matchDate = payload;
  },
  setHomeTeam(state, payload) {
    state.homeTeamId = payload;
  },
  setAwayTeam(state, payload) {
    state.awayTeamId = payload;
  },
};

const actions = {
  async fetchNextGame({ commit }) {
    const dayMatches = await fetch('http://localhost:1228/api/v1/next-game', {
      method: 'GET',
    });
    const json = await dayMatches.json();

    const date = json.utcDate;
    const home = json.homeTeam;
    const away = json.awayTeam;

    commit('setMatchDate', date);
    commit('setHomeTeam', home);
    commit('setAwayTeam', away);
    // console.log(json);
  },
};

export default {
  state: data,
  getters,
  actions,
  mutations,
};

// 'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//         'content-type': 'application/json',
