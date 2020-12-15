import $http from "@/axios";

const packages = {
  namespaced: true,
  state: {
    packages: [],
    currentPackage: null,
  },
  mutations: {
    setPackages(state, payload) {
      state.packages = payload;
    },
    setPackage(state, payload) {
      state.currentPackage = payload;
    },
  },
  actions: {
    getPackages({ commit }, query) {
      return $http
        .get(
          `/search?q=${query}&size=250`
        )
        .then((res) => {
          commit("setPackages", res.data.results);
          return res.data.results;
        }).catch(error => console.log(error));
    },
    getPackage({ commit }, pack) {
      return $http
        .get(
          `/package/${pack}`
        )
        .then((res) => {
          console.log("test item", res.data);
          commit("setPackage", res.data.results);
          return res.data;
        }).catch(error => console.log(error));
    },
  },
};

export default packages;
