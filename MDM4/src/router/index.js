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
import Scleritis from "../views/Scleritis.vue";
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
import SutureRemoval from "../views/SutureRemoval.vue";
import ChestTrauma from "../views/ChestTrauma.vue";
import BackPain from "../views/BackPain.vue";
import ThoracicBackPain from "../views/ThoracicBackPain.vue";
import BackInjury from "../views/BackInjury.vue";
import PilonidalCyst from "../views/PilonidalCyst.vue";
import Paronychia from "../views/Paronychia.vue";
import ThumbSprain from "../views/ThumbSprain.vue";
import HandSprain from "../views/HandSprain.vue";
import Kanaval from "../views/Kanaval.vue";
import FingerAmputaion from "../views/FingerAmputaion.vue";
import FingerSprain from "../views/FingerSprain.vue";
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
import MVC from "../views/MVC.vue";
import MajorTrauma from "../views/MajorTrauma.vue";
import Fall from "../views/Fall.vue";
import DateRape from "../views/DateRape.vue";
import PackingRemoved from "../views/PackingRemoved.vue";
import PostSurgicalWound from "../views/PostSurgicalWound.vue";
import PackingChange from "../views/PackingChange.vue";
import Burn from "../views/Burn.vue";
import InhalationInjury from "../views/InhalationInjury.vue";
import AnimalBite from "../views/AnimalBite.vue";
import InsectBite from "../views/InsectBite.vue";
import Headache from "../views/Headache.vue";
import Migraine from "../views/Migraine.vue";
import NotPreEclampsia from "../views/NotPreEclampsia.vue";
import Hypertension from "../views/Hypertension.vue";
import EarFB from "../views/EarFB.vue";
import OtitisMedia from "../views/OtitisMedia.vue";
import OtitisExterna from "../views/OtitisExterna.vue";
import CerumenImpaction from "../views/CerumenImpaction.vue";
import Perforation from "../views/Perforation.vue";
import NoseFB from "../views/NoseFB.vue";
import Epistaxis from "../views/Epistaxis.vue";
import NoseInjury from "../views/NoseInjury.vue";
import SoreThroat from "../views/SoreThroat.vue";
import Toothache from "../views/Toothache.vue";
import PharyngealScratch from "../views/PharyngealScratch.vue";
import PharyngealCellulitis from "../views/PharyngealCellulitis.vue";
import PreseptalCellulitis from "../views/PreseptalCellulitis.vue";
import ColdSore from "../views/ColdSore.vue";
import Mono from "../views/Mono.vue";
import TMJ from "../views/TMJ.vue";
import URI from "../views/URI.vue";
import Sinusitis from "../views/Sinusitis.vue";
import Bronchitis from "../views/Bronchitis.vue";
import Flu from "../views/Flu.vue";
import Covid from "../views/Covid.vue";
import Cough from "../views/Cough.vue";
import AllergicRhinitis from "../views/AllergicRhinitis.vue";
import ViralSyndrome from "../views/ViralSyndrome.vue";
import Dyspnea from "../views/Dyspnea.vue";
import Asthma from "../views/Asthma.vue";
import COPD from "../views/COPD.vue";
import Pneumonia from "../views/Pneumonia.vue";
import Hiccups from "../views/Hiccups.vue";
import ChestPain from "../views/ChestPain.vue";
import ChestPainAdmission from "../views/ChestPainAdmission.vue";
import Pleurisy from "../views/Pleurisy.vue";
import Palpitations from "../views/Palpitations.vue";
import Bradycardia from "../views/Bradycardia.vue";
import FemaleAbdominalPain from "../views/FemaleAbdominalPain.vue";
import MaleAbdominalPain from "../views/MaleAbdominalPain.vue";
import Constipation from "../views/Constipation.vue";
import Diveritculitis from "../views/Diveritculitis.vue";
import BiliaryColic from "../views/BiliaryColic.vue";
import KidneyStone from "../views/KidneyStone.vue";
import Pyelonephritis from "../views/Pyelonephritis.vue";
import Colitis from "../views/Colitis.vue";
import AGE from "../views/AGE.vue";
import SwallowedFB from "../views/SwallowedFB.vue";
import Diarrhea from "../views/Diarrhea.vue";
import Gastritis from "../views/Gastritis.vue";
import GERD from "../views/GERD.vue";
import Hyperemesisgravidarum from "../views/Hyperemesisgravidarum.vue";
import Hematochezia from "../views/Hematochezia.vue";
import PeriAnal from "../views/PeriAnal.vue";
import RectalFissure from "../views/RectalFissure.vue";
import Hemorrhoid from "../views/Hemorrhoid.vue";
import UTI from "../views/UTI.vue";
import FemaleSTD from "../views/FemaleSTD.vue";
import Dysmenorrhea from "../views/Dysmenorrhea.vue";
import Menorrhagia from "../views/Menorrhagia.vue";
import ThreatMiscarriage from "../views/ThreatMiscarriage.vue";
import OvarianCyst from "../views/OvarianCyst.vue";
import Bartholins from "../views/Bartholins.vue";
import Herpes from "../views/Herpes.vue";
import PregnancyPain from "../views/PregnancyPain.vue";
import Vaginitis from "../views/Vaginitis.vue";
import NotEctopicPregnancy from "../views/NotEctopicPregnancy.vue";
import MaleSTD from "../views/MaleSTD.vue";
import Epididymitis from "../views/Epididymitis.vue";
import Balanitis from "../views/Balanitis.vue";
import NLTeste from "../views/NLTeste.vue";
import UrinaryRetention from "../views/UrinaryRetention.vue";
import Phimosis from "../views/Phimosis.vue";
import Varicocele from "../views/Varicocele.vue";
import DVT from "../views/DVT.vue";
import LegEdema from "../views/LegEdema.vue";
import Neuropathy from "../views/Neuropathy.vue";
import Cellulitis from "../views/Cellulitis.vue";
import Abscess from "../views/Abscess.vue";
import ContactDermatitis from "../views/ContactDermatitis.vue";
import Urticaria from "../views/Urticaria.vue";
import Zoster from "../views/Zoster.vue";
import Tinea from "../views/Tinea.vue";
import ViralRash from "../views/ViralRash.vue";
import Scabies from "../views/Scabies.vue";
import Candidiasis from "../views/Candidiasis.vue";
import Maculopapularrash from "../views/Maculopapularrash.vue";
import LymphAdenopathy from "../views/LymphAdenopathy.vue";
import HidradenitisSuppurativa from "../views/HidradenitisSuppurativa.vue";
import BellsPalsy from "../views/BellsPalsy.vue";
import Paresthesia from "../views/Paresthesia.vue";
import TIA from "../views/TIA.vue";
import Vertigo from "../views/Vertigo.vue";
import Presyncope from "../views/Presyncope.vue";
import Seizure from "../views/Seizure.vue";
import Syncope from "../views/Syncope.vue";
import Anxiety from "../views/Anxiety.vue";
import Safe from "../views/Safe.vue";
import AccidentalIngestion from "../views/AccidentalIngestion.vue";
import Alcohol from "../views/Alcohol.vue";
import AllergicReaction from "../views/AllergicReaction.vue";
import MedRefill from "../views/MedRefill.vue";
import Fever from "../views/Fever.vue";
import Hyperglycemia from "../views/Hyperglycemia.vue";
import Dehydration from "../views/Dehydration.vue";
import SickleCell from "../views/SickleCell.vue";

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
  { path: "/scleritis", name: "Scleritis", component: Scleritis },
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
  {
    path: "/upperbackinjury",
    name: "UpperBackInjury",
    component: UpperBackInjury,
  },
  {
    path: "/shouldersprain",
    name: "ShoulderSprain",
    component: ShoulderSprain,
  },
  { path: "/rotatorcuff", name: "RotatorCuff", component: RotatorCuff },
  {
    path: "/shoulderbruise",
    name: "ShoulderBruise",
    component: ShoulderBruise,
  },
  { path: "/arthritis", name: "Arthritis", component: Arthritis },
  { path: "/acseparation", name: "ACSeparation", component: ACSeparation },
  { path: "/claviclefx", name: "ClavicleFX", component: ClavicleFX },
  {
    path: "/proximalhumerusfx",
    name: "ProximalHumerusFX",
    component: ProximalHumerusFX,
  },
  { path: "/elbowfx", name: "ElbowFX", component: ElbowFX },
  { path: "/injurymild", name: "InjuryMild", component: InjuryMild },
  { path: "/wristfx", name: "WristFX", component: WristFX },
  { path: "/wristsprain", name: "WristSprain", component: WristSprain },
  { path: "/bursitis", name: "Bursitis", component: Bursitis },
  { path: "/laceration", name: "Laceration", component: Laceration },
  { path: "/suturremoval", name: "SutureRemoval", component: SutureRemoval },
  { path: "/chesttrauma", name: "ChestTrauma", component: ChestTrauma },
  { path: "/backpain", name: "BackPain", component: BackPain },
  {
    path: "/thoracicbackpain",
    name: "ThoracicBackPain",
    component: ThoracicBackPain,
  },
  { path: "/backinjury", name: "BackInjury", component: BackInjury },
  { path: "/pilonidalcyst", name: "PilonidalCyst", component: PilonidalCyst },
  { path: "/paronychia", name: "Paronychia", component: Paronychia },
  { path: "/thumbsprain", name: "ThumbSprain", component: ThumbSprain },
  { path: "/handsprain", name: "HandSprain", component: HandSprain },
  { path: "/kanaval", name: "Kanaval", component: Kanaval },
  {
    path: "/fingeramputation",
    name: "FingerAmputation",
    component: FingerAmputaion,
  },
  { path: "/fingersprain", name: "FingerSprain", component: FingerSprain },

  { path: "/fingerfx", name: "FingerFX", component: FingerFX },
  { path: "/boxerfx", name: "BoxerFX", component: BoxerFX },
  { path: "/nailavulsion", name: "NailAvulsion", component: NailAvulsion },
  { path: "/trephination", name: "Trephination", component: Trephination },
  { path: "/sciatica", name: "Sciatica", component: Sciatica },
  { path: "/hipsprain", name: "HipSprain", component: HipSprain },
  { path: "/kneesprain", name: "KneeSprain", component: KneeSprain },
  { path: "/contusion", name: "Contusion", component: Contusion },
  {
    path: "/compartmentsyndrome",
    name: "CompartmentSyndrome",
    component: CompartmentSyndrome,
  },
  { path: "/leginjury", name: "LegInjury", component: LegInjury },
  { path: "/kneeeffusion", name: "KneeEffusion", component: KneeEffusion },
  { path: "/legpain", name: "LegPain", component: LegPain },
  { path: "/anklesprain", name: "AnkleSprain", component: AnkleSprain },
  {
    path: "/achillestendonitis",
    name: "AchillesTendonitis",
    component: AchillesTendonitis,
  },
  { path: "/anklefx", name: "AnkleFX", component: AnkleFX },
  {
    path: "/conscioussedation",
    name: "ConsciousSedation",
    component: ConsciousSedation,
  },
  { path: "/footpuncture", name: "FootPuncture", component: FootPuncture },
  { path: "/fbnoremoval", name: "FBNoRemoval", component: FBNoRemoval },
  { path: "/fbremoval", name: "FBRemoval", component: FBRemoval },
  { path: "/footpain", name: "FootPain", component: FootPain },
  { path: "/footsprain", name: "FootSprain", component: FootSprain },
  { path: "/footfx", name: "FootFX", component: FootFX },
  { path: "/gout", name: "Gout", component: Gout },
  {
    path: "/footparesthesia",
    name: "FootParesthesia",
    component: FootParesthesia,
  },
  { path: "/toefx", name: "ToeFX", component: ToeFX },
  { path: "/mvc", name: "MVC", component: MVC },
  { path: "/majortrauma", name: "MajorTrauma", component: MajorTrauma },
  { path: "/fall", name: "Fall", component: Fall },
  { path: "/daterape", name: "DateRape", component: DateRape },
  {
    path: "/packingremoved",
    name: "PackingRemoved",
    component: PackingRemoved,
  },
  {
    path: "/postsurgicalwound",
    name: "PostSurgicalWound",
    component: PostSurgicalWound,
  },
  { path: "/packingchange", name: "PackingChange", component: PackingChange },
  { path: "/sutureremoval", name: "SutureRemoval", component: SutureRemoval },
  { path: "/burn", name: "Burn", component: Burn },
  {
    path: "/inhalationinjury",
    name: "InhalationInjury",
    component: InhalationInjury,
  },
  { path: "/animalbite", name: "AnimalBite", component: AnimalBite },
  { path: "/insectbite", name: "InsectBite", component: InsectBite },
  { path: "/headache", name: "Headache", component: Headache },
  { path: "/migraine", name: "Migraine", component: Migraine },
  {
    path: "/notpreeclampsia",
    name: "NotPreEclampsia",
    component: NotPreEclampsia,
  },
  { path: "/hypertension", name: "Hypertension", component: Hypertension },
  { path: "/earfb", name: "EarFB", component: EarFB },
  { path: "/otitismedia", name: "OtitisMedia", component: OtitisMedia },
  { path: "/otitisexterna", name: "OtitisExterna", component: OtitisExterna },
  {
    path: "/cerumenimpaction",
    name: "CerumenImpaction",
    component: CerumenImpaction,
  },
  { path: "/perforation", name: "Perforation", component: Perforation },
  { path: "/nosefb", name: "NoseFB", component: NoseFB },
  { path: "/epistaxis", name: "Epistaxis", component: Epistaxis },
  { path: "/noseinjury", name: "NoseInjury", component: NoseInjury },
  { path: "/sorethroat", name: "SoreThroat", component: SoreThroat },
  { path: "/toothache", name: "Toothache", component: Toothache },
  {
    path: "/pharyngealscratch",
    name: "PharyngealScratch",
    component: PharyngealScratch,
  },
  {
    path: "/pharyngealcellulitis",
    name: "PharyngealCellulitis",
    component: PharyngealCellulitis,
  },
  {
    path: "/preseptalcellulitis",
    name: "PreseptalCellulitis",
    component: PreseptalCellulitis,
  },
  { path: "/coldsore", name: "ColdSore", component: ColdSore },
  { path: "/mono", name: "Mono", component: Mono },
  { path: "/tmj", name: "TMJ", component: TMJ },
  { path: "/uri", name: "URI", component: URI },
  { path: "/sinusitis", name: "Sinusitis", component: Sinusitis },
  { path: "/bronchitis", name: "Bronchitis", component: Bronchitis },
  { path: "/flu", name: "Flu", component: Flu },
  { path: "/covid", name: "Covid", component: Covid },
  { path: "/cough", name: "Cough", component: Cough },
  {
    path: "/allergicrhinitis",
    name: "AllergicRhinitis",
    component: AllergicRhinitis,
  },
  { path: "/viralsyndrome", name: "ViralSyndrome", component: ViralSyndrome },
  { path: "/dyspnea", name: "Dyspnea", component: Dyspnea },
  { path: "/asthma", name: "Asthma", component: Asthma },
  { path: "/copd", name: "COPD", component: COPD },
  { path: "/pneumonia", name: "Pneumonia", component: Pneumonia },
  { path: "/hiccups", name: "Hiccups", component: Hiccups },
  { path: "/chestpain", name: "ChestPain", component: ChestPain },
  {
    path: "/chestpainadmission",
    name: "ChestPainAdmission",
    component: ChestPainAdmission,
  },
  { path: "/pleurisy", name: "Pleurisy", component: Pleurisy },
  { path: "/palpitations", name: "Palpitations", component: Palpitations },
  { path: "/bradycardia", name: "Bradycardia", component: Bradycardia },
  {
    path: "/femaleabdominalpain",
    name: "FemaleAbdominalPain",
    component: FemaleAbdominalPain,
  },
  {
    path: "/maleabdominalpain",
    name: "MaleAbdominalPain",
    component: MaleAbdominalPain,
  },
  { path: "/constipation", name: "Constipation", component: Constipation },
  {
    path: "/diverticulitis",
    name: "Diveritculitis",
    component: Diveritculitis,
  },
  { path: "/biliarycolic", name: "BiliaryColic", component: BiliaryColic },
  { path: "/kidneystone", name: "KidneyStone", component: KidneyStone },
  {
    path: "/pyelonephritis",
    name: "Pyelonephritis",
    component: Pyelonephritis,
  },
  { path: "/colitis", name: "Colitis", component: Colitis },
  { path: "/age", name: "AGE", component: AGE },
  { path: "/swallowedfb", name: "SwallowedFB", component: SwallowedFB },
  { path: "/diarrhea", name: "Diarrhea", component: Diarrhea },
  { path: "/gastritis", name: "Gastritis", component: Gastritis },
  { path: "/gerd", name: "GERD", component: GERD },
  {
    path: "/hyperemesisgravidarum",
    name: "Hyperemesisgravidarum",
    component: Hyperemesisgravidarum,
  },
  { path: "/hematochezia", name: "Hematochezia", component: Hematochezia },
  { path: "/perianal", name: "PeriAnal", component: PeriAnal },
  { path: "/rectalfissure", name: "RectalFissure", component: RectalFissure },
  { path: "/hemorrhoid", name: "Hemorrhoid", component: Hemorrhoid },
  { path: "/uti", name: "UTI", component: UTI },
  { path: "/femalestd", name: "FemaleSTD", component: FemaleSTD },
  { path: "/dysmenorrhea", name: "Dysmenorrhea", component: Dysmenorrhea },
  { path: "/menorrhagia", name: "Menorrhagia", component: Menorrhagia },
  {
    path: "/threatmiscarriage",
    name: "ThreatMiscarriage",
    component: ThreatMiscarriage,
  },
  { path: "/ovariancyst", name: "OvarianCyst", component: OvarianCyst },
  { path: "/bartholins", name: "Bartholins", component: Bartholins },
  { path: "/herpes", name: "Herpes", component: Herpes },
  { path: "/pregnancypain", name: "PregnancyPain", component: PregnancyPain },
  { path: "/vaginitis", name: "Vaginitis", component: Vaginitis },
  {
    path: "/notectopicpregnancy",
    name: "NotEctopicPregnancy",
    component: NotEctopicPregnancy,
  },
  { path: "/malestd", name: "MaleSTD", component: MaleSTD },
  { path: "/epididymitis", name: "Epididymitis", component: Epididymitis },
  { path: "/balanitis", name: "Balanitis", component: Balanitis },
  { path: "/nlteste", name: "NLTeste", component: NLTeste },
  {
    path: "/urinaryretention",
    name: "UrinaryRetention",
    component: UrinaryRetention,
  },
  { path: "/phimosis", name: "Phimosis", component: Phimosis },
  { path: "/varicocele", name: "Varicocele", component: Varicocele },
  { path: "/dvt", name: "DVT", component: DVT },
  { path: "/legedema", name: "LegEdema", component: LegEdema },
  { path: "/neuropathy", name: "Neuropathy", component: Neuropathy },
  { path: "/cellulitis", name: "Cellulitis", component: Cellulitis },
  { path: "/abscess", name: "Abscess", component: Abscess },
  {
    path: "/contactdermatitis",
    name: "ContactDermatitis",
    component: ContactDermatitis,
  },
  { path: "/urticaria", name: "Urticaria", component: Urticaria },
  { path: "/zoster", name: "Zoster", component: Zoster },
  { path: "/tinea", name: "Tinea", component: Tinea },
  { path: "/viralrash", name: "ViralRash", component: ViralRash },
  { path: "/scabies", name: "Scabies", component: Scabies },
  { path: "/candidiasis", name: "Candidiasis", component: Candidiasis },
  {
    path: "/maculopapularrash",
    name: "Maculopapularrash",
    component: Maculopapularrash,
  },
  {
    path: "/lymphadenopathy",
    name: "LymphAdenopathy",
    component: LymphAdenopathy,
  },
  {
    path: "/hidradenitissuppurativa",
    name: "HidradenitisSuppurativa",
    component: HidradenitisSuppurativa,
  },
  { path: "/bellspalsy", name: "BellsPalsy", component: BellsPalsy },
  { path: "/paresthesia", name: "Paresthesia", component: Paresthesia },
  { path: "/tia", name: "TIA", component: TIA },
  { path: "/vertigo", name: "Vertigo", component: Vertigo },
  { path: "/presyncope", name: "Presyncope", component: Presyncope },
  { path: "/seizure", name: "Seizure", component: Seizure },
  { path: "/syncope", name: "Syncope", component: Syncope },
  { path: "/anxiety", name: "Anxiety", component: Anxiety },
  { path: "/safe", name: "Safe", component: Safe },
  {
    path: "/accidentalingestion",
    name: "AccidentalIngestion",
    component: AccidentalIngestion,
  },
  { path: "/alcohol", name: "Alcohol", component: Alcohol },
  {
    path: "/allergicreaction",
    name: "AllergicReaction",
    component: AllergicReaction,
  },
  { path: "/medrefill", name: "MedRefill", component: MedRefill },
  { path: "/fever", name: "Fever", component: Fever },
  { path: "/hyperglycemia", name: "Hyperglycemia", component: Hyperglycemia },
  { path: "/dehydration", name: "Dehydration", component: Dehydration },
  { path: "/sicklecell", name: "SickleCell", component: SickleCell },

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
