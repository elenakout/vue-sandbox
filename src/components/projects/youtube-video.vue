<template>
  <div class="video">
    <!-- <youtube
      :video-id="videoId"
      ref="youtube"
      @playing="playing"
      :player-vars="playerVars"
      mute="true"
    ></youtube>
    <button @click="playVideo">play</button>-->

    <youtube
      :video-id="videoId"
      :mute="nosound"
      :player-vars="{ autoplay: 1 } "
      player-width="100%"
    ></youtube>
  </div>
</template>

<script>
export default {
  data: () => ({
    videoId: 'Oabi3WjZSAY',
    playerVars: {
      autoplay: 1,
    },
    nosound: true,
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
