<template>
  <div class="main">

      <v-btn class="ma-2" outlined color="indigo" @click="toggle">Create Board</v-btn>


<!-- Create Board Card -->
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">New Board</span>
          </v-card-title>
          <v-card-text>

            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                  v-model="name"
                  label="Board Name*"
                  required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="toggle()">Close</v-btn>
            <v-btn color="blue darken-1" text @click="saveBoard()">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


<!-- Boards List -->
      <section class="cards mt-6">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined
          v-for="board in getBoards" :key="board.id"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">BOARD</div>
              <v-list-item-title class="headline mb-1">{{ board.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ board.date }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"

            >
              <v-img

                src="https://i.imgur.com/mDSKItg.png"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text >Open</v-btn>
            <v-btn text>Delete</v-btn>
            <v-btn text>Add members</v-btn>
          </v-card-actions>
        </v-card>
      </section>


  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
  name: 'dashboard',
  computed: {
    ...mapGetters(['activeuser', 'getBoards']),
  },
  created() {
    // this.$store.dispatch('fetchUserBoards', this.activeuser.id)
    this.fetchUserBoards(this.activeuser.id);
  },

  data: () => ({
    //
    dialog: false,
    name: '',
  }),
  methods: {
    ...mapActions(['fetchUserBoards', 'createBoard', 'clearBoards']),
    toggle() {
      this.name = '';
      this.dialog = !this.dialog;
    },
    saveBoard() {
      const newBoard = {
        name: this.name,
        ownerId: this.activeuser.id,
        date: Date.now(),
      };
      this.createBoard(newBoard);
      this.dialog = false;
      this.name = '';
    },

  },
};
</script>

<style lang="scss">
.main {
  margin: 20px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;

}


</style>
