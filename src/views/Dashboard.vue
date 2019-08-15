<template>
  <div>
    <v-container>
      <h1 class="test display-4">home</h1>
      <h1>{{ activeuser.username}}</h1>

    </v-container>

  </div>

</template>

<script>
import { mapGetters } from 'vuex';


export default {

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
