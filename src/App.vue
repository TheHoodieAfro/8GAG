<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
    token: this.$store.state.token,
  }),
};
</script>
