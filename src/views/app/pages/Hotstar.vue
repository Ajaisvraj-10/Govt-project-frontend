<template>
  <div class="first_div_main">
    <div class="firt_div">
      <img class="logo" src="/hotstar/disney-hotstar-logo.png" alt="" />
      <div class="btnsub">
        <button class="clckbut">Subscribe ></button>
        <div class="inner-div">
          <img class="inner-poster" src="/hotstar/hotstar-nav.jpg" alt="" />
          <div class="scnd-nav">
            <img class="scnd_poster" src="/hotstar/Hotstar_logo_.png" alt="" />
            <div><h2 class="scnd_txt">Disney + Hotstar</h2></div>
            <div><h2 class="scnd_txt2">New & Coming Soon</h2></div>
            <div class="maincls"><button class="lstbtn">Subscribe</button></div>
          </div>
        </div>
      </div>  
    </div>

    <div class="scnd_div_main">
      <div class="scnd_div">
        <div>
          <img
            class="main-poster"
            src="/hotstar/gaurdins-of-glxy.jpeg"
            alt=""
          />
        </div>
        <div class="trailer-div">
          <button class="trailer-link" @click="openYouTubeVideo()">
            Watch Trailer
          </button>
        </div>
      </div>
      <div class="pster-div">
        <h2 class="pster-txt">
          Peter Quill, still reeling from the loss of Gamora, must rally his
          team around him on a <br />
          dangerous mission to save Rocket's life—a mission that, if not
          completed successfully,<br />
          could quite possibly lead to the end of the Guardians as we know them.
          <div class="trnding">
            <h2 class="trnd">Trending</h2>
          </div>
         
        </h2>
      </div>
    </div>

    <div class="third_div_main">
      <div class="thrd-main">
    <div class="movie-list">
    <div v-for="movie in movies" :key="movie.id" class="movie-card">
      <router-link :to="{ name: 'Moviedetails', params: { id: movie.id } }">
        <img class="movie-poster" :src="movie.poster" alt="Movie Poster" />
      </router-link>
    </div>
  </div>
      </div>
    </div>
   

    <div class="fourth_div_main">
      <div class="fourth-main">
        <div class="most-viewed">
          <h2 class="movie_title">Popular Movies  ></h2>
          <div class="poster-row">
            <div v-for="(poster, index) in posters1" :key="index" class="movie-poster2">
              <img class="mst-view-prt" :src="poster" alt="Movie Poster" />
            </div>
          </div>
       </div>     
      </div>

    </div>

    <div class="fifth_div_main">
      <div class="fifth-main">
        <div class="most-viewed2">
          <h2 class="movie_title">Most Viewed  ></h2>
          <div class="poster-row2">
            <div v-for="(poster, index) in posters2" :key="index" class="movie-poster3">
              <img class="mst-view-prt2" :src="poster" alt="Movie Poster" />
            </div>
          </div>
       </div>     
      </div>

    </div>

    <footer class="footer">
          <div class="footer-content">
            <div class="footer-section">
              <h3>About Us</h3>
              <p>About Hotstar and our mission to provide great content.</p>
            </div>
            <div class="footer-section">
              <h3>Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV Shows</a></li>
                <li><a href="#">Subscriptions</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h3>Contact Us</h3>
              <p>Email: contact@hotstar.com</p>
              <p>Phone: 123-456-7890</p>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2023 Hotstar. All rights reserved.</p>
          </div>
        </footer>

  </div>
</template>

<script>
import Moviedetails from "./Moviedetails.vue"; 
export default {
  // components: {
  //   Moviedetails,
  // },
  data() {
    return {
      movies: [
        {
          id: 1,
          poster: "/hotstar/movie-poster1.jpg",
          title: "Guardians of Galaxy",
          description: "Description of Movie 1",
        },
        {
          id: 2,
          poster: "/hotstar/movie-poster2.jpg",
          title: "Transformers Rise of the Beast",
          description: "Description of Movie 2",
        },
        {
          id: 3,
          poster: "/hotstar/movie-poster3.jpg",
          title: "Iron man 3",
          description: "Description of Movie 2",
        },
        {
          id: 4,
          poster: "/hotstar/movie-poster4.jpg",
          title: "OPPENHEIMER",
          description: "Description of Movie 2",
        },
        {
          id: 5,
          poster: "/hotstar/movie-poster5.jpeg",
          title: "Guardians of Galaxy",
          description: "Description of Movie 1",
        },
        {
          id: 6,
          poster: "/hotstar/movie-poster6.jpg",
          title: "Transformers Rise of the Beast",
          description: "Description of Movie 2",
        },
        {
          id: 7,
          poster: "/hotstar/movie-poster7.png",
          title: "Iron man 3",
          description: "Description of Movie 2",
        },
        {
          id: 8,
          poster: "/hotstar/movie-poster8.jpg",
          title: "OPPENHEIMER",
          description: "Description of Movie 2"
        },
      ],
      selectedMovie: null,
      posters1: [
        "/hotstar/most-viewed13.jpg", 
        "/hotstar/most-viewed14.jpg",
        "/hotstar/most-viewed15.jpg",
        "/hotstar/most-viewed16.jpg",
        "/hotstar/most-viewed17.jpg",
        "/hotstar/movie-poster4.jpg",
       
      ],
      posters2: [
        "/hotstar/most-viewed5.jpg", 
        "/hotstar/most-viewed13.jpg", 
        "/hotstar/most-viewed6.jpg", 
        "/hotstar/most-viewed8.jpeg", 
        "/hotstar/most-viewed10.jpeg", 
        "/hotstar/most-viewed12.jpg"
,
       
      ],
      

    };
  },
  methods: {
    // openYouTubeVideo() {
    //   const videoId = "u3V5KDHRQvk";
    //   const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    //   window.open(youtubeUrl, "_blank");
    // },
   
  },
};
</script>

<style scoped>
@import "./style/hotstar\ style.css";
</style>
