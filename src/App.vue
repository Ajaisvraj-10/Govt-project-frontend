<template>
    <div>
    <!-- <Netflix /> -->
      <!-- <Nav></Nav> -->
      <!-- <Login></Login> -->
      <router-view></router-view>
    </div>
</template>

<script>
import Login from '../src/views/app/pages/Login.vue';
import Nav from './views/app/pages/Nav.vue';
import Netflix from './views/app/pages/Netflix.vue';


export default {
  components: {
    Login,
    Nav,
    Netflix,
},
  name: 'App',

  data: () => ({

  }),
};
</script>
