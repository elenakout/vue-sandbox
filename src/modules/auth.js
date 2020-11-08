import firebase from 'firebase/app';
import moment from 'moment';
import db from '@/firebase/init';

const sendEmail = async (payload) => {
  try {
    // SEND EMAIL
    const maildata = {
      service_id: process.env.VUE_APP_SERVICE_ID,
      template_id: process.env.VUE_APP_TEMPLATE_ID,
      user_id: process.env.VUE_APP_USER_ID,
      template_params: {
        username: payload.username,
        message: 'new user signed up',
        from_name: payload.email,
        date: payload.date,
      },
    };

    const response = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(maildata),
      },
    );

    const res = await response;

    console.log(res.ok);
  } catch (error) {
    console.log(error);
  }
};

const data = {
  user: null,
  feedback: null,
  users: [],
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
  allUsers() {
    return data.users;
  },
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setFeedback(state, message) {
    state.feedback = message;
  },
  setUsers(state, payload) {
    state.users.push(payload);
  },
  resetUsers() {
    data.users = [];
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
      .then(cred => {
        const ref = db.collection('users').doc(cred.user.uid);
        const newUser = {
          id: cred.user.uid,
          username: payload.username,
          userId: payload.slug,
          email: cred.user.email,
          isAdmin: false,
          date: moment(Date.now()).format('LLL'),
        };

        ref.set(newUser);
        commit('setUser', newUser);
        sendEmail(newUser);
      })
      .catch(err => {
        commit('setFeedback', err.message);
      });
  },

  signUserIn({ commit }, payload) {
    const { router } = payload;
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(cred => {
        const ref = db.collection('users').where('userId', '==', cred.user.uid);

        ref.get().then(snapshot => {
          snapshot.forEach(doc => {
            const usr = {
              ...doc.data(),
              id: doc.id,
            };
            commit('setUser', usr);

            router.push({ name: 'dashboard' });
          });
        });
      })
      .catch(err => {
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

  fetchUsers({ commit }) {
    commit('resetUsers');
    db.collection('users')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const user = {
            ...doc.data(),
            id: doc.id,
          };
          commit('setUsers', user);
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
