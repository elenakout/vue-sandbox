<template>
  <div>
    <h1 class="display-2">team</h1>
    <standings></standings>
  </div>
</template>

<script>
import Standings from '../components/team/Stadings.vue';

export default {
  name: 'team',
  components: {
    Standings,
  },
};
</script>

<style lang="scss" scoped></style>
