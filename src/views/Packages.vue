<template>
  <div>
    <PackagesList :packages="packages"></PackagesList>
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
  //   data() {
  //     return {
  //       currentPackage: null,
  //     };
  //   },
  computed: {
    ...mapState(("packages", ["packages"])),
  },
  methods: {
    ...mapActions("packages", ["getPackage", "getPackages"]),
  },
  mounted() {
    this.getPackages("angular").then((data) => console.log(data));
  },
};
</script>
