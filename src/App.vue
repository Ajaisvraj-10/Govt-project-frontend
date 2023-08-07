<template>
    <div>
      <MovieModal />
      <!-- <Hotstar /> -->
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
import Hotstar from './views/app/pages/Hotstar.vue';
import MovieModal from './components/MovieModel.vue'



export default {
  components: {
    Login,
    Nav,
    Netflix,
    Hotstar,
    MovieModal,
},
  name: 'App',

  data: () => ({

  }),
};
</script>
