<template >
  <header>
    <div class="flex-align2">
      <div class="logo">
        <img src="https://wac-cdn.atlassian.com/dam/jcr:c942540c-53ae-4357-bffa-ed37739d71b0/bitbucket-atlassian-logo.svg?cdnVersion=1039" loading="lazy" height="35px" alt="logo" class="imkt-navbar__title-logo">
      </div>
      <!-- <ul>
        <li>Completed Task</li>
        <li>List</li>
        <li>Block</li>
      </ul> -->
    </div>
    <button>Login</button>
  </header>
</template>
<script>

export default {
  data() {
    return {
      background_start:true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    var self = this
    document.getElementsByClassName("main-feed")[0].addEventListener("scroll", () => {
        self.handleScroll()
    });
  },
  methods:{
    handleScroll () {
      const currentScrollPosition = document.getElementsByClassName("main-feed")[0]
          .scrollTop
      if (currentScrollPosition < 0) {
        return 0
      }
      this.background_start = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
  }
};
</script>
<style scoped>

@import '../style/style.css';
  
</style>
