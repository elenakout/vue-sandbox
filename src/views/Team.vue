<template>
  <div class="team">
    <h1 class="display-2 mb-6">team</h1>
    <editor />
    <carousel />
  </div>
</template>

<script>
import Editor from '@/components/team/editor.vue';
import Carousel from '@/components/team/carousel.vue';

export default {
  name: 'team',
  components: {
    Editor,
    Carousel,
  },
};
</script>

<style lang="scss" scoped>
.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
