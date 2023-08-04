<template>
  <div class="aeo-page">
    <h1 class="page-title">AEO</h1>
    <form @submit.prevent="addAEO" class="aeo-form">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" v-model="name" required>
      <br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" v-model="email" required>
      <br><br>
      <label for="phone">Phone:</label>
      <input type="text" id="phone" name="phone" v-model="phone" required>
      <br><br>
      <label for="fpo">FPO:</label>
      <select id="fpo" name="fpo" v-model="fpo" required>
        <option v-for="fpo in fpoList" :key="fpo.id" :value="fpo.id">{{ fpo.name }}</option>
      </select>
      <br><br>
      <button type="submit" class="submit-button">Add AEO</button>
    </form>
    <div v-for="aeo in aeoList" :key="aeo.id" class="aeo-item">
      <h2>{{ aeo.name }}</h2>
      <p>Email: {{ aeo.email }}</p>
      <p>Phone: {{ aeo.phone }}</p>
      <p>FPO: {{ aeo.fpo.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AeoPage',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      fpo: null,
      fpoList: [],
      aeoList: [],
    };
  },
  async mounted() {
    await this.fetchFPOData();
    await this.fetchAEOData();
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
    async fetchAEOData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/aeos/');
        this.aeoList = response.data;
      } catch (error) {
        console.error('Error fetching AEO data:', error);
      }
    },
    async addAEO() {
      try {
        await axios.post('http://127.0.0.1:8000/api/aeos/', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          fpo: this.fpo,
        });
        this.name = '';
        this.email = '';
        this.phone = '';
        this.fpo = null;
        await this.fetchAEOData();
      } catch (error) {
        console.error('Error adding AEO:', error);
      }
    },
  },
};
</script>

<style>
.aeo-page {
  font-family: Arial, sans-serif;
  margin: 50px;
  text-align: start;
}

.page-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.aeo-form {
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

.aeo-item {
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
  