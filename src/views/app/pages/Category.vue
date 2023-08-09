<template>
    <div>
      <h1>Add Category</h1>
      <form @submit.prevent="addCategory">
        <label for="name">Category Name:</label>
        <input type="text" id="name" v-model="categoryName" required />
  
        <button type="submit">Add Category</button>
      </form>
      <p v-if="successMessage">{{ successMessage }}</p>
      <p v-if="errorMessage">{{ errorMessage }}</p>
  
      <h2>Added Categories</h2>
      <ul>
        <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
      </ul>
    </div>
  </template>
  

  <script>
  export default {
    data() {
      return {
        categoryName: "",
        successMessage: "",
        errorMessage: "",
        categories: [] 
      };
    },
    created() {
      this.fetchCategories(); 
    },
    methods: {
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
      async addCategory() {
        try {
          const response = await fetch("http://127.0.0.1:8000/api/cropscategory/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: this.categoryName
            })
          });
  
          if (response.ok) {
            this.successMessage = "Category added successfully!";
            this.categoryName = ""; 
            this.fetchCategories(); 
          } else {
            this.errorMessage = "Failed to add category. Please try again.";
          }
        } catch (error) {
          this.errorMessage = "An error occurred. Please try again later.";
        }
      }
    }
  };
  </script>
  