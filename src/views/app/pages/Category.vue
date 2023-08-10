<template>
  <div class="add-category">
    <h1>Add Category</h1>
    <form @submit.prevent="addCategory" class="category-form">
      <label for="name">Category Name:</label>
      <input type="text" id="name" v-model="categoryName" required />

      <button type="submit">Add Category</button>
    </form>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <hr />

    <h2>Added Categories</h2>
    <ul class="category-list">
      <li v-for="category in categories" :key="category.id" class="category-item">
        {{ category.name }}
      </li>
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
  <style scoped>
  .add-category {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .category-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .label {
    margin-bottom: 5px;
  }
  
  input[type="text"] {
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
  
  .category-list {
    list-style-type: none;
    padding: 0;
  }
  
  .category-item {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 5px;
  }
  </style>