<template>
    <div class="first_div_main">
        <div class="firt_div">
            <img class="logo" src="/hotstar/disney-hotstar-logo.png" alt="">
            <div class="btnsub">
                <button class="clckbut">Subscribe ></button>
                <div class="inner-div">
                    <img class="inner-poster" src="/hotstar/hotstar-nav.jpg" alt="">
                    <div class="scnd-nav">
                        <img class="scnd_poster" src="/hotstar/Hotstar_logo_.png" alt="">
                       <div> <h2 class="scnd_txt">Disney + Hotstar</h2></div>
                       <div><h2 class="scnd_txt2">New & Coming Soon</h2></div>
                       <div class="maincls"><button class="lstbtn">Subscribe</button></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="scnd_div_main">
            <div class="scnd_div">
               <div><img class="main-poster" src="/hotstar/gaurdins-of-glxy.jpeg" alt=""></div>
               <div class="trailer-div"><button class="trailer-link" @click="openYouTubeVideo">Watch Trailer</button></div>
            </div>
            <div class="pster-div"><h2 class="pster-txt">Peter Quill, still reeling from the loss of Gamora, must rally his team around him on a <br> dangerous mission to save Rocket's life—a mission that, if not completed successfully,<br> could quite possibly lead to the end of the Guardians as we know them.</h2></div>
        </div>

        <div class="third_div_main">
            <div class="third_div">
                <div v-for="movie in movies" :key="movie.id" class="movie-poster">
                        <img :src="movie.poster" @click="openModal(movie)">
                </div>
                <MovieModal v-if="selectedMovie" :movie="selectedMovie" @close="closeModal" />


            </div>

        </div>
        
    </div>
</template>

<script>
import MovieModal from '@/components/MovieModal.vue';
export default {
    components: {
    MovieModal,
  },
  data() {
    return {
      movies: [
        { id: 1, poster: 'movie1.jpg', title: 'Movie 1', description: 'Description of Movie 1' },
        { id: 2, poster: 'movie2.jpg', title: 'Movie 2', description: 'Description of Movie 2' },
        // ... Add more movies
      ],
      selectedMovie: null,
    };
  },
  methods: {
    openYouTubeVideo() {
      const videoId = 'u3V5KDHRQvk';
      const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
      window.open(youtubeUrl, '_blank');
    },
    openModal(movie) {
      this.selectedMovie = movie;
    },
    closeModal() {
      this.selectedMovie = null;
    },
  },
};
</script>

<style scoped>
@import './style/hotstar\ style.css'

</style>