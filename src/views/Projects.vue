<template>
  <div class="container2">
    <h1>NAV BARS</h1>
    <nb-test1 />
    <h1>Flex navbar</h1>
    <nb-flex></nb-flex>
    <!-- <carousel /> -->

    <h1>Youtube video</h1>
    <you-video />
  </div>
</template>

<script>
import NbTest1 from '@/components/projects/nb-test1.vue';
import NbFlex from '@/components/projects/nb-flex.vue';
import YouVideo from '@/components/projects/youtube-video.vue';
// import Carousel from '@/components/projects/carousel.vue';

export default {
  name: 'projects',
  components: {
    NbTest1,
    NbFlex,
    YouVideo,
    // Carousel,
  },
  data: () => ({
    e1: 0,
  }),
};
</script>

<style lang="scss" scoped>
.container2 {
  width: 100%;
  height: 100vh;
}
</style>
