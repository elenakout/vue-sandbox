<template>
  <div class="video">
    <!-- <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
    <button @click="playVideo">play</button>-->
  </div>
</template>

<script>
export default {
  data: () => ({
    videoId: 'Oabi3WjZSAY',
  }),
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log('o/ we are watching!!!');
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
