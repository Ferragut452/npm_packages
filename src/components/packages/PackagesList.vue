<template>
  <v-container fluid>
    <v-data-iterator
      :items="packages.packages"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
      :page="page"
    >
      <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-1">
          <v-text-field
            @input="updateList($event)"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.package.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <PackagesCard :card="item.package"></PackagesCard>
          </v-col>
        </v-row>
      </template>

      <template v-if="packages.packages.length > 0" v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Cards per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4 grey--text">
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import PackagesCard from "@/components/packages/PackagesCard.vue";

export default {
  name: "PackagesList",
  props: ["packages", "value"],
  components: {
    PackagesCard,
  },
  data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      page: 1,
      itemsPerPage: 8,
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.packages.packages.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
  },
  methods: {
    updateList(ev) {
      this.$emit("updatePackages", ev);
      this.page = 1;
    },
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>
