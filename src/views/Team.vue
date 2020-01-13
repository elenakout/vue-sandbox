<template>
  <div>
    <h1 class="display-2">team</h1>
    <games></games>
    <h2>Cards events</h2>
    <cards-events></cards-events>
  </div>
</template>

<script>
import Games from '@/components/team/Games.vue';
import CardsEvents from '@/components/team/cards-events.vue';

export default {
  name: 'team',
  components: {
    Games,
    CardsEvents,
  },
};
</script>

<style lang="scss" scoped></style>
