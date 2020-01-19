<template>
  <section class="starwars container">
    StarWARS API
    <v-container fluid v-if="movies.length > 0">
      <v-col v-for="movie in movies" :key="movie.episode_id" cols="6">
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div>{{ movie.episode_id }}</div>
            <p class="display-1 text--primary">
              {{ movie.title }}
            </p>
            <p>{{ movie.release_date }}</p>
            <div class="text--primary">
              {{ movie.opening_crawl }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4" @click="oneMovie(movie.url)">
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-container>
    <v-card class="mx-auto" max-width="344" v-if="onemovie">
      <v-card-text>
        <div>{{ onemovie.episode_id }}</div>
        <p class="display-1 text--primary">
          {{ onemovie.title }}
        </p>
        <p>{{ onemovie.release_date }}</p>
        <div class="text--primary">
          {{ onemovie.opening_crawl }}
        </div>
        <p v-for="planet in planets" :key="planet.name">{{ planet.name }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4" @click="allPlanets(onemovie.planets)">
          Learn More
        </v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'starwars',
  components: {},

  data() {
    return {
      movies: [],
      onemovie: {},
      planets: [],
    };
  },
  methods: {
    async fetchMovies() {
      const result = await this.$http.get('https://swapi.co/api/films/');
      this.movies = result.data.results;
    },

    async oneMovie(url) {
      const result = await this.$http.get(url);
      this.onemovie = result.data;
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
  },
  mounted() {
    this.fetchMovies();
  },
};
</script>

<style></style>
