import { createRouter, createWebHashHistory } from "vue-router";

// Import components for each route
import HomeView from "../views/HomeView.vue";
import HeadInjury from "../views/HeadInjury.vue";
import HeadInjuryNoCT from "../views/HeadInjuryNoCT.vue";
import Concussion from "../views/Concussion.vue";
import NonAccidental from "../views/NonAccidental.vue";
import PediHeadInjuryAlgorithm from "../views/PediHeadInjuryAlgorithm.vue";
import SevereTBI from "../views/SevereTBI.vue";
import Sty from "../views/Sty.vue";
import Conjunctivitis from "../views/Conjunctivitis.vue";
import EyeFB from "../views/EyeFB.vue";
import Abrasion from "../views/Abrasion.vue";
import CornealUlcer from "../views/CornealUlcer.vue";
import Blurry from "../views/Blurry.vue";
import NotGlaucoma from "../views/NotGlaucoma.vue";
import SubconjunctivalHemorrhage from "../views/SubconjunctivalHemorrhage.vue";
import FacialInjury from "../views/FacialInjury.vue";
import NasalInjury from "../views/NasalInjury.vue";
import DentalInjury from "../views/DentalInjury.vue";
import CervicalRadiculopathy from "../views/CervicalRadiculopathy.vue";
import TrapeziusSpasm from "../views/TrapeziusSpasm.vue";
import NeckPain from "../views/NeckPain.vue";
import UpperBack from "../views/UpperBack.vue";
import UpperBackInjury from "../views/UpperBackInjury.vue";
import ShoulderSprain from "../views/ShoulderSprain.vue";
import RotatorCuff from "../views/RotatorCuff.vue";
import ShoulderBruise from "../views/ShoulderBruise.vue";
import Arthritis from "../views/Arthritis.vue";
import ACSeparation from "../views/ACSeparation.vue";
import ClavicleFX from "../views/ClavicleFX.vue";
import ProximalHumerusFX from "../views/ProximalHumerusFX.vue";
import ElbowFX from "../views/ElbowFX.vue";
import InjuryMild from "../views/InjuryMild.vue";
import WristFX from "../views/WristFX.vue";
import WristSprain from "../views/WristSprain.vue";
import Bursitis from "../views/Bursitis.vue";
import Laceration from "../views/Laceration.vue";
import ChestTrauma from "../views/ChestTrauma.vue";
import BackPain from "../views/BackPain.vue";
import ThoracicBackPain from "../views/ThoracicBackPain.vue";
import BackInjury from "../views/BackInjury.vue";
import PilonidalCyst from "../views/PilonidalCyst.vue";
import Paronychia from "../views/Paronychia.vue";
import ThumbSprain from "../views/ThumbSprain.vue";
import Kanaval from "../views/Kanaval.vue";
import FingerAmputaion from "../views/FingerAmputaion.vue";
import FingerFX from "../views/FingerFX.vue";
import BoxerFX from "../views/BoxerFX.vue";
import NailAvulsion from "../views/NailAvulsion.vue";
import Trephination from "../views/Trephination.vue";
import Sciatica from "../views/Sciatica.vue";
import Contusion from "../views/Contusion.vue";
import HipSprain from "../views/HipSprain.vue";
import KneeSprain from "../views/KneeSprain.vue";
import CompartmentSyndrome from "../views/CompartmentSyndrome.vue";
import LegInjury from "../views/LegInjury.vue";
import KneeEffusion from "../views/KneeEffusion.vue";
import LegPain from "../views/LegPain.vue";
import AnkleSprain from "../views/AnkleSprain.vue";
import AchillesTendonitis from "../views/AchillesTendonitis.vue";
import AnkleFX from "../views/AnkleFX.vue";
import ConsciousSedation from "../views/ConsciousSedation.vue";
import FootPuncture from "../views/FootPuncture.vue";
import FBNoRemoval from "../views/FBNoRemoval.vue";
import FBRemoval from "../views/FBRemoval.vue";
import FootPain from "../views/FootPain.vue";
import FootSprain from "../views/FootSprain.vue";
import FootFX from "../views/FootFX.vue";
import Gout from "../views/Gout.vue";
import FootParesthesia from "../views/FootParesthesia.vue";
import ToeFX from "../views/ToeFX.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/headinjury", name: "HeadInjury", component: HeadInjury },
  {
    path: "/headinjury-no-ct",
    name: "HeadInjuryNoCT",
    component: HeadInjuryNoCT,
  },
  { path: "/concussion", name: "Concussion", component: Concussion },
  { path: "/nonaccidental", name: "NonAccidental", component: NonAccidental },
  {
    path: "/pediheadinjuryalgorithm",
    name: "PediHeadInjuryAlgorithm",
    component: PediHeadInjuryAlgorithm,
  },
  {
    path: "/severetbi",
    name: "SevereTBI",
    component: SevereTBI,
  },
  { path: "/sty", name: "Sty", component: Sty },
  {
    path: "/conjunctivitis",
    name: "Conjunctivitis",
    component: Conjunctivitis,
  },
  { path: "/eyefb", name: "EyeFB", component: EyeFB },
  { path: "/abrasion", name: "Abrasion", component: Abrasion },
  { path: "/cornealulcer", name: "CornealUlcer", component: CornealUlcer },
  { path: "/blurry", name: "Blurry", component: Blurry },
  { path: "/notglaucoma", name: "NotGlaucoma", component: NotGlaucoma },
  {
    path: "/subconjunctivalhemorrhage",
    name: "SubconjunctivalHemorrhage",
    component: SubconjunctivalHemorrhage,
  },
  {
    path: "/facialinjury",
    name: "FacialInjury",
    component: FacialInjury,
  },
  { path: "/nasalinjury", name: "NasalInjury", component: NasalInjury },
  { path: "/dentalinjury", name: "DentalInjury", component: DentalInjury },
  {
    path: "/cervicalradiculopathy",
    name: "CervicalRadiculopathy",
    component: CervicalRadiculopathy,
  },
  {
    path: "/trapeziusspasm",
    name: "TrapeziusSpasm",
    component: TrapeziusSpasm,
  },
  { path: "/neckpain", name: "NeckPain", component: NeckPain },
  { path: "/upperback", name: "UpperBack", component: UpperBack },
  { path: "/upperbackinjury", name: "UpperBackInjury", component: UpperBackInjury },
  { path: "/shouldersprain", name: "ShoulderSprain", component: ShoulderSprain },
  { path: "/rotatorcuff", name: "RotatorCuff", component: RotatorCuff },
  { path: "/shoulderbruise", name: "ShoulderBruise", component: ShoulderBruise },
  { path: "/arthritis", name: "Arthritis", component: Arthritis },
  { path: "/acseparation", name: "ACSeparation", component: ACSeparation },
  { path: "/claviclefx", name: "ClavicleFX", component: ClavicleFX },
  { path: "/proximalhumerusfx", name: "ProximalHumerusFX", component: ProximalHumerusFX },
  { path: "/elbowfx", name: "ElbowFX", component: ElbowFX },
  { path: "/injurymild", name: "InjuryMild", component: InjuryMild },
  { path: "/wristfx", name: "WristFX", component: WristFX },
  { path: "/wristsprain", name: "WristSprain", component: WristSprain },
  { path: "/bursitis", name: "Bursitis", component: Bursitis },
  { path: "/laceration", name: "Laceration", component: Laceration },
  { path: "/chesttrauma", name: "ChestTrauma", component: ChestTrauma },
  { path: "/backpain", name: "BackPain", component: BackPain },
  { path: "/thoracicbackpain", name: "ThoracicBackPain", component: ThoracicBackPain },
  { path: "/backinjury", name: "BackInjury", component: BackInjury },

  { path: "/pilonidalcyst", name: "PilonidalCyst", component: PilonidalCyst },
  { path: "/paronychia", name: "Paronychia", component: Paronychia },
  { path: "/thumbsprain", name: "ThumbSprain", component: ThumbSprain },
  { path: "/kanaval", name: "Kanaval", component: Kanaval },
  { path: "/fingeramputation", name: "FingerAmputation", component: FingerAmputaion },
  { path: "/fingerfx", name: "FingerFX", component: FingerFX },
  { path: "/boxerfx", name: "BoxerFX", component: BoxerFX },
  { path: "/nailavulsion", name: "NailAvulsion", component: NailAvulsion },
  { path : "/trephination", name: "Trephination", component: Trephination },
  { path: "/sciatica", name: "Sciatica", component: Sciatica },
  { path: "/hipsprain", name: "HipSprain", component: HipSprain },
  { path: "/kneesprain", name: "KneeSprain", component: KneeSprain },
  { path: "/contusion", name: "Contusion", component: Contusion },
  { path: "/compartmentsyndrome", name: "CompartmentSyndrome", component: CompartmentSyndrome },
  { path: "/leginjury", name: "LegInjury", component: LegInjury },
  { path: "/kneeeffusion", name: "KneeEffusion", component: KneeEffusion },
  { path: "/legpain", name: "LegPain", component: LegPain },
  { path: "/anklesprain", name: "AnkleSprain", component: AnkleSprain },
  { path: "/achillestendonitis", name: "AchillesTendonitis", component: AchillesTendonitis },
  { path: "/anklefx", name: "AnkleFX", component: AnkleFX },
  { path: "/conscioussedation", name: "ConsciousSedation", component: ConsciousSedation },
  { path: "/footpuncture", name: "FootPuncture", component: FootPuncture },
  { path: "/fbnoremoval", name: "FBNoRemoval", component: FBNoRemoval },
  { path: "/fbremoval", name: "FBRemoval", component: FBRemoval },
  { path: "/footpain", name: "FootPain", component: FootPain }, 
  { path: "/footsprain", name: "FootSprain", component: FootSprain },
  { path: "/footfx", name: "FootFX", component: FootFX },
  { path: "/gout", name: "Gout", component: Gout },
  { path: "/footparesthesia", name: "FootParesthesia", component: FootParesthesia },
  { path: "/toefx", name: "ToeFX", component: ToeFX },




  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
