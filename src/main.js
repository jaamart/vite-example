import { createApp } from "vue";

import App from "./App.vue";
import router from "./views/router";
//import store from './store' - Vuex(VG)

/*
const mutations = {
  increment(state) {
    state.counter++
  }
}
*/

//const state = { counter:0 }

/*
const store = createStore({
  mutations,
  state,
  strict:true
})
*/

createApp(App)
  .use(router)
  //.use(store)
  .mount("#app");
