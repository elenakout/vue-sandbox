import firebase from 'firebase';
import db from '@/firebase/init';

const state = {
  user: null,
  isAdmin: false,
  error: null,
};

const getters = {
  activeUser() {
    if (state.user.isAdmin === true) {
      state.isAdmin = true;
    }
    return state.user;
  },

  userAdmin() {
    return state.isAdmin;
  },

  errors() {
    return state.error;
  },
};

const mutations = {
  setUser(payload) {
    state.user = payload;
  },

  setError(payload) {
    state.error = payload;
  },
};

const actions = {
  signUserUp({ commit }, payload) {
    const ref = db.collection('users').doc(payload.slug);

    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((cred) => {
        const newUser = {
          id: payload.slug,
          username: payload.username,
          userId: cred.user.uid,
          email: cred.user.email,
          displayName: cred.user.displayName,
          fotoUrl: cred.user.photoURL,
          isAdmin: false,
          date: Date.now(),
        };

        ref.set(newUser);
        commit('setUser', newUser);
      })
      .catch((error) => {
        commit('setError', error);
      });
  },

  signUserIn({ commit }, payload) {
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
          });
        });
      })
      .catch((err) => {
        commit('setError', err);
      });
  },

  signUserOut({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit('setUser', null);
      });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
