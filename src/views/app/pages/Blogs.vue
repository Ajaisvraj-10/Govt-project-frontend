<template>
    <div>
      <h1>Blog List</h1>
  
      <!-- Filter buttons -->
      <div>
        <button @click="filterByCategory(null)">All</button>
        <button v-for="category in categories" :key="category.id" @click="filterByCategory(category.id)">
          {{ category.name }}
        </button><br>
        <button @click="showModal = true">Add Blog</button>

      </div><br><br>
  
      <!-- Filter by date -->
      <input type="date" v-model="selectedDate" @input="filterByDate" />
  
      <!-- Blogs cards -->
      <div class="blog-cards">
        <div v-for="blog in filteredBlogs" :key="blog.id" class="blog-card">
          <h2>{{ blog.name }}</h2>
          <p>{{ blog.description }}</p>
          <img :src="blog.image" alt="Blog Image">
          <p>Category: {{ blog.category }}</p>

<div>
            
    <b-modal v-model="showModal" @ok="addBlog" @cancel="resetModal">
    <h2>Add New Blog</h2>

    <div class="form-group">
      <label for="blogName">Blog Name:</label>
      <input type="text" id="blogName" class="form-control" v-model="newBlog.name" />
    </div>

    <div class="form-group">
      <label for="blogDescription">Blog Description:</label>
      <textarea id="blogDescription" class="form-control" v-model="newBlog.description"></textarea>
    </div>

    <div class="form-group">
      <label for="blogImage">Image:</label>
      <input type="file" id="blogImage" class="form-control-file" @change="onFileChange" />
    </div>

    <div class="form-group">
        <label for="blogCategory">Category:</label>
        <select id="blogCategory" class="form-control" v-model="newBlog.category">
          <option value="" disabled>Select a category</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
  </b-modal>
</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        blogs: [],
        categories: [],
        filteredBlogs: [],
        selectedCategory: null,
        selectedDate: '',
        newBlog: {
        name: '',
        description: '',
        image: null ,
        category: null,
      },
      showModal: false 
      };
    },
    async mounted() {
      await this.fetchBlogs();
      await this.fetchCategories();
    },
    methods: {
      async fetchBlogs() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/blogs/');
          this.blogs = response.data;
          this.filteredBlogs = this.blogs;
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      },
      async fetchCategories() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/categories/');
          this.categories = response.data;
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      },
      filterByCategory(categoryId) {
        if (categoryId === null) {
          this.selectedCategory = null;
          this.filteredBlogs = this.blogs;
        } else {
          this.selectedCategory = categoryId;
          this.filteredBlogs = this.blogs.filter(blog => blog.category === categoryId);
        }
      },
      filterByDate() {
        const selectedDate = new Date(this.selectedDate).toISOString().split('T')[0];
        if (selectedDate === '') {
          this.filteredBlogs = this.blogs;
        } else {
          this.filteredBlogs = this.blogs.filter(blog => blog.date.split('T')[0] === selectedDate);
        }
      },
      onFileChange(event) {
      const selectedFile = event.target.files[0];
      this.newBlog.image = selectedFile;
    },
    async addBlog() {
      try {
        const formData = new FormData();
        formData.append('name', this.newBlog.name);
        formData.append('description', this.newBlog.description);
        formData.append('image', this.newBlog.image);
        formData.append('category', this.newBlog.category); // Add category to the formData

        const response = await axios.post('http://127.0.0.1:8000/blogs/', formData);

        // Fetch the updated blogs list after adding a new blog
        await this.fetchBlogs();

        this.newBlog = {
          name: '',
          description: '',
          image: null,
          category: null,
        };

        this.showModal = false;
      } catch (error) {
        console.error('Error adding blog:', error);
      }
    },
  },
};
</script>
  
  <style>
  .blog-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .filter-buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  button {
    margin: 5px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  input {
    margin: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .blog-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .blog-card {
    width: 300px;
    margin: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .blog-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .blog-category {
    margin-top: 10px;
    font-weight: bold;
  }
  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type="text"],
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  input[type="file"] {
    display: block;
    margin-top: 5px;
  }

  .form-control-file {
    width: 100%;
  }

  .btn {
    margin-top: 10px;
  }
  </style>