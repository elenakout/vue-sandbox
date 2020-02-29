<template>
  <div>
    <h1>Game results page</h1>
    <p>Date: {{ getMatchDate }}</p>
    <p>Home: {{ getHomeTeam }}</p>
    <p>Away: {{ getAwayTeam }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    //
    dialog: false,
  }),
  methods: {
    ...mapActions(['fetchNextGame']),
  },
  computed: {
    ...mapGetters(['getMatchDate', 'getHomeTeam', 'getAwayTeam']),
  },
  created() {
    this.fetchNextGame();
  },
};
</script>

<style></style>
