<template>
    <nav class="navbar">
      <router-link to="/fpos">FPO</router-link>
      <router-link to="/aeos">AEO</router-link>
      <router-link to="/ics">ICS</router-link>
      <router-link to="/vfcs">VFC</router-link>
      <router-link to="/farmers">Farmers</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 12px 147px; 
    background-color: #333;
    color: white;
  }
  
  .router-link {
    text-decoration: none;
    color: white;
    padding: 5px 10px; 
  }
  
  .router-link:hover {
    background-color: #ffffff;
  }
  </style>
  