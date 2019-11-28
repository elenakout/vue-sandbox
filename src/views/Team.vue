<template>
  <div>
    <h1 class="display-2">team</h1>
    <games></games>
  </div>
</template>

<script>
import Games from '@/components/team/Games.vue';

export default {
  name: 'team',
  components: {
    Games,
  },
};
</script>

<style lang="scss" scoped></style>
