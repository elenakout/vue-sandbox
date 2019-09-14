<template>
    <div class="container2">
      <h1 class="center-content">Little Components</h1>
      <hambuger></hambuger>
    </div>
</template>

<script>
import Hambuger from '@/components/projects/hamburger-animation.vue';

export default {
  name: 'projects',
  components: {
    Hambuger,
  },
  data: () => ({
    e1: 0,
  }),
};
</script>

<style lang="scss" scoped>


</style>
