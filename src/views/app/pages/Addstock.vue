<template>
  <div>
    <h2>Farmer Plants</h2>
    <label for="selectedFarmer">Select Farmer:</label>
    <select
      id="selectedFarmer"
      v-model="selectedFarmer"
      @change="fetchFarmerPlants"
    >
      <option v-for="farmer in farmers" :key="farmer.id" :value="farmer.id">{{
        farmer.name
      }}</option>
    </select>
    <button @click="openAddPlantModal">Add New Plant</button>

    <h2>Plants for Selected Farmer</h2>
    <ul class="plant-list">
      <li v-for="plant in farmerPlants" :key="plant.id" class="plant-item">
        <input
          type="checkbox"
          v-model="selectedPlants"
          :value="plant.id"
          @change="openQuantityModal(plant)"
        />
        {{ plant.name }} - Quantity: {{ plant.quantity }}
      </li>
    </ul>

    <b-modal
      id="addPlantModal"
      title="Add New Plant"
      @hidden="closeAddPlantModal"
    >
    <h4>Select Existing Plant:</h4>
      <select v-model="selectedExistingPlant">
        <option v-for="plant in existingPlants" :key="plant.id" :value="plant.id">
          {{ plant.name }}
        </option>
      </select>
      <button @click="addExistingPlant">Add Plant</button>
    </b-modal>

    <b-modal
  id="quantityModal"
  title="Edit Plant Products"
  @hidden="closeQuantityModal"
>
  <p>{{ selectedPlant.name }}</p>
  <h4>Edit Products:</h4>
  <ul>
    <li v-for="product in selectedPlant.products" :key="product.id">
      {{ product.name }} - Price: {{ product.price }}
      <input type="number" v-model="product.quantity" />
    </li>
  </ul>
  <button @click="saveProductsQuantity">Save</button>
</b-modal>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      farmers: [],
      selectedFarmer: null,
      farmerPlants: [],
      showAddPlantModal: false,
      showQuantityModal: false,
      newPlantName: "",
      selectedPlants: [],
      selectedPlant: {
        id: null,
        name: "",
        products: [],
      },
      existingPlants: [],
      selectedExistingPlant: null,
    };
  },
  async mounted() {
    await this.fetchFarmers();
    await this.fetchExistingPlants();
  },
  methods: {
    async fetchExistingPlants() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/cropsplant/");
        this.existingPlants = response.data;
      } catch (error) {
        console.error("Error fetching existing plants:", error);
      }
    },
    
    async fetchFarmers() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/farmers/");
        this.farmers = response.data;
      } catch (error) {
        console.error("Error fetching farmers:", error);
      }
    },
    async fetchFarmerPlants() {
  try {
    if (this.selectedFarmer) {
      const response = await axios.get(`http://127.0.0.1:8000/api/cropsplant/?farmer=${this.selectedFarmer}`);
      this.farmerPlants = response.data;

      // Fetch and update products' quantities for each plant
      for (const plant of this.farmerPlants) {
        const productsResponse = await axios.get(`http://127.0.0.1:8000/api/cropsproduct/?plant=${plant.id}`);
        const products = productsResponse.data;

        // Update products' quantities for the plant
        plant.products = products.map(product => ({
          ...product,
          quantity: 0, // Add a quantity property with an initial value of 0
        }));
      }

      console.log('Fetched farmer plants:', this.farmerPlants);
    } else {
      this.farmerPlants = [];
    }
  } catch (error) {
    console.error('Error fetching farmer plants:', error);
  }
},

async fetchPlantProducts(plantId) {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/cropsproduct/?plant=${plantId}`);
      this.selectedPlant.products = response.data.map(product => ({
        ...product,
        quantity: 0, // Add a quantity property with an initial value of 0
      }));
    } catch (error) {
      console.error("Error fetching plant products:", error);
    }
  },

    openAddPlantModal() {
      this.$bvModal.show("addPlantModal");
    },
    closeAddPlantModal() {
      this.$bvModal.hide("addPlantModal");
      this.newPlantName = "";
    },
    async addPlant() {
  try {
    // Fetch the list of categories from the API
    const response = await axios.get("http://127.0.0.1:8000/api/cropscategory/");
    const categories = response.data;
    console.log("Categories:", categories); // Log the categories

    // Rest of the code...
  } catch (error) {
    console.error("Error adding plant:", error);
  }
},






openQuantityModal(plant) {
  this.$bvModal.show("quantityModal");
  this.selectedPlant.id = plant.id;
  this.selectedPlant.name = plant.name;
  this.fetchPlantProducts(plant.id);
},


    closeQuantityModal() {
      this.$bvModal.hide("quantityModal");
      this.selectedPlant.id = null;
      this.selectedPlant.name = "";
      this.selectedPlant.quantity = null;
      
    },
    async saveProductsQuantity() {
  try {
    const requestData = this.selectedPlant.products.map(product => ({
      quantity: product.quantity,
      crops_in_farmer: this.selectedFarmer,
      product: product.id,
    }));

    await Promise.all(requestData.map(data =>
      axios.post(`http://127.0.0.1:8000/api/cropsproduct_stock/`, data)
    ));

    this.closeQuantityModal();
    this.fetchFarmerPlants();
  } catch (error) {
    console.error('Error updating quantities:', error);
  }
},



  },
};
</script>

<style>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
