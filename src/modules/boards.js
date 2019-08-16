import moment from 'moment';
import db from '../firebase/init';

const data = {
  boards: [],
};

const getters = {
  getBoards(state) {
    return state.boards;
  },
};

const mutations = {
  resetBoards(state) {
    state.boards = [];
  },
  setBoards(state, payload) {
    state.boards.push(payload);
  },
};

const actions = {
  clearBoards({ commit }) {
    commit('resetBoards');
  },
  createBoard({ commit }, payload) {
    const board = {
      name: payload.name,
      ownerId: payload.ownerId,
      date: moment(payload.date).format('LL'),
      membersId: [],
    };
    db.collection('boards')
      .add(board)
      .then(() => {
        commit('setBoards', board);
      });
  },
  fetchUserBoards({ commit }, user) {
    commit('resetBoards');
    const ref = db.collection('boards').where('ownerId', '==', user);

    ref
      .orderBy('date', 'desc')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const board = {
            ...doc.data(),
            id: doc.id,
          };
          commit('setBoards', board);
        });
      });
  },
};

export default {
  state: data,
  getters,
  actions,
  mutations,
};
