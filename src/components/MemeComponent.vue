<template>
  <v-card color="transparent" elevation="10">
    <v-card-title>
      <div id="name">
        <h3>{{ meme.name }}</h3>
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="$emit('addFavorites', meme)">
        <v-icon x-large>mdi-star-outline</v-icon>
      </v-btn>
    </v-card-title>
    <v-img :src="img"></v-img>
  </v-card>
</template>

<script>
import axios from "../plugins/axios";

export default {
  name: "MemeComponent",

  props: {
    meme: {
      type: Object,
    },
  },

  data: function () {
    return {
      img: "",
    };
  },

  methods: {
    getData: function () {
      axios
        .get(this.meme.url)
        .then((res) => {
          this.img = res.data.sprites.front_default;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created: function () {
    this.getData();
  },
};
</script>
