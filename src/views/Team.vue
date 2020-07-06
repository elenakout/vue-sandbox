<template>
  <div class="team">
    <h1 class="display-2 mb-6">team</h1>
    <editor />
  </div>
</template>

<script>
import Editor from '@/components/team/editor.vue';

export default {
  name: 'team',
  components: {
    Editor,
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
