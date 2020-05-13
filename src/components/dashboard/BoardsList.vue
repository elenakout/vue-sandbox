<template>
  <div class="cards-grid mt-6">
    <v-card class="pa-4" max-width="344" outlined v-for="board in boards" :key="board.id">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">BOARD</div>
          <v-list-item-title class="headline mb-1">{{ board.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ board.date }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions class="mt-3">
        <v-btn text small color="primary">Open</v-btn>
        <v-btn text color="error" @click="deleteBoard(board.id)">Delete</v-btn>
        <v-btn text>Add members</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'boardsList',
  props: ['boards'],
  methods: {
    ...mapActions(['deleteBoard']),
  },
};
</script>

<style lang="scss" scoped>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(344px, 1fr));
  grid-gap: 20px;
}
</style>
