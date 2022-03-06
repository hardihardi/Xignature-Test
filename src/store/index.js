import axios from "axios"
import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

const state = {
  posts: [],
  files: [],
}

const getters = {}

const actions = {
  getPosts({ commit }) {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      commit("SET_POSTS", response.data)
    })
  },
  getFiles({ commit }) {
    axios.get("http://localhost:8888/api").then(response => {
      commit("SET_FILES", response.data)
    })
  },
}

const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_FILES(state, files) {
    state.files = files
  },
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
