import firebase from 'firebase';
import moment from 'moment';
import db from '@/firebase/init';

const data = {
  user: null,
  feedback: null,
};

const getters = {
  activeuser() {
    return data.user;
  },
  feedback() {
    return data.feedback;
  },
  isadmin() {
    return data.user.isAdmin;
  },
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setFeedback(state, message) {
    state.feedback = message;
  },
};

const actions = {
  feedbackReset({ commit }) {
    commit('setFeedback', null);
  },
  signUserUp({ commit }, payload) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((cred) => {
        const ref = db.collection('users').doc(cred.user.uid);
        const newUser = {
          id: cred.user.uid,
          username: payload.username,
          userId: payload.slug,
          email: cred.user.email,
          isAdmin: false,
          date: moment(Date.now()).format('LL'),
        };

        ref.set(newUser);
        commit('setUser', newUser);
      })
      .catch((err) => {
        commit('setFeedback', err.message);
      });
  },

  signUserIn({ commit }, payload) {
    const { router } = payload;
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((cred) => {
        const ref = db.collection('users').where('userId', '==', cred.user.uid);

        ref.get().then((snapshot) => {
          snapshot.forEach((doc) => {
            const usr = {
              ...doc.data(),
              id: doc.id,
            };
            commit('setUser', usr);

            router.push({ name: 'dashboard' });
          });
        });
      })
      .catch((err) => {
        commit('setFeedback', err.message);
      });
  },

  signUserOut({ commit, dispatch }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit('setUser', null);
        dispatch('clearBoards');
      });
  },
};

export default {
  state: data,
  getters,
  actions,
  mutations,
};
