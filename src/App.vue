<template>
     <div>
    <router-view/>
    <Blogs/>
  </div>
 
</template>

<script>
import Blogs from '../src/views/app/pages/Blogs .vue';


export default {
  components: {
    Blogs
  },
  name: 'App',

  data: () => ({

  }),
};
</script>
