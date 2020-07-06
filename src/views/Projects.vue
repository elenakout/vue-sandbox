<template>
  <div class="container2">
    <h1>NAV BARS</h1>
    <nb-test1 />
    <h1>Flex navbar</h1>
    <nb-flex></nb-flex>
  </div>
</template>

<script>
import NbTest1 from '@/components/projects/nb-test1.vue';
import NbFlex from '@/components/projects/nb-flex.vue';

export default {
  name: 'projects',
  components: {
    NbTest1,
    NbFlex,
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.container2 {
  width: 100%;
  height: 100vh;
}
</style>
