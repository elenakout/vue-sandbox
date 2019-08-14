<template>

    <div>
        <h1 class="display-2">Signup</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => {

  },
  computed: {
    ...mapGetters(['activeUser']),
  },
  watch: {
    activeUser(value) {
      if (value !== null && value !== undefined) {
        this.$router.push({ name: 'home' });
      }
    },
  },

};
</script>

<style lang="scss" scoped>

</style>
