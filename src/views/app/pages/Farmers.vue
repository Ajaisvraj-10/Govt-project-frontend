<template>
    <div class="farmers-page">
      <h1>Farmers</h1>
      <form class="farmer-form" @submit.prevent="addFarmer">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" v-model="newFarmer.name">
        <br>
        <label for="address">Address:</label>
        <textarea id="address" v-model="newFarmer.address"></textarea>
        <br>
        <label for="country">Country:</label>
        <input type="text" id="country" name="country" v-model="newFarmer.country">
        <br>
        <label for="state">State:</label>
        <input type="text" id="state" name="state" v-model="newFarmer.state">
        <br>
        <label for="district">District:</label>
        <input type="text" id="district" name="district" v-model="newFarmer.district">
        <br>
        <label for="panchayats">Panchayats:</label>
        <input type="text" id="panchayats" name="panchayats" v-model="newFarmer.panchayats">
        <br>
        <label for="fpo">FPO:</label>
        <select id="fpo" name="fpo" v-model="newFarmer.fpo">
          <option v-for="fpo in fpos" :value="fpo.id" :key="fpo.id">{{ fpo.name }}</option>
        </select>
        <br>
        <label for="ics">ICS:</label>
        <select id="ics" name="ics" v-model="newFarmer.ics">
          <option v-for="ics in icsList" :value="ics.id" :key="ics.id">{{ ics.name }}</option>
        </select>
        <br>
        <label for="vfc">VFC:</label>
        <select id="vfc" name="vfc" v-model="newFarmer.vfc">
          <option v-for="vfc in vfcList" :value="vfc.id" :key="vfc.id">{{ vfc.name }}</option>
        </select>
        <br>
        <label for="farmer_code">Farmer Code:</label>
        <input type="number" name="farmer_code" id="farmer_code" v-model="newFarmer.farmer_code" required>
        <br>
        <button class="submit-button" type="submit">Add Farmer</button>
      </form>
      
      <h2>Existing Farmers</h2>
      
      <ul class="farmer-list">
        <li v-for="farmer in farmers" :key="farmer.id" class="farmer-item">
          <p class="info-label">{{ farmer.name }} - {{ farmer.address }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        farmers: [],
        fpos: [], 
        icsList: [],
        vfcList: [],
        newFarmer: {
          name: '',
          address: '',
          country: '',
          state: '',
          district: '',
          panchayats: '',
          fpo: '',
          ics: '',
          vfc: '',
          farmer_code: null,
        },
      };
    },
    mounted() {
      this.fetchFarmers();
      this.fetchFPOs();
      this.fetchICSList();
      this.fetchVFCList();
    },
    methods: {
      async fetchFarmers() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/farmers/');
          this.farmers = response.data;
        } catch (error) {
          console.error('Error fetching farmers:', error);
        }
      },
      async fetchFPOs() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/fpos/');
          this.fpos = response.data;
        } catch (error) {
          console.error('Error fetching FPOs:', error);
        }
      },
      async fetchICSList() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/ics/');
          this.icsList = response.data;
        } catch (error) {
          console.error('Error fetching ICS list:', error);
        }
      },
      async fetchVFCList() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/vfcs/');
          this.vfcList = response.data;
        } catch (error) {
          console.error('Error fetching VFC list:', error);
        }
      },
      async addFarmer() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/farmers/', this.newFarmer);
          this.farmers.push(response.data);
          this.resetNewFarmer();
        } catch (error) {
          console.error('Error adding farmer:', error);
        }
      },
      resetNewFarmer() {
        this.newFarmer = {
          name: '',
          address: '',
          country: '',
          state: '',
          district: '',
          panchayats: '',
          fpo: '',
          ics: '',
          vfc: '',
          farmer_code: null,
        };
      },
    },
  };
  </script>
  
  
  
  <style>
  .farmers-page {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .farmer-form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .farmer-form input[type="text"],
  .farmer-form input[type="number"],
  .farmer-form select,
  .farmer-form textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .farmer-form textarea {
    height: 100px;
  }
  
  .submit-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  .farmer-list {
    list-style: none;
    padding: 0;
  }
  
  .farmer-item {
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .info-label {
    font-weight: bold;
  }
  </style>