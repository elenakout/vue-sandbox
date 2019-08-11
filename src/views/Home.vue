<template>
  <div>
    <v-container>
      <h1 class="test">home</h1>
    <sign-in />
    </v-container>

  </div>

</template>

<script>
import SignIn from '@/components/home/SignIn.vue';

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
