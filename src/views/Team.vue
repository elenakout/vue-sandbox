<template>
  <div class="container team">
    <h1 class="display-2 mb-6">team</h1>
    <info-card></info-card>
  </div>
</template>

<script>
import InfoCard from '@/components/team/InfoCard.vue';

export default {
  name: 'team',
  components: {
    InfoCard,

  },
};
</script>

<style lang="scss" scoped>
</style>
