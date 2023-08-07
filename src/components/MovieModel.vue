<template>
    <div class="modal-overlay" @click="closeModal">
      <div class="modal-content">
        <img :src="movie.poster" alt="Movie Poster">
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.description }}</p>
        <button @click.stop="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['movie'],
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>