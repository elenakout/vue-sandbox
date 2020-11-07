<template>
  <v-app>
    <nav-bar />
    <v-main class="fill-height">
      <router-view />
    </v-main>

    <v-footer>
      <v-spacer></v-spacer>
      <div>Made with ❤ by elenakout &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.bm-burger-bars {
  background-color: #5a74e9;
}
</style>
