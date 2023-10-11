<template>
  <section class="homepage">
    <div class="glass-background"></div>
    <div class="content">
      <div class="banner">
        <img class="movie-banner" src="/ott/movie-banner.jpg" alt="Banner Image" />
        <h1>Welcome to Our OTT Platform</h1>
        <p>Explore a wide range of movies and TV shows.</p>
      </div>
      <div class="movie-posters">
        <div
          v-for="movie in movies"
          :key="movie.id"
          class="movie-poster"
          :style="{ backgroundImage: `url(${movie.poster})` }"
          @click="navigateToMovieDetails(movie.id)"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        {
          id: 1,
          title: "Movie 1",
          poster: "/hotstar/movie-poster1.jpg"
        },
        {
          id: 2,
          poster: "/hotstar/movie-poster2.jpg",
          title: "Transformers Rise of the Beast",
        },
        {
          id: 3,
          poster: "/hotstar/movie-poster3.jpg",
          title: "Iron man 3",
        },
        {
          id: 4,
          poster: "/hotstar/movie-poster4.jpg",
          title: "OPPENHEIMER",
        },
        {
          id: 5,
          poster: "/hotstar/movie-poster5.jpeg",
          title: "Guardians of Galaxy",
        },
        {
          id: 6,
          poster: "/hotstar/movie-poster6.jpg",
          title: "Transformers Rise of the Beast",
        },
        {
          id: 7,
          poster: "/hotstar/movie-poster7.png",
          title: "Iron man 3",
        },
        {
          id: 8,
          poster: "/hotstar/movie-poster8.jpg",
          title: "OPPENHEIMER",
        },
        {
          id: 9,
          poster: "/hotstar/most-viewed13.jpg",
          title: "Guardians of Galaxy",
        },
        {
          id: 10,
          poster: "/hotstar/most-viewed14.jpg",
          title: "Guardians of Galaxy",
        },
        {
          id: 11,
          poster: "/hotstar/most-viewed15.jpg",
          title: "Guardians of Galaxy",
        },
        {
          id: 12,
          poster: "/hotstar/most-viewed16.jpg",
          title: "Guardians of Galaxy",
        },
        
      ]
    };
  },
  methods: {
    navigateToMovieDetails(movieId) {
      // Navigate to movie details page using Vue Router
      // Example: this.$router.push(`/movies/${movieId}`);
    }
  }
};
</script>
<style scoped>
@import "./style/otthome\ style.css";
</style>