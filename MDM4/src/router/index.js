import { createRouter, createWebHashHistory } from "vue-router";

// Import components for each route
import HeadInjury from "../views/HeadInjury.vue";
import HeadInjuryNoCT from "../views/HeadInjuryNoCT.vue";
import Concussion from "../views/Concussion.vue";
import NonAccidental from "../views/NonAccidental.vue";
import NotFound from "../views/NotFound.vue"; // Ensure this path is correct

  const routes = [
    { path: "/headinjury", name: "HeadInjury", component: HeadInjury },
    { path: "/headinjury-no-ct", name: "HeadInjuryNoCT", component: HeadInjuryNoCT },
    { path: "/concussion", name: "Concussion", component: Concussion },
    { path: "/non-accidental", name: "NonAccidental", component: NonAccidental }, // Named route
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