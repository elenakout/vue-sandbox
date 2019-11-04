<template>
  <div class="container2">
    <h1>NAV BARS</h1>
    <nb-test1 />
  </div>
</template>

<script>
import NbTest1 from '@/components/projects/nb-test1.vue';

export default {
  name: 'projects',
  components: {
    NbTest1,
  },
  data: () => ({
    e1: 0,
  }),
};
</script>

<style lang="scss" scoped></style>
