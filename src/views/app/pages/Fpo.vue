<template>
  <div class="fpo-page">
    <h1 class="page-title">FPO Page</h1>
    <ul class="fpo-list">
      <li v-for="fpo in fpos" :key="fpo.id" class="fpo-item">
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
  
  <style>
  .fpo-page {
    font-family: Arial, sans-serif;
    margin: 20px;
  }
  
  .page-title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .fpo-list {
    list-style: none;
    padding: 0;
  }
  
  .fpo-item {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 4px;
    transition: background-color 0.2s;
    cursor: pointer;
  }
  
  .fpo-item:hover {
    background-color: #e0e0e0;
  }
  </style>