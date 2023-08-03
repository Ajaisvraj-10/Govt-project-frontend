<template>
    <div class="fpo-page">
      <h1>FPO Page</h1>
      <ul>
        <li v-for="fpo in fpos" :key="fpo.id">
          {{ fpo.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Fpo',
    data() {
      return {
        fpos: [],
      };
    },
    async created() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/fpos/');
        this.fpos = response.data;
      } catch (error) {
        console.error('Error fetching FPOs:', error);
      }
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling for the FPO page here */
  </style>
  