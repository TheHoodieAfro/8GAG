<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/favorites">Favorites</v-btn>
    </v-navigation-drawer>

    <v-app-bar app color="deep-purple darken-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: null,
  }),
};
</script>
