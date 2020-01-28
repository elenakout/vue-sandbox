const data = {
  games: [],
};

const getters = {
  getGames(state) {
    return state.games;
  },
};

const mutations = {
  resetBoards(state) {
    state.games = [];
  },
  setBoards(state, payload) {
    state.games.push(payload);
  },
  deleteBoard(state, id) {
    state.games = state.games.filter(game => game.id !== id);
  },
};

const actions = {
  async fetchSeason() {
    const dayMatches = await fetch('http://inter-api-proxy.herokuapp.com/inter', {
      method: 'GET',
    });
    const json = await dayMatches.json();
    console.log(json);
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
