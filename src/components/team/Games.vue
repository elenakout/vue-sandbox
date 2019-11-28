<template>
  <div>
    <h1>Game results page</h1>
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
    ...mapActions(['fetchSeason', 'createBoard', 'clearBoards']),
  },
  computed: {
    ...mapGetters(['getGames']),
  },
  created() {},
};
</script>

<style></style>
