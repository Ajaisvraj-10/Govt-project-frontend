<template>
  <div>
    <h1>Blog List</h1>

    <!-- Filter buttons -->
    <div class="filter-buttons">
      <button @click="filterByCategory(null)">All</button>
      <button
        v-for="category in categories"
        :key="category.id"
        @click="filterByCategory(category.id)"
      >
        {{ category.name }}
      </button>
      <br />
      <button @click="showModal = true">Add Blog</button>
    </div>
    <br /><br />

    <!-- Filter by date -->
    <input type="date" v-model="selectedDate" @change="filterByDate" />

    <!-- Blogs cards -->
    <div class="blog-cards">
      <div v-for="blog in filteredBlogs" :key="blog.id" class="blog-card">
        <h2>{{ blog.name }}</h2>
        <p>{{ blog.description }}</p>
        <img :src="blog.image" alt="Blog Image" class="blog-image" />
        <p>Category: {{ getCategoryName(blog.category) }}</p>
        <p>Created: {{ blog.created_at }}</p>

        <!-- Tags input while viewing a blog -->
        <div>
      <label for="selectTag">Select Tags:</label>
      <select id="selectTag" v-model="selectedTag">
        <option value="" disabled>Select a tag</option>
        <option v-for="tag in tags" :key="tag.id" :value="tag.id">{{ tag.name }}</option>
      </select>
      <button @click="addSelectedTag()">Add Tag</button>
    </div>
    

        <!-- Edit and Delete buttons -->
        <div>
          <button @click="editBlog(blog)">Edit</button>
          <button @click="deleteBlog(blog.id)">Delete</button>
        </div>
      </div>
    </div>

    <!-- Add/Edit Blog Modal -->
    <b-modal
      v-model="showModal"
      @ok="editingBlog ? updateBlog() : addBlog()"
      @cancel="resetModal"
    >
      <form
        id="formgrp"
        @submit.prevent="editingBlog ? updateBlog() : addBlog()"
      >
        <div class="form-group">
          <label for="blogName">Blog Name:</label>
          <input
            type="text"
            id="blogName"
            name="name"
            class="form-control"
            v-model="newBlog.name"
          />
        </div>

        <div class="form-group">
          <label for="blogDescription">Blog Description:</label>
          <textarea
            id="blogDescription"
            name="description"
            class="form-control"
            v-model="newBlog.description"
          ></textarea>
        </div>

        <div class="form-group">
          <label for="blogImage">Image:</label>
          <input type="file" @change="onFileChange">

        </div>

        <div class="form-group">
          <label for="blogCategory">Category:</label>
          <select
            id="blogCategory"
            name="category"
            class="form-control"
            v-model="newBlog.category"
          >
            <option value="" disabled>Select a category</option>
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
              >{{ category.name }}</option
            >
          </select>
        </div>
        <div class="form-group">
          <label for="blogDate">Date:</label>
          <input
            type="date"
            id="blogDate"
            name="created_at"
            class="form-control"
            v-model="newBlog.created_at"
          />
        </div>

        <!-- Tags input -->
        <div>
      <label for="selectTag">Select Tags:</label>
      <select id="selectTag" v-model="selectedTag">
        <option value="" disabled>Select a tag</option>
        <option v-for="tag in tags" :key="tag.id" :value="tag.id">{{ tag.name }}</option>
      </select>
      <button @click="addSelectedTag()">Add Tag</button>
    </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
  blogs: [],
  categories: [],
  filteredBlogs: [],
  selectedCategory: null,
  selectedDate: "",
  newBlog: {
    id: null,
    name: "",
    description: "",
    image: null,
    category: null,
    created_at: null,
  },
  showModal: false,
  editingBlog: false,
  selectedFile: null,
  tags: [],
  selectedTag: [], // Change this line to initialize as an empty array
};

  },
  mounted() {
    this.fetchBlogs();
    this.fetchCategories();
    this.fetchTags();
  },
  methods: {
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async fetchBlogs() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/blogs/");
        this.blogs = response.data;
        this.filteredBlogs = this.blogs;
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    },
    async fetchCategories() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/categories/");
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    filterByCategory(categoryId) {
      if (categoryId === null) {
        this.selectedCategory = null;
        this.filteredBlogs = this.blogs;
      } else {
        this.selectedCategory = categoryId;
        this.filteredBlogs = this.blogs.filter(
          (blog) => blog.category === categoryId
        );
      }
    },
    filterByDate() {
      if (this.selectedDate === "") {
        this.filteredBlogs = this.blogs; // Show all blogs when date is not selected
      } else {
        const selectedDate = new Date(this.selectedDate)
          .toISOString()
          .split("T")[0];
        this.filteredBlogs = this.blogs.filter((blog) => {
          const blogDate = new Date(blog.created_at)
            .toISOString()
            .split("T")[0];
          return blogDate === selectedDate;
        });
      }
    },
    addSelectedTag() {
  if (!this.selectedTag) {
    return;
  }

  const tagToAdd = this.tags.find((tag) => tag.id === this.selectedTag);
  if (tagToAdd && !this.newBlog.tags.some((tag) => tag.id === tagToAdd.id)) {
    this.newBlog.tags.push(tagToAdd);
    this.selectedTag = null;
  }
},


  async fetchTags() {
  try {
    const response = await axios.get("http://127.0.0.1:8000/tags/");
    this.tags = response.data;
  } catch (error) {
    console.error("Error fetching tags:", error);
  }
},
    showAddConfirmation() {
      if (window.confirm("Are you sure you want to add this blog?")) {
        this.addBlog();
      }
    },
    async addBlog() {
  if (!this.selectedFile) {
    alert("Please select an image.");
    return;
  }

  const tagIds = this.newBlog.tags.map((tag) => tag.id);
  const formData = new FormData();
  formData.append("name", this.newBlog.name);
  formData.append("description", this.newBlog.description);
  formData.append("image", this.selectedFile);
  formData.append("category", this.newBlog.category);
  formData.append("created_at", this.newBlog.created_at);

  // Append each tag ID separately
  tagIds.forEach((tagId) => {
    formData.append("tags", tagId);
  });

  try {
    const response = await axios.post("http://127.0.0.1:8000/blogs/", formData);
    if (response.data.id > 0) {
      this.filteredBlogs.push(response.data);
      this.resetNewBlog();
      this.showModal = false;
    } else {
      alert("Something went wrong while adding the blog.");
    }
  } catch (error) {
    console.error("Error adding blog:", error);
  }
},


