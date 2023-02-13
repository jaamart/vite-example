import { createRouter, createWebHashHistory } from "vue-router";

import RandomRecipe from "./RandomRecipe.vue";
import Two from "./SearchByCategory.vue";
import Three from "./SearchByName.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: RandomRecipe,
      path: "/randomrecipe",
    },
    {
      component: Two,
      path: "/searchbycategory",
    },
    {
      component: Three,
      path: "/searchbyname",
    },
  ],
});

export default router;
