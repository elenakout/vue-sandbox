<template>
  <div class="main">

    <v-btn class="ma-2" outlined color="indigo" @click="toggle">Create Board</v-btn>

<!-- Create Board Card -->
   <create-board v-model="dialog" @save='saveBoard'></create-board>


<!-- Boards List -->
   <boards-list :boards="getBoards"></boards-list>


  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BoardsList from '@/components/dashboard/BoardsList.vue';
import CreateBoard from '@/components/dashboard/CreateBoard.vue';


export default {
  name: 'dashboard',
  components: {
    BoardsList,
    CreateBoard,
  },
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

  }),
  methods: {
    ...mapActions(['fetchUserBoards', 'createBoard', 'clearBoards']),
    toggle() {
      this.dialog = !this.dialog;
    },
    saveBoard(boardName) {
      this.name = boardName;
      const newBoard = {
        name: boardName,
        ownerId: this.activeuser.id,
        date: Date.now(),
      };
      this.createBoard(newBoard);
      this.dialog = false;
    },

  },
};
</script>

<style lang="scss">
.main {
  margin: 20px;
}


</style>
