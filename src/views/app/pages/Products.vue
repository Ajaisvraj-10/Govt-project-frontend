<template>
  <div class="add-product">
    <h1>Add Product</h1>
    <form @submit.prevent="addProduct" class="product-form">
      <label for="name" class="label">Product Name:</label>
      <input type="text" id="name" v-model="productName" />

      <label for="category" class="label">Category:</label>
      <select id="category" v-model="selectedCategory">
        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
      </select>

      <label for="product_type" class="label">Product Type:</label>
      <select id="product_type" v-model="selectedType">
        <option v-for="product_type in productTypes" :key="product_type.id" :value="product_type.id">{{ product_type.name }}</option>
      </select>

      <label for="price" class="label">Price:</label>
      <input type="text" id="price" v-model="productPrice" @input="validatePriceInput" />

      <button type="submit">Add Product</button>
    </form>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <hr />

    <h2>Added Products</h2>
    <ul class="product-list">
      <li v-for="product in products" :key="product.id" class="product-item">
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
        "Content-Type": "application/json" 
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
      this.productPrice = ""; 
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
  .add-product {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .product-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .label {
    margin-bottom: 5px;
  }
  
  input[type="text"], select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  button[type="submit"] {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  
  .success-message {
    color: green;
    font-weight: bold;
  }
  
  .error-message {
    color: red;
    font-weight: bold;
  }
  
  .product-list {
    list-style-type: none;
    padding: 0;
  }
  
  .product-item {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 5px;
  }
  </style>

  
  
  
  
  
  