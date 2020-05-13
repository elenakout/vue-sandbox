<template>
  <section class="starwars container">
    <v-card class="mx-auto onemovie-card mb-10" max-width="344" v-if="isMovie">
      <v-card-text>
        <div>{{ onemovie.episode_id }}</div>
        <p class="display-1 text--primary">{{ onemovie.title }}</p>
        <p>{{ reladate(onemovie.release_date) }}</p>
        <div class="text--primary">{{ onemovie.opening_crawl }}</div>
        <p v-for="planet in planets" :key="planet.name">{{ planet.name }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4" @click="allPlanets(onemovie.planets)">Planets</v-btn>
      </v-card-actions>
    </v-card>
    <div class="allmovies">
      <v-card class="mr-5 mb-5" min-width="369" v-for="movie in movies" :key="movie.episode_id">
        <v-card-text>
          <div>No {{ movie.episode_id }}</div>
          <p class="display-1 text--primary">{{ movie.title }}</p>
          <p>{{ formatdate(movie.release_date) }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4" @click="oneMovie(movie.url)">Learn More</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </section>
</template>

<script>
import moment from 'moment';

export default {
  name: 'starwars',
  components: {},

  data() {
    return {
      isMovie: false,
      movies: [],
      onemovie: {},
      planets: [],
    };
  },
  methods: {
    async fetchMovies() {
      const result = await this.$http.get('https://swapi.co/api/films/');
      const mov = result.data.results;
      //   this.movies = result.data.results;
      this.movies = mov.sort((a, b) => (a.episode_id > b.episode_id ? 1 : -1));
    },

    async oneMovie(url) {
      this.onemovie = '';
      this.planets = [];
      const result = await this.$http.get(url);
      this.onemovie = result.data;
      this.isMovie = true;
    },
    allPlanets(planets) {
      this.planets = [];
      planets.forEach(planet => {
        this.planetInfo(planet);
      });
    },
    async planetInfo(url) {
      const result = await this.$http.get(url);
      this.planets.push(result.data);
    },
    formatdate(date) {
      return moment(date)
        .locale('el')
        .format('DD MMMM YYYY');
    },
    reladate(date) {
      return moment(date, 'YYYYMMDD').fromNow();
    },
  },
  mounted() {
    this.fetchMovies();
  },
};
</script>

<style scoped>
.starwars {
  display: flex;
  flex-wrap: wrap;
}

.allmovies {
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  width: 100vw;
}

.onemovie-card {
  height: fit-content;

  justify-self: flex-start;
}
</style>
