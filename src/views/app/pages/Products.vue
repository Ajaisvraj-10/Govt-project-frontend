<template>
    <div>
      <h1>Add Product</h1>
      <form @submit.prevent="addProduct">
        <label for="name">Product Name:</label>
        <input type="text" id="name" v-model="productName"  />
  
        <label for="category">Category:</label>
        <select id="category" v-model="selectedCategory" >
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
  
        <label for="product_type">Product Type:</label>
        <select id="product_type" v-model="selectedType" >
          <option v-for="product_type in productTypes" :key="product_type.id" :value="product_type.id">{{ product_type.name }}</option>
        </select>
  
        <label for="price">Price:</label>
        <input type="text" id="price" v-model="productPrice" @input="validatePriceInput" />
  
        <button type="submit">Add Product</button>
      </form>
      <p v-if="successMessage">{{ successMessage }}</p>
      <p v-if="errorMessage">{{ errorMessage }}</p>
  
      <h2>Added Products</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ getCategoryName(product.category) }} - {{ getProductTypeName(product.product_type) }} - ₹{{ product.price }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productName: "",
        selectedCategory: null,
        selectedType: null,
        productPrice: null,
        categories: [],
        productTypes: [],
        successMessage: "",
        errorMessage: "",
        products: []
      };
    },
    created() {
      this.fetchCategories();
      this.fetchProductTypes();
      this.fetchProducts();
    },
    methods: {
        validatePriceInput() {
    this.productPrice = this.productPrice.replace(/[^0-9.]/g, "");

    const parts = this.productPrice.split(".");
    if (parts.length > 2) {
      this.productPrice = parts.slice(0, -1).join(".") + parts.slice(-1);
    }

  },
      async fetchCategories() {
        try {
          const response = await fetch("http://127.0.0.1:8000/api/cropscategory/");
          if (response.ok) {
            this.categories = await response.json();
          }
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      },
      async fetchProductTypes() {
        try {
          const response = await fetch("http://127.0.0.1:8000/api/cropsproduct_type/");
          if (response.ok) {
            this.productTypes = await response.json();
          }
        } catch (error) {
          console.error("Error fetching product types:", error);
        }
      },
      async fetchProducts() {
        try {
          const response = await fetch("http://127.0.0.1:8000/api/cropsproduct/");
          if (response.ok) {
            this.products = await response.json();
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      },
      async addProduct() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/cropsproduct/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"  // Set the correct content type
      },
      body: JSON.stringify({
        name: this.productName,
        category: this.selectedCategory,
        product_type: this.selectedType,
        price: this.productPrice
      })
    });

    if (response.ok) {
      this.successMessage = "Product added successfully!";
      this.productName = "";
      this.selectedCategory = null;
      this.selectedType = null;
      this.productPrice = "";  // Reset productPrice to empty string
      this.fetchProducts();
    } else {
      this.errorMessage = "Failed to add product. Please try again.";
    }
  } catch (error) {
    this.errorMessage = "An error occurred. Please try again later.";
  }
},

      getCategoryName(categoryId) {
        const category = this.categories.find(category => category.id === categoryId);
        return category ? category.name : "";
      },
      getProductTypeName(typeId) {
        const product_type = this.productTypes.find(product_type => product_type.id === typeId);
        return product_type ? product_type.name : "";
      }
    }
  };
  </script>
  
  <style scoped>
  </style>

  
  
  
  
  
  