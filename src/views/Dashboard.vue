<template>
  <div>
    <v-container>
      <h1 class="test display-4">home</h1>
      <h1>{{ activeuser.username}}</h1>
    <sign-in />
    </v-container>

  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import SignIn from '@/components/dashboard/SignIn.vue';

export default {
  components: {
    SignIn,

  },
  computed: {
    ...mapGetters(['activeuser']),
  },
};
</script>

<style lang="scss">
.test {
  color: $primary;
}
</style>
