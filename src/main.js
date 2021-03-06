import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App.vue';
import router from './router';
import store from './store';

import vuetify from './plugins/vuetify';
import db from '@/firebase/init';


Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_API,
    language: 'el',
  },
});

let app;

const initialize = () => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
    }).$mount('#app');
  }
};

// wait for firebase to init before create the app
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const ref = db.collection('users').where('id', '==', user.uid);

    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        const usr = {
          ...doc.data(),
          id: doc.id,
          email: user.email,
        };

        store.commit('setUser', usr);
      });
    });
  } else {
    store.commit('setUser', null);
  }
  initialize();
});
