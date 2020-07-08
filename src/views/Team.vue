<template>
  <div class="team">
    <!-- <h1 class="display-2 mb-6">team</h1> -->
    <!-- <editor /> -->
    <!-- <carousel /> -->
    <AgileCarousel />
  </div>
</template>

<script>
// import Editor from '@/components/team/editor.vue';
// import Carousel from '@/components/team/carousel.vue';
import AgileCarousel from '@/components/team/agileCarousel.vue';

export default {
  name: 'team',
  components: {
    // Editor,
    // Carousel,
    AgileCarousel,
  },
};
</script>

<style lang="scss" scoped>
</style>
