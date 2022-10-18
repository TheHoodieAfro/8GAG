import VueRouter from "vue-router";
import Vue from "vue";
import HomeView from "../views/HomeView";
import FavoritesView from "../views/FavoritesView";
import LoginPage from '../LoginPage'

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: HomeView,
  },

  {
    path: "/",
    component: LoginPage,
  },

  {
    path: "/favorites",
    component: FavoritesView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
