<template>
    <div>
      <!-- <LoginTh /> -->
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
import LoginTh from './views/app/pages/LoginTh.vue';
import Plans from './views/app/pages/Plans.vue'
import Otthome from './views/app/pages/Otthome.vue'
import Youtube from './views/app/pages/Youtube.vue';
import Youtubedtl from './views/app/pages/Youtubedtl.vue'



export default {
  components: {
    Login,
    Nav,
    Netflix,
    Hotstar,
    LoginTh,
    Plans,
    Otthome,
    Youtube,
    Youtubedtl
    
},
  name: 'App',

  data: () => ({

  }),
};
</script>
