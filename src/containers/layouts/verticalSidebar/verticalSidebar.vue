<template>
<vue-perfect-scrollbar
    class="sidebar-panel   rtl-ps-none ps scroll"
    @mouseleave.native="sidebarCompact();returnSelectedParentMenu()"
       
    @mouseenter.native="removeSidebarCompact"
    :class="{
      'vertical-sidebar-compact': getVerticalCompact.isSidebarCompact,
      'sidebar-full-collapse': getVerticalSidebar.isMobileCompact
    }"
        :settings="{ suppressScrollX : true ,  wheelPropagation: false}"
      >
  <div>
    <div class="gull-brand text-center d-flex align-items-center pl-2 mb-2 justify-content-between">
     <div>
      <!-- <img class="" src="@/assets/images/logo.png" /> -->
      
            <a class="has-arrow  " >
              <img src="/logo.png" style="width: 50px;padding:5px;">
             
              <h2 class="text-white  font-weight-bold m-0" 
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                 style="align-self: center;">Capcee</h2>
            
            </a>
      </div>
      <div class="toggle-sidebar-compact">
        <label class="switch ul-switch switch-primary ml-auto">
          <input @click="switchSidebar" type="checkbox" />
          <span class="ul-slider o-hidden"></span>
        </label>
      </div>
    </div>

    <div class="close-mobile-menu" @click="mobileSidebar">
      <i class="text-16 text-primary i-Close-Window font-weight-bold"></i>
    </div>

    <div class="mt-4 main-menu">
      
      <ul class="ul-vertical-sidebar pl-0" id="menu">
        <!-- <p class="main-menu-title text-muted ml-3 font-weight-700 text-13 mt-4 mb-2">Apps</p> -->
        <li class="Ul_li--hover">
          <div v-b-toggle.collapse-1>
            <a class="has-arrow " href="#"  :class="{ active: selectedParentMenu == 'dashboards' }">
              <i class="i-Bar-Chart text-20 mr-2 "></i>
              <span
                class="text-15"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >Dashboards</span
              >
              
            </a>
          </div>
         
        </li>

        <li class="Ul_li--hover">
          <router-link tag="a" class to="/app/pages/projects">
          <div >
            <a class="has-arrow " >
              <i class="i-Library text-20 mr-2"></i>
              <span
                class="text-15"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >Projects</span
              >
            
            </a>
          </div>
          </router-link>
          
        </li>
        <li class="Ul_li--hover">
          <router-link tag="a" class to="/app/pages/proposals">
          <div>
            <a class="has-arrow " >
              <i class="i-Suitcase text-20 mr-2 "></i>
              <span
                class="text-15 " :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >Proposals </span
              >
             
            </a>
          </div>
          </router-link>
        
        </li>
        <li class="Ul_li--hover">
          <div v-b-toggle.collapse-4>
            <a class="has-arrow " href="#" :class="{ active: selectedParentMenu == 'apps' }">
              <i class="nav-icon i-Files text-20 mr-2 "></i>

              <span
                class="text-15 "
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >Invoices</span
              >
             
            </a>
          </div>
        
        </li>

        <li class="Ul_li--hover">
          <div v-b-toggle.collapse-5>
            <a class="has-arrow " href="#" :class="{ active: selectedParentMenu == 'charts' }">
              <i class="nav-icon i-Two-Windows text-20 mr-2 "></i>
              <span
                class="text-15 "
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
                >Tickets</span
              >
             
            </a>
          </div>
         
        </li>

 
       
      </ul>
      
    </div>
  </div>
  </vue-perfect-scrollbar>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import arrowIcon from "@/components/arrow/arrowIcon";
export default {
  components: {
    arrowIcon
  },
  computed: {
    ...mapGetters(["getVerticalCompact", "getVerticalSidebar"])
  },
  data() {
    return {
      selectedParentMenu: "",
    };
  },
   mounted() {
    this.toggleSelectedParentMenu();
     document.addEventListener("click", this.returnSelectedParentMenu);
   },
    beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedParentMenu);
    
  },
  methods: {
    ...mapActions([
      "switchSidebar",
      "sidebarCompact",
      "removeSidebarCompact",
      "mobileSidebar"
    ]),


     toggleSelectedParentMenu() {
      const currentParentUrl = this.$route.path
        .split("/")
        .filter(x => x !== "")[1];

      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
        console.log(currentParentUrl)
      } else {
        this.selectedParentMenu = "dashboards";
      }
    },
      returnSelectedParentMenu() {
     
        this.toggleSelectedParentMenu();
      
    },
    
  }
};
</script>
<style>

</style>