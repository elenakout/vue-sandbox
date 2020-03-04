<template>
  <div>
    <h1>Game results page</h1>
    <div v-if="getHomeTeam">
      <p>Venue: {{ getGameVenue }}</p>
      <p>Date: {{ dateForm }}</p>
    <p>Home: {{ getHomeTeam.name }}</p>
    <img :src="getHomeTeam.crestUrl" alt="crest" class="crest">
    <p>Away: {{ getAwayTeam.name }}</p>
    <img :src="getAwayTeam.crestUrl" alt="crest" class="crest">

    <p>Info: {{ getGameInf }}</p>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';

export default {
  data: () => ({
    //
    dialog: false,

  }),
  methods: {
    ...mapActions(['fetchNextGame']),
  },
  computed: {
    ...mapGetters(['getMatchDate', 'getHomeTeam', 'getAwayTeam', 'getGameInf', 'getGameVenue']),
    dateForm() {
      // return moment(this.getMatchDate).locale('el').calendar();
      // return moment(this.getMatchDate).locale('el').fromNow();
      return moment(this.getMatchDate).locale('el').format('LLLL');
    },
  },
  created() {
    this.fetchNextGame();
  },
};
</script>

<style scoped>
.crest {
  height: 200px;
  width: 200px;
}
</style>
