
<template>
  <footer id="footer1" class="">
        
    <div class="footer-tabs flex-align">
      <router-link to="/"><div class="text-center" :class="$root.current_page=='home'?'active':''">
        <i class="fa fa-home "></i>
        <h6 class="text-14 mb-0">Home</h6>
      </div></router-link>
      
      <div class="text-center" :class="$root.current_page=='leads'?'active':''" >
        <i class="fa fa-user"></i>
        <h6 class="text-14 mb-0">To me</h6>
      </div>
      <div class="text-center" :class="$root.current_page=='leads'?'active':''" v-b-modal.leads>
        <i class="fa fa-user-plus "></i>
        <h6 class="text-14 mb-0">Frome me</h6>
      </div>
      
      <div class="text-center" :class="$root.current_page=='profile'?'active':''" v-b-modal.track>
        <i class="fa fa-map-marker "></i>
        <h6 class="text-14 mb-0">Track Shipment</h6>
      </div>
    </div>


    
          
          
  </footer>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  mounted() {
   
  },
  methods:{

    
  }
};
</script>
<style scoped>

@import '../style/style.css';
  
</style>
