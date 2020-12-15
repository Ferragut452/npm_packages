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
        <v-list-item-content class="table-label">Package:</v-list-item-content>
        <v-list-item-content class="align-end">
          <a class="table-overflow" :href="card.links.npm">{{
            card.links.npm
          }}</a>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <div class="pa-4">
      <v-row align="center" justify="space-around">
        <v-btn
          @click.stop="openPackage(card.name)"
          small
          depressed
          color="primary"
        >
          Open
        </v-btn>

        <v-dialog v-model="dialog" persistent max-width="400">
          <PackagesModal
            v-if="currentPackage"
            :pack="currentPackage"
            @close="Close()"
          ></PackagesModal>
        </v-dialog>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import PackagesModal from "@/components/packages/PackagesModal.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "PackagesCard",
  props: ["card"],
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    PackagesModal,
  },
  computed: {
    ...mapState("packages", ["currentPackage"]),
  },
  methods: {
    ...mapMutations("packages", ["setPackage"]),
    ...mapActions("packages", ["getPackage"]),
    Close() {
      this.dialog = false;
      this.setPackage(null);
    },
    openPackage(name) {
      this.dialog = true;
      this.getPackage(encodeURIComponent(name));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>