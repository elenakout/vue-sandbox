import firebase from 'firebase';
import db from '@/firebase/init';

const data = {
  user: null,
  feedback: null,
  admin: false,
};

const getters = {
  activeuser() {
    return data.user;
  },
  feedback() {
    return data.feedback;
  },
  admin() {
    return data.admin;
  },
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
    // console.log(state.user);
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
          date: Date.now(),
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
  state: data,
  getters,
  actions,
  mutations,
};
