<template>
    <div class="add-plant">
      <h2>Add Plant</h2>
      <label for="name" class="label">Plant Name:</label>
      <input v-model="plantName" type="text" id="name" class="input" /><br>
  
      <label for="category" class="label">Category:</label>
      <select id="category" v-model="selectedCategory" class="select">
        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
      </select>
  
      <label for="products" class="label">Products:</label>
      <select id="products" v-model="selectedProducts" multiple class="select">
        <option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}</option>
      </select>
  
      <button @click="addPlant" class="button">Add Plant</button>
  
      <hr />
      <h2>Plants</h2>
      <ul class="plant-list">
        <li v-for="plant in plants" :key="plant.id" class="plant-item">{{ plant.name }}</li>
      </ul>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      plantName: "",
      selectedCategory: null,
      selectedProducts: [],
      categories: [],  
      products: []     
    };
  },
  methods: {
    async addPlant() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/cropsplant/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: this.plantName,
            category: this.selectedCategory,
            products: this.selectedProducts
          })
        });

        if (response.ok) {
          
        } else {
          
        }
      } catch (error) {
        
      }
    },
    async fetchPlants() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/cropsplant/");
        const data = await response.json();
        this.plants = data;
      } catch (error) {
        
      }
    },
    async fetchCategories() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/cropscategory/");
        const data = await response.json();
        this.categories = data;
      } catch (error) {
        
      }
    },
    async fetchProducts() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/cropsproduct/");
        const data = await response.json();
        this.products = data;
      } catch (error) {
      
      }
    }
  },
  created() {
    this.fetchCategories();
    this.fetchProducts();
    this.fetchPlants();
  }
};
</script>


<style scoped>
.add-plant {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.label {
  margin-bottom: 5px;
}

.input, .select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.select {
  width: 100%;
}

.button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}

.plant-list {
  list-style-type: none;
  padding: 0;
}

.plant-item {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 5px;
}
</style>