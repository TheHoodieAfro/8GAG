import VueRouter from "vue-router";
import Vue from "vue";
import HomeView from "../views/HomeView";
import FavoritesView from "../views/FavoritesView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
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
