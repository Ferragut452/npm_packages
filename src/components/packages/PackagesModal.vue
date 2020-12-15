<template>
  <v-card>
    <v-card-title class="subheading font-weight-bold">
      <span class="table-overflow">{{ pack.metadata.name }}</span>
    </v-card-title>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item>
        <v-list-item-content class="table-label">Author:</v-list-item-content>
        <v-list-item-content class="align-end" v-if="pack.metadata.author">
          {{ pack.metadata.author.name }}
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content class="table-label">Version:</v-list-item-content>
        <v-list-item-content class="align-end" v-if="pack.metadata.version">
          {{ pack.metadata.version }}
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content class="table-label"
          >Home page:</v-list-item-content
        >
        <v-list-item-content class="align-end">
          <a class="table-overflow" :href="pack.metadata.links.homepage">{{
            pack.metadata.links.homepage
          }}</a>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content class="table-label">Package:</v-list-item-content>
        <v-list-item-content class="align-end">
          <a class="table-overflow" :href="pack.metadata.links.npm">{{
            pack.metadata.links.npm
          }}</a>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content class="table-label"
          >Description:</v-list-item-content
        >
        <v-list-item-content class="align-end">
          {{ pack.metadata.description }}
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content class="table-label">Stars:</v-list-item-content>
        <v-list-item-content class="align-end">
          {{ pack.npm.starsCount }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content class="table-label">License:</v-list-item-content>
        <v-list-item-content class="align-end">
          {{ pack.metadata.license }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-actions>
      <v-row align="center" justify="space-around">
        <v-btn small depressed color="primary" @click="$emit('close')">
          Close
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PackagesModal",
  props: ["pack"],
};
</script>