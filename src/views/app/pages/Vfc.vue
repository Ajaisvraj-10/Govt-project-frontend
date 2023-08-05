<template>
    <div class="vfc-page">
      <h1>VFC</h1>
      <form @submit.prevent="addVFC">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name">
        <br><br>
        <label for="fpo">FPO:</label>
        <select id="fpo" name="fpo" v-model="fpo">
          <option v-for="fpo in fpoList" :key="fpo.id" :value="fpo.id">{{ fpo.name }}</option>
        </select>
        <br><br>
        <label for="ics">ICS:</label>
      <select id="ics" name="ics" v-model="ics" multiple required>
        <option v-for="icsItem in icsList" :value="icsItem.id" :key="icsItem.id">{{ icsItem.name }}</option>
      </select>
        <br><br>
        <label for="aeo">AEO:</label>
        <select id="aeo" name="aeo" v-model="aeo">
          <option v-for="aeoItem in aeos" :key="aeoItem.id" :value="aeoItem.id">{{ aeoItem.name }}</option>
        </select>
        <br><br>
        <label for="country">Country:</label>
<input type="text" id="country" name="country" v-model="location.country">
<br><br>
<label for="state">State:</label>
<input type="text" id="state" name="state" v-model="location.state">
<br><br>
<label for="district">District:</label>
<input type="text" id="district" name="district" v-model="location.district">
<br><br>
<label for="panchayats">Panchayats:</label>
<input type="text" id="panchayats" name="panchayats" v-model="location.panchayats">
<br><br>
<label for="revenue_village">Revenue Village:</label>
<input type="text" id="revenue_village" name="revenue_village" v-model="location.revenue_village">
<br><br>
<label for="local_village">Local Village:</label>
<input type="text" id="local_village" name="local_village" v-model="location.local_village">
<br><br>
        <button type="submit">Add VFC</button>
      </form>
      <div v-for="vfc in vfcList" :key="vfc.id" class="vfc-item">
        <h2>{{ vfc.name }}</h2>
      <p>FPO: {{ vfc.fpo.name }}</p>
      <p>Location: {{ getLocationString(vfc.location) }}</p>
      <p>ICS: {{ getSelectedICS(vfc.ics) }}</p>
      <p>AEO: {{ getSelectedAEO(vfc.aeo) }}</p>
    </div>
    </div>
  </template>   
  
  <script>
  import axios from 'axios';
  
  export default {
  name: 'VfcPage',
  data() {
    return {
      name: '',
      fpo: '',
      aeo: '',
      ics: [],
      location: {
      country: '',
      state: '',
      district: '',
      panchayats: '',
      revenue_village: '',
      local_village: '',
    },
      fpoList: [],
      icsList: [],
      vfcList: [],
      aeos: [],
    };
  },
    mounted() {
       this.fetchVFCData();
       this.fetchFPOData();
       this.fetchAEOData();
       this.fetchICSData();
        
        
    },
    methods: {
        async fetchVFCData() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/vfcs/');
          this.vfcList = response.data;
        } catch (error) {
          console.error('Error fetching ICS data:', error);
        }
      },
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
    this.aeos = response.data; 
  } catch (error) {
    console.error('Error fetching AEO data:', error);
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
    async addVFC() {
  try {
    const requestData = {
      name: this.name,
      fpo: this.fpo,
      ics: [...this.ics], // Clone the array
      aeo: this.aeo,
      location: {
        country: this.location.country,
        state: this.location.state,
        district: this.location.district,
        local_village: this.location.local_village,
        panchayats: this.location.panchayats,
        revenue_village: this.location.revenue_village,
      },
      // ... other fields ...
    };

    const response = await axios.post('http://127.0.0.1:8000/api/vfcs/', requestData);

    // ... handle response ...

  } catch (error) {
    console.error(error);
  }
},




    getSelectedICS(icsIds) {
      const selectedICS = this.icsList.filter(item => icsIds.includes(item));
      return selectedICS.map(item => item.name).join(', ');
},


    getSelectedAEO(aeoId) {
      const selectedAEO = this.aeos.find(item => item.id === aeoId);
      return selectedAEO ? selectedAEO.name : '';
    },

    getLocationString(location) {
      return `${location.country}, ${location.state}, ${location.district}, ${location.panchayats}, ${location.revenue_village}, ${location.local_village}`;
    },

    },
    
  };
  </script>
  
  <style>
.vfc-page {
  font-family: Arial, sans-serif;
  margin: 20px;
}

.vfc-form {
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

.vfc-item {
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
#ics{
    border-top-color: #2863cc;
    border-bottom-color: #2863cc;
    border-spacing: unset;
    border-radius: 10px;
    cursor: pointer;
}
</style>
  
  