// filepath: /Users/flint/Library/Mobile Documents/com~apple~CloudDocs/Developer Cloud/MDM4/MDM4/src/router/index.js
import { createRouter, createWebHashHistory } from "vue-router";

// Import components for each route
import HeadInjury from "../views/HeadInjury.vue";
import HeadInjuryNoCT from "../views/HeadInjuryNoCT.vue";
import Concussion from "../views/Concussion.vue";
import NotFound from "../views/NotFound.vue"; // Ensure this path is correct

const routes = [
  { path: "/headinjury", component: HeadInjury },
  { path: "/headinjury-no-ct", component: HeadInjuryNoCT },
  { path: "/concussion", component: Concussion },
  // Catch-all route for 404 Not Found
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(), // Switched to Hash Mode
  routes,
});

export default router;