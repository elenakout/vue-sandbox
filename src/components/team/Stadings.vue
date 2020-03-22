<template>
  <div class="standings">
    <h1>Stadings</h1>

    <v-simple-table v-if="getStandings" class="points-table">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Position</th>
            <th class="text-left">Crest</th>
            <th class="text-left">Name</th>
            <th class="text-left">Α</th>
            <th class="text-left">Ν</th>
            <th class="text-left">Ι</th>
            <th class="text-left">Η</th>
            <th class="text-left">ΓΥ</th>
            <th class="text-left">ΓΚ</th>
            <th class="text-left">ΓΔ</th>
            <th class="text-left">Β</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in getStandings.standings"
            :key="item.team.id"
            :class="{isInter: item.team.id=== 108, }"
          >
            <td>{{ item.position }}</td>
            <td>
              <img
                :src="item.team.crestUrl"
                alt="crest"
                width="24px"
                height="24px"
                @error="imageLoadError"
              />
            </td>
            <td>
            <p>jksdjf</p>
            {{ item.team.name }}
            </td>
            <td>{{ item.playedGames }}</td>
            <td>{{ item.won }}</td>
            <td>{{ item.draw }}</td>
            <td>{{ item.lost }}</td>
            <td>{{ item.goalsFor }}</td>
            <td>{{ item.goalsAgainst }}</td>
            <td>{{ item.goalDifference }}</td>
            <td>{{ item.points }}</td>
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
    imageLoadError(e) {
      // eslint-disable-next-line operator-linebreak
      e.target.src =
        'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Serie_A_logo_%282019%29.svg/180px-Serie_A_logo_%282019%29.svg.png';
    },
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
.standings {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.isInter {
  background-color: #f8f9fa;
}

.points-table {
  width: 50vw;
}
</style>
