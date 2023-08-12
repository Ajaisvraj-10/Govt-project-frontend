<template>
    <div class="home-page">
      <div class="background"></div>
      <div class="content">
        <h1>Welcome to Our OTT Platform</h1>
        <p>Stream your favorite movies, TV shows, and more!</p>
        <button @click="explore">Explore</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Otthome',
    methods: {
      explore() {
        console.log('Navigating to explore page');
      }
    }
  }
  </script>
  
  <style scoped>
   @import "./style/otthome\ style.css";

  </style>
  