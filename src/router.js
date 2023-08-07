import Vue from "vue";
import store from "./store";
// import {isMobile} from "mobile-device-detect";
import Router from "vue-router";
import NProgress from "nprogress";
// import authenticate from "./auth/authenticate";
import MovieModal from '../src/components/MovieModel'
Vue.use(Router);




// create new router

const routes = [
  {
    path: "/",
    component: () => import("./views/app/pages"), //webpackChunkName app
    // beforeEnter: authenticate,
    redirect: "/",

    children: [
      // pages
      {
        path: "/",
        component: () => import("./views/app/pages"),
        redirect: "login",
        children: [
     
          {
            path: "",
            component: () => import("./views/app/pages/Home"),
          },
         
          
          // {
          //   path: "/home",
          //   component: () => import("./views/app/pages/Home.vue"),
          // },
          
          {
            path: "sign-in",
            component: () => import("./views/app/pages/sign-in"),
          },
          {
            path: "sample",
            component: () => import("./views/app/pages/Samples"),

          },
          // {
          //   path: "blogs",
          //   component: () => import("./views/app/pages/Blogs"),

          // },
          {
            path: "login",
            component: () => import("./views/app/pages/Login"),

          },
          {
            path: "home",
            component: () => import("./views/app/pages/Home"),
          },
          // {
          //   path: "nav",
          //   component: () => import("./views/app/pages/Nav"),
          // },
          {
            path: "fpos",
            name  : 'Fpo',
            component: () => import("./views/app/pages/Fpo"),
          },
          {
            path: "aeos",
            name  : 'Aeo',
            component: () => import("./views/app/pages/Aeo"),
          },
          {
            path: "ics",
            name  : 'Ics',
            component: () => import("./views/app/pages/Ics"),
          },
          {
            path: "vfcs",
            name  : 'Vfc',
            component: () => import("./views/app/pages/Vfc"),
          },
          {
            path: "farmers",
            name  : 'Farmers',
            component: () => import("./views/app/pages/Farmers"),
          },
          {
            path: "netflix",
            name  : 'Netflix',
            component: () => import("./views/app/pages/Netflix"),
          },
          {
            path: "hotstar",
            name  : 'Hotstar',
            component: () => import("./views/app/pages/Hotstar"),
          },
          // {
          //   path: "moviemodal",
          //   name  : 'MovieModal',
          //   component: () => import("../src/components/MovieNodal"),
          // },
          
         
          
          
        ]
      },
    
    ]
  },

  {
    path: "*",
    component: () => import("./views/app/pages/notFound")
  }
];

const router = new Router({
  mode: "history",
  linkActiveClass: "open",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0};
  }
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.

    NProgress.start();
    NProgress.set(0.1);
  }
  next();
});

router.afterEach(() => {
  // Remove initial loading
  const gullPreLoading = document.getElementById("loading_wrap");
  if (gullPreLoading) {
    gullPreLoading.style.display = "none";
  }
  // Complete the animation of the route progress bar.
  setTimeout(() => NProgress.done(), 500);
  // NProgress.done();
  // if (isMobile) {
  if (window.innerWidth <= 1200) {
    // console.log("mobile");
    store.dispatch("changeSidebarProperties");
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    if (store.getters.getCompactSideBarToggleProperties.isSideNavOpen) {
      store.dispatch("changeCompactSidebarProperties");
    }
  } else {
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    // store.state.sidebarToggleProperties.isSecondarySideNavOpen = false;
  }
});

export default router;
