<template>
  <div class="login-p">
    <h1 v-if="!isAuthenticated">Login</h1>
    <h1 v-else>Welcome, User!</h1>
    <div v-if="!isAuthenticated">
      <h1 class="login-page">Login</h1>
      <form class="login-page" @submit.prevent="login">
        <label for="name">Username:</label>
        <input type="text" id="name" name="name" v-model="username" required>
        <br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" v-model="password" required>
        <br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="email" required>
        <br><br>
        <button type="submit">Login</button>
      </form>
    </div>
    <button class="lg-button" v-if="isAuthenticated" @click="logout">Logout</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      password: '',
      email: '',
    };
  },
  computed: {
    isAuthenticated() {
      // Retrieve the authentication status from localStorage
      return localStorage.getItem('isAuthenticated') === 'true';
    },
  },
  methods: {
    async login() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/usersusers/', {
          username: this.username,
          password: this.password,
          email: this.email,
        });

        const token = response.data.access;

        // Save the token to localStorage
        localStorage.setItem('isAuthenticated', 'true');

        // Redirect to home page
        this.$router.push('/home');
      } catch (error) {
        alert('Invalid credentials');
      }
    },
    logout() {
      // Remove the authentication status from localStorage
      localStorage.removeItem('isAuthenticated');

      // Redirect to login page
      this.$router.push('/login');
    },
  },
};
</script>



<style>
.login-page{
  text-align: center;
}
.login-p{
  text-align: center;
}.lg-button{
  background-color: cadetblue;
    margin-top: 10px;
    text-align: right;
    border-radius: 8px;
}
</style>