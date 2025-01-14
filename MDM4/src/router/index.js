import { createRouter, createWebHistory } from "vue-router";

// Import components for each route
import HeadInjury from "../views/HeadInjury.vue";
import HeadInjuryNoCT from "../views/HeadInjuryNoCT.vue";
import Concussion from "../views/Concussion.vue";
import NotFound from "../views/NotFound.vue"; // Ensure this path is correct

const routes = [
  { path: "/headinjury", component: HeadInjury },
  { path: "/headinjury-no-ct", component: HeadInjuryNoCT },
  { path: "/concussion", component: Concussion },
  // Remove the explicit NotFound route if using the wildcard route
  // { path: "/NotFound", component: () => import("../views/NotFound.vue") },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
