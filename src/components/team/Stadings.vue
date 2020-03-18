<template>
  <div class="standigs">
    <h1>Stadings</h1>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Position</th>
            <th class="text-left">Crest</th>
            <th class="text-left">Name</th>
            <th class="text-left">Games</th>
            <th class="text-left">Wins</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getStandings.standings" :key="item.team.id">
            <td>{{ item.position }}</td>
            <td>
              <img :src="item.team.crestUrl" alt="crest" width="20px" height="20px" />
            </td>
            <td>{{ item.team.name }}</td>
            <td>{{ item.playedGames }}</td>
            <td>{{ item.won }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({}),
  methods: {
    ...mapActions(['fetchStandings']),
  },
  computed: {
    ...mapGetters(['getStandings']),
  },
  created() {
    this.fetchStandings();
  },
};
</script>

<style>
</style>