async editBlog(blog) {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/blogs/${blog.id}/`
    );
    const editedBlog = response.data;
    this.editingBlog = true;
    this.showModal = true;
    this.newBlog = {
      id: editedBlog.id,
      name: editedBlog.name,
      description: editedBlog.description,
      image: null,
      category: editedBlog.category.id,
      created_at: editedBlog.created_at,
      tags: editedBlog.tags || [], // Set tags to an empty array if not provided
    };
  } catch (error) {
    console.error("Error fetching blog for editing:", error);
  }
},

async updateBlog() {
  const tagIds = this.newBlog.tags.map((tag) => tag.id); // Get tag IDs
  const formData = new FormData(document.getElementById('formgrp'));

  // Remove this line since we will append tags individually
  // formData.append('tags', JSON.stringify(tagIds));

  // Append each tag ID separately
  tagIds.forEach((tagId) => {
    formData.append('tags', tagId);
  });

  try {
    const response = await axios.put(`http://127.0.0.1:8000/blogs/${this.newBlog.id}/`, formData);

    // Update the edited blog in the filteredBlogs array
    const updatedBlog = response.data;
    const index = this.filteredBlogs.findIndex((blog) => blog.id === updatedBlog.id);
    if (index !== -1) {
      this.filteredBlogs[index] = updatedBlog;
    }
  } catch (error) {
    console.error('Error updating blog:', error);
  }
},





    async deleteBlog(blogId) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/blogs/${blogId}/`
        );
        if (response.status === 200) {
          this.fetchBlogs();
        } else {
          alert("Something went wrong while deleting the blog.");
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    },
    getCategoryName(categoryId) {
      const category = this.categories.find((c) => c.id === categoryId);
      return category ? category.name : "";
    },
    resetModal() {
      this.showModal = false;
      this.editingBlog = false;
    },
    resetNewBlog() {
      this.newBlog = {
        id: null,
        name: "",
        description: "",
        image: null,
        category: null,
        created_at: null,
        tags: [],
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
