<template>
  <div>
    <PackagesList
      @updatePackages="updatePackages"
      :packages="packages"
    ></PackagesList>
  </div>
</template>

<script>
import PackagesList from "@/components/packages/PackagesList.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Packages",
  components: {
    PackagesList,
  },
  computed: {
    ...mapState("packages", ["packages"]),
  },
  methods: {
    ...mapMutations("packages", ["setPackages"]),
    ...mapActions("packages", ["getPackages"]),
    updatePackages(query) {
      if (!query) {
        this.setPackages([]);
        return;
      }
      this.getPackages(query);
    },
  },
  mounted() {},
};
</script>
