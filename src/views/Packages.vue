<template>
  <div>
    <PackagesList
      @updatePackages="updatePackages"
      :packages="packages"
    ></PackagesList>
    <PackagesModal v-if="currentPackage"></PackagesModal>
  </div>
</template>

<script>
import PackagesList from "@/components/packages/PackagesList.vue";
import PackagesModal from "@/components/packages/PackagesModal.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Packages",
  components: {
    PackagesList,
    PackagesModal,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(("packages", ["packages", "currentPackage"])),
  },
  methods: {
    ...mapMutations("packages", ["setPackages"]),
    ...mapActions("packages", ["getPackage", "getPackages"]),
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
