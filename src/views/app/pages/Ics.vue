<template>
    <div class="ics-page">
      <h1 class="page-title">ICS</h1>
      <form @submit.prevent="addICS" class="ics-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" v-model="name" required>
        <br><br>
        <label for="register_date">Register Date:</label>
        <input type="date" id="register_date" name="register_date" v-model="registerDate" required>
        <br><br>
        <label for="fpo">FPO:</label>
        <select id="fpo" name="fpo" v-model="fpo" required>
          <option v-for="fpo in fpoList" :key="fpo.id" :value="fpo.id">{{ fpo.name }}</option>
        </select>
        <br><br>
        <button type="submit" class="submit-button">Add ICS</button>
      </form>
      <h2>Applied List</h2>
      <div v-for="ics in icsList" :key="ics.id" class="ics-item">
        <h2>{{ ics.name }}</h2>
        <p>Register Date: {{ ics.register_date }}</p>
        <p>FPO: {{ ics.fpo.name }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'IcsPage',
    data() {
      return {
        name: '',
        registerDate: '',
        fpo: null,
        fpoList: [],
        icsList: [],
      };
    },
    async mounted() {
      await this.fetchFPOData();
      await this.fetchICSData();
    },
    methods: {
      async fetchFPOData() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/fpos/');
          this.fpoList = response.data;
        } catch (error) {
          console.error('Error fetching FPO data:', error);
        }
      },
      async fetchICSData() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/ics/');
          this.icsList = response.data;
        } catch (error) {
          console.error('Error fetching ICS data:', error);
        }
      },
      async addICS() {
        try {
          await axios.post('http://127.0.0.1:8000/api/ics/', {
            name: this.name,
            register_date: this.registerDate,
            fpo: this.fpo,
          });
          this.name = '';
          this.registerDate = '';
          this.fpo = null;
          await this.fetchICSData();
        } catch (error) {
          console.error('Error adding ICS:', error);
        }
      },
    },
  };
  </script>
  
  <style>
.ics-page {
  font-family: Arial, sans-serif;
  margin: 20px;
}

.page-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.ics-form {
  margin-bottom: 20px;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

.ics-item {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}
#fpo{
    border-top-color: #2863cc;
    border-bottom-color: #2863cc;
    border-spacing: unset;
    border-radius: 10px;
    cursor: pointer;
}
</style>