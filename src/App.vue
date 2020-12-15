<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer color="blue darken-3" padless>
      <v-row justify="center" no-gutters>
        <v-col class="blue darken-3 py-4 text-center white--text" cols="12">
          <strong class="my-name">Oleg Davydov</strong>
          <a class="white--text" href="https://github.com/Ferragut452"
            >Github</a
          >
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

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

.table-label {
  max-width: 30%;
  padding-right: 10px !important;
  font-size: 12px;
  color: rgb(141, 141, 141);
}

.table-overflow {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}

.my-name {
  margin-right: 10px;
}
</style>
