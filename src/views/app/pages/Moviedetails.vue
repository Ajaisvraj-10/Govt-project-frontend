<template>
  <div class="ironman-main-div">
    <div class="ironman-div">
      <img
        class="ironman"
        src="/hotstar/movie-poster3.jpg"
        alt="Iron Man Poster"
      />
      <div class="movie-details-info">
        <h1 class="iman-pster">Theatrical release poster</h1>
        <button class="iman-btn" @click="openYouTubeVideo">
          Watch Trailer
        </button>
        <div class="details-section">
          <h1 class="drct">Directed by: Shane Black</h1>
          <h1 class="drct5">Starring:</h1>
          <ul class="actor-list">
            <li>Robert Downey Jr.</li>
            <li>Gwyneth Paltrow</li>
            <li>Don Cheadle</li>
            <li>Guy Pearce</li>
            <li>Rebecca Hall</li>
            <li>Stéphanie Szostak</li>
            <li>James Badge Dale</li>
            <li>William Sadler</li>
            <li>Miguel Ferrer</li>
            <li>Jon Favreau</li>
            <li>Ben Kingsley</li>
          </ul>
          <h2 class="drct2">Screenplay by: Shane Black & Drew Pearce</h2>
          <h2 class="drct3">Cinematography: John Toll</h2>
          <h2 class="drct4">Music by: Brian Tyler</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openYouTubeVideo() {
      const videoId = "Ke1Y3P9D0Bc";
      const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
      window.open(youtubeUrl, "_blank");
    },
  },
};
</script>
