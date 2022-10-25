import VueRouter from "vue-router";
import Vue from "vue";
import HomeView from "../views/HomeView";
import FavoritesView from "../views/FavoritesView";
import LoginView from '../views/LoginView'
import MemesView from "../views/MemesView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
    children: [
      {
        path: "/",
        component: MemesView,
      },
    
      {
        path: "/favorites",
        component: FavoritesView,
      },
    ]
  },
  {
    path: "/login",
    component: LoginView,
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
