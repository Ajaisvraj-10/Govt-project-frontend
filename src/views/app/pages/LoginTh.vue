<template>
  <section class="login-section">
    <div class="form-box">
      <div class="form-value">
        <div class="form-login">
        <form>
          <div><h2 class="login-h">Login</h2></div>
          <div class="inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" required>
            <label for="">Email</label>
          </div>
          <div class="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password"  required>
            <label for="">Password</label>
          </div>
          <div class="forget">
            <label>
              <input type="checkbox"> Remember me
            </label>
            <label>
              <a href="#">Forgot password?</a>
            </label>
          </div>
          <button class="login-btn">Log in</button>
          <div class="register">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
      </div>
    </div>
  </section>
</template>

<!-- <script>
// import { IonIcon } from "vue-ionicons"; // Import IonIcon component

export default {
  components: {
    IonIcon // Register IonIcon component
  },
  data() {
    return {
      email: "",
      password: "",
      remember: false
    };
  },
  methods: {
    login() {
      // Implement your login logic here
      console.log("Logging in...");
    }
  }
};
</script> -->

<style scoped>
@import "./style/loginth\ style.css";

</style>
