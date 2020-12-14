<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
  <v-app>
    <!-- <v-navigation-drawer app>
      <h2>Drawer</h2>
    </v-navigation-drawer> -->

    <!-- <v-app-bar color="indigo darken-2" dark app>
      <v-toolbar-title class="text-uppercase">jsdelivr</v-toolbar-title>
    </v-app-bar> -->

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- <v-footer color="indigo darken-2" dark app>
      <v-toolbar-title>Footer</v-toolbar-title>
    </v-footer> -->
  </v-app>
</template>

<script>
import Search from "@/components/packages/Search.vue";

export default {
  components: {
    Search,
  },
};
</script>

<style lang="scss">
.v-application {
  font-size: 14px !important;
  .v-card__title {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .v-card {
    height: 100%;
  }
  .v-list {
    padding-bottom: 0;
    padding-top: 0;
  }
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
