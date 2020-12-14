<template>
  <v-card>
    <v-card-title class="subheading font-weight-bold">
      <span class="table-overflow">{{ card.name }}</span>
    </v-card-title>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item>
        <v-list-item-content class="table-label">Author:</v-list-item-content>
        <v-list-item-content class="align-end" v-if="card.author">
          {{ card.author.name }}
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content class="table-label">Version:</v-list-item-content>
        <v-list-item-content class="align-end">
          {{ card.version }}
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content class="table-label"
          >Home page:</v-list-item-content
        >
        <v-list-item-content class="align-end">
          <a class="table-overflow" :href="card.links.homepage">{{
            card.links.homepage
          }}</a>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content class="table-label">Link:</v-list-item-content>
        <v-list-item-content class="align-end">
          <a class="table-overflow" :href="card.links.npm">{{
            card.links.npm
          }}</a>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "PackagesCard",
  props: ["card"],
};
</script>

<style lang="scss" scoped>
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
</style>