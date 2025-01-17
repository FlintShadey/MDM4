import { createRouter, createWebHashHistory } from "vue-router";

// Import components for each route
import HeadInjury from "../views/HeadInjury.vue";
import HeadInjuryNoCT from "../views/HeadInjuryNoCT.vue";
import Concussion from "../views/Concussion.vue";
import NonAccidental from "../views/NonAccidental.vue";
import PediHeadInjuryAlgorithm from "../views/PediHeadInjuryAlgorithm.vue";
import Sty from "../views/Sty.vue";
import Conjunctivitis from "../views/Conjunctivitis.vue";
import EyeFB from "../views/EyeFB.vue";
import Abrasion from "../views/Abrasion.vue";
import CornealZoster from "../views/CornealZoster.vue";

import NotFound from "../views/NotFound.vue"; // Ensure this path is correct

const routes = [
  { path: "/headinjury", name: "HeadInjury", component: HeadInjury },
  {
    path: "/headinjury-no-ct",
    name: "HeadInjuryNoCT",
    component: HeadInjuryNoCT,
  },
  { path: "/concussion", name: "Concussion", component: Concussion },
  { path: "/nonaccidental", name: "NonAccidental", component: NonAccidental },
  { path: "/pediheadinjuryalgorithm", name: "PediHeadInjuryAlgorithm", component: PediHeadInjuryAlgorithm },
  { path: "/sty", name: "Sty", component: Sty }, // Named route
  {
    path: "/conjunctivitis",
    name: "Conjunctivitis",
    component: Conjunctivitis,
  },
  { path: "/eyefb", name: "EyeFB", component: EyeFB },
  { path: "/abrasion", name: "Abrasion", component: Abrasion },
  { path: "/cornealzoster", name: "CornealZoster", component: CornealZoster },
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
