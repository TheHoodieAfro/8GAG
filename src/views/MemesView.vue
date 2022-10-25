<template>
    <v-container grid-list-md fluid>
        <v-layout wrap>
          <v-flex xs12 sm6 md4 v-for="meme in memes" :key="meme.ID">
            <meme-view :meme="meme" @addFavorites="addToFavorites" />
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
import axios from "../plugins/axios";
import meme from "../components/MemeComponent.vue";
import { mapActions } from "vuex";

var currentPage = 1;

export default {
  components: {
    memeView: meme,
  },

  data: function () {
    return {
      memes: null,
    };
  },

  methods: {
    ...mapActions(["addToFavorites"]),

    getOrigin: function () {
      axios
        .get("?limit=20&offset=0")
        .then((res) => {
          this.memes = res.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getNext: function () {
      currentPage += 1;
      axios
        .get(currentPage)
        .then((res) => {
          this.memes = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getPast: function () {
      currentPage += -1;
      axios
        .get(currentPage)
        .then((res) => {
          this.memes = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getExact: function (page) {
      currentPage = page;
      axios
        .get(currentPage)
        .then((res) => {
          this.memes = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted: function () {
    this.getOrigin();
  },
};
</script>
