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
    const URL = 'http://api.football-data.org/v2/competitions/SA/';
    const URL_MD = 'https://api.football-data.org/v2/competitions/SA/matches/?matchday=';

    const response = await fetch(URL, {
      method: 'GET',
      headers: { 'X-Auth-Token': '81d8a01b342f4a70a57c9ab956cfa00f' },
    });

    const season = await response.json();
    const matchDay = season.currentSeason.currentMatchday;

    const dayMatches = await fetch(URL_MD + matchDay, {
      method: 'GET',
      headers: {
        'X-Auth-Token': '81d8a01b342f4a70a57c9ab956cfa00f',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      },
    });

    console.log(dayMatches);
  },
};

export default {
  state: data,
  getters,
  actions,
  mutations,
};
