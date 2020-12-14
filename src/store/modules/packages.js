import $http from "@/axios";

const packages = {
  namespaced: true,
  state: {
    packages: [],
    package: null,
    packageModal: false
  },
  mutations: {
    setPackages(state, payload) {
      state.packages = payload;
    },
    setPackage(state, payload) {
      state.package = payload;
    },
    setPackageModal(state) {
      state.packageModal = !state.packageModal;
    },
  },
  actions: {
    getPackages({ commit, rootState }, query) {
      return $http
        .get(
          `/search?q=${query}&size=250`
        )
        .then((res) => {
          console.log("test list", res.data.results);
          commit("setPackages", res.data.results);
          return res.data.results;
        }).catch(error => console.log(error));
    },
    getPackage({ commit, rootState }, currentPackage) {
      return $http
        .get(
          `/package/${currentPackage}`
        )
        .then((res) => {
          console.log("test item", res.data);
          return res.data;
        }).catch(error => console.log(error));
    },
  },
};

export default packages;
