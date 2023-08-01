<template>
  <div>
    <h1>Blog List</h1>

    <!-- Filter buttons -->
    <div>
      <button @click="filterByCategory(null)">All</button>
      <button v-for="category in categories" :key="category.id" @click="filterByCategory(category.id)">
        {{ category.name }}
      </button>
      <br />
      <button @click="showModal = true">Add Blog</button>
    </div>
    <br /><br />

    <!-- Filter by date -->
    <input type="date" v-model="selectedDate" @input="filterByDate" />

    <!-- Blogs cards -->
    <div class="blog-cards">
      <div v-for="blog in filteredBlogs" :key="blog.id" class="blog-card">
        <h2>{{ blog.name }}</h2>
        <p>{{ blog.description }}</p>
        <img :src="blog.image" alt="Blog Image">
        <p>Category: {{ getCategoryName(blog.category) }}</p>

        <!-- Edit and Delete buttons -->
        <div>
          <button @click="editBlog(blog)">Edit</button>
          <button @click="deleteBlog(blog.id)">Delete</button>
        </div>
      </div>
    </div>

    <b-modal v-model="showModal" @ok="editingBlog ? updateBlog : addBlog" @cancel="resetModal">
      <form id="formgrp" @submit.prevent="editingBlog ? updateBlog : addBlog">
        <div class="form-group">
          <label for="blogName">Blog Name:</label>
          <input type="text" id="blogName" name="name" class="form-control" v-model="newBlog.name" />
        </div>

        <div class="form-group">
          <label for="blogDescription">Blog Description:</label>
          <textarea id="blogDescription" name="description" class="form-control" v-model="newBlog.description"></textarea>
        </div>

        <div class="form-group">
          <label for="blogImage">Image:</label>
          <input type="file" id="blogImage" name="image" class="form-control-file" @change="onFileChange" />
        </div>

        <div class="form-group">
          <label for="blogCategory">Category:</label>
          <select id="blogCategory" name="category" class="form-control" v-model="newBlog.category">
            <option value="" disabled>Select a category</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
        </div>

        <button type="submit">{{ editingBlog ? 'Update' : 'Add' }}</button>
      </form>
    </b-modal>
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
        id: null,
        name: '',
        description: '',
        image: null,
        category: null,
      },
      showModal: false,
      editingBlog: false,
    };
  },
   mounted() {
     this.fetchBlogs()
     this.fetchCategories()
  },
  methods: {
    fetchBlogs() {
      
      var headers = new Headers();
      fetch('http://127.0.0.1:8000/blogs/', {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        this.blogs = jsonData
      })
    },
    fetchCategories() {
  
      var headers = new Headers();
      fetch('http://127.0.0.1:8000/categories/', {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        this.categories = jsonData
      })
    },
    filterByCategory(categoryId) {
      if (categoryId === null) {
        this.selectedCategory = null;
        this.filteredBlogs = this.blogs;
      } else {
        this.selectedCategory = categoryId;
        this.filteredBlogs = this.blogs.filter((blog) => blog.category === categoryId);
      }
    },
    filterByDate() {
      
      // const selectedDate = new Date(this.selectedDate).toISOString().split('T')[0];
      // if (selectedDate === '') {
      //   this.filteredBlogs = this.blogs;
      // } else {
      //   //error line 133
      //   this.filteredBlogs = this.blogs.filter((blog) => blog.created_at.split('T')[0] === selectedDate);    
      // }
    },
    onFileChange(event) {
      
      const selectedFile = event.target.files[0];
      this.newBlog.image = selectedFile;
    },
   
     addBlog() {
      var formdata = new FormData(document.getElementById('formgrp'))
      var headers = new Headers();
      fetch('http://127.0.0.1:8000/blogs/', {
          method : 'POST',
          body : formdata,
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        alert('ok')
        if(jsonData.id>0){
          this.filteredBlogs.push(jsonData);
          this.resetNewBlog();
          this.showModal = false;
        }else{
          alert('Something Wrong!')
        }
      })
      
    },
     updateBlog() {
      var formdata = new FormData(document.getElementById('formgrp'))
      var headers = new Headers();
      fetch('http://127.0.0.1:8000/blogs/'+this.newBlog.id, {
          method : 'POST',
          body : formdata,
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        if(jsonData.id>0){
          this.resetNewBlog();
          this.showModal = false;
          this.editingBlog = false;
        }else{
          alert('Something Wrong!')
        }
      })
    },
     editBlog(blog) {
      this.newBlog = {
        id: blog.id,
        name: blog.name,
        description: blog.description,
        image: null,
        category: blog.category,
      };
      this.showModal = true;
      this.editingBlog = true;
    },
     deleteBlog(blogId) {
      var headers = new Headers();
      fetch('http://127.0.0.1:8000/blogs/'+blogId, {
          method : 'DELETE',
          headers: headers,
      })
      .then((response) => {
          if(response.status==200){
            this.fetchBlogs();
          }else{
            alert('Something Wrong!')
          }
      })
    },
    getCategoryName(categoryId) {
      const category = this.categories.find((c) => c.id === categoryId);
      return category ? category.name : '';
    },
    resetModal() {
      this.showModal = false;
      this.editingBlog = false;
    },
    resetNewBlog() {
      this.newBlog = {
        id: null,
        name: '',
        description: '',
        image: null,
        category: null,
      };
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
