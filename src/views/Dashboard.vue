<template>
  <div>
    <v-container>
      <h1 class="test display-4">home</h1>
    <sign-in />
    </v-container>

  </div>

</template>

<script>
import SignIn from '@/components/dashboard/SignIn.vue';

export default {
  components: {
    SignIn,

  },
};
</script>

<style lang="scss">
.test {
  color: $primary;
}
</style>
