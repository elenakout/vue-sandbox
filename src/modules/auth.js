import firebase from 'firebase';
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
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
    console.log(state.user);
  },
  setFeedback(state, message) {
    state.feedback = message;
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
