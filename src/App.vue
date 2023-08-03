<template>
     <div>
      <Nav/>
    <router-view/>
    <Login/>
  </div>
 
</template>

<script>
import Login from '../src/views/app/pages/Login.vue';
import Nav from './views/app/pages/Nav.vue';


export default {
  components: {
    Login,
    Nav
  },
  name: 'App',

  data: () => ({

  }),
};
</script>
