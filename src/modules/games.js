const data = {
  matchDate: '',
  awayTeam: null,
  homeTeam: null,
  gameInf: null,
  gameVenue: null,
  standings: null,
};

const getters = {
  getMatchDate(state) {
    return state.matchDate;
  },

  getHomeTeam(state) {
    return state.homeTeam;
  },

  getAwayTeam(state) {
    return state.awayTeam;
  },

  getGameInf(state) {
    return state.gameInf;
  },

  getGameVenue(state) {
    return state.gameVenue;
  },

  getStandings(state) {
    return state.standings;
  },
};

const mutations = {
  setMatchDate(state, payload) {
    state.matchDate = payload;
  },
  setHomeTeam(state, payload) {
    state.homeTeam = payload;
  },
  setAwayTeam(state, payload) {
    state.awayTeam = payload;
  },

  setGameInf(state, payload) {
    state.gameInf = payload;
  },

  setGameVenue(state, payload) {
    state.gameVenue = payload;
  },

  setStandings(state, payload) {
    state.standings = payload;
  },
};

// http://inter-api-proxy.herokuapp.com/api/v1/next-game

const actions = {
  async fetchNextGame({ commit }) {
    const dayMatches = await fetch('http://localhost:1228/api/v1/next-game', {
      method: 'GET',
    });
    const json = await dayMatches.json();

    const date = json.utcDate;
    const home = json.homeTeam;
    const away = json.awayTeam;
    const gameId = json.id;

    const homeInf = await fetch(`http://localhost:1228/api/v1/teams/${home.id}`, {
      method: 'GET',
    });

    const resHome = await homeInf.json();

    const awayInf = await fetch(`http://localhost:1228/api/v1/teams/${away.id}`, {
      method: 'GET',
    });

    const resAway = await awayInf.json();

    const gameInf = await fetch(`http://localhost:1228/api/v1/match/${gameId}`, {
      method: 'GET',
    });

    const resGame = await gameInf.json();

    commit('setMatchDate', date);
    commit('setHomeTeam', resHome);
    commit('setAwayTeam', resAway);
    commit('setGameInf', resGame.head2head);
    commit('setGameVenue', resGame.match.venue);
  },

  async fetchStandings({ commit }) {
    const getstandings = await fetch('http://localhost:1228/api/v1/standings', {
      method: 'GET',
    });
    const json = await getstandings.json();

    commit('setStandings', json);
  },
};

export default {
  state: data,
  getters,
  actions,
  mutations,
};
