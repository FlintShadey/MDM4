<template>
  <v-container>
    <!-- <hr> -->
    <v-row>
      <img
        src="../assets/ImageHeadInjury.png"
        alt="Head Injury"
        height="32px"
        class="mt-2"
      />

      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/headinjury')"
        >
          Head Injury
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/headinjury-no-ct')"
        >
          Head Injury No CT
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/concussion')"
        >
          Concussion
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/nonaccidental')"
        >
          Non-Accidental
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="grey"
          size="small"
          @click="openDialog('/pediheadinjuryalgorithm')"
        >
          Pedi TBI Algorithm
        </v-btn>
      </v-col>
      <v-col>
        <v-btn color="grey" size="small" @click="openDialog('/severeTBI')">
          Severe TBI
        </v-btn>
      </v-col>
    </v-row>

    <hr />

    <v-row class="small-vertical">
      <img src="../assets/eye.png" alt="eye" height="32px" class="mt-3" />
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/sty')"
        >
          Sty
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/conjunctivitis')"
        >
          Conjunctivitis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/eyefb')"
        >
          Eye FB
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/abrasion')"
        >
          Abrasion
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/cornealulcer')"
        >
          Corneal Ulcer
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/blurry')"
        >
          Blurry
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/notglaucoma')"
        >
          Not Glaucoma
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/subconjunctivalhemorrhage')"
        >
          Subconjunctival Hemorrhage
        </v-btn>
      </v-col>
    </v-row>
    <hr />
    <v-row>
      <img
        class="mt-3"
        height="32px"
        src="../assets/faceInjury.png"
        alt="faceInjury"
      />
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/facialinjury')"
        >
          Facial Injury
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/nasalinjury')"
        >
          Nasal Injury
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/DentalInjury')"
        >
          Dental Injury
        </v-btn>
      </v-col>
    </v-row>
    <hr />
    <v-row>
      <img
        class="mt-3"
        height="32px"
        src="../assets/neckUpperBack.png"
        alt="Neck & Upper Back"
      />
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/cervicalradiculopathy')"
          >Cervical Radiculopathy</v-btn
        >
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/trapeziusspasm')"
          >Trapezius Spasm</v-btn
        >
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/neckpain')"
          >Neck Pain</v-btn
        >
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/upperback')"
          >Upper Back</v-btn
        >
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/upperbackinjury')"
          >Upper Back Injury</v-btn
        >
      </v-col>
    </v-row>
    <hr />
    <v-row>
      <img
        class="mt-3"
        height="32px"
        src="../assets/shoulder.png"
        alt="Shoulder"
      />
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/shouldersprain')"
        >
          Shoulder Sprain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/rotatorcuff')"
          >Rotator Cuff
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/shoulderbruise')"
          >Shoulder Contusion
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="warning"
          size="small"
          rounded="xl"
          @click="openDialog('/arthritis')"
          >arthritis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/acseparation')"
          >AC Separation
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/claviclefx')"
          >clavicle fx
        </v-btn>
      </v-col>

      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/proximalhumerusfx')"
        >
          Prox Humerus FX
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/elbowfx')"
        >
          Elbow FX
        </v-btn>
      </v-col>
    </v-row>
    <hr />
    <v-row>
      <img class="mt-3" src="../assets/arm.png" alt="arm" />
      <v-col>
        <v-btn
          color="warning"
          size="small"
          rounded="xl"
          @click="openDialog('/injurymild')"
        >
          injury mild
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/wristfx')"
        >
          wrist fx
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/wristsprain')"
        >
          wrist sprain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="warning"
          size="small"
          rounded="xl"
          @click="openDialog('/bursitis')"
        >
          bursitis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="warning"
          size="small"
          rounded="xl"
          @click="openDialog('/laceration')"
        >
          laceration
        </v-btn>
      </v-col>
    </v-row>
    <hr />
    <v-row>
      <img
        class="mt-3"
        height=" 32px"
        src="../assets/ChestWall.png"
        alt="chestwall"
      />
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/chesttrauma')"
        >
          chest trauma
        </v-btn>
      </v-col>
    </v-row>
    <hr />
    <v-row>
      <img class="mt-3" height="32px" src="../assets/back.png" alt="" />
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/backpain')"
        >
          back pain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/thoracicbackpain')"
        >
          thoracic back pain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/backinjury')"
        >
          back injury
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/pilonidalcyst')"
        >
          pilonidal cyst
        </v-btn>
      </v-col>
    </v-row>
    <hr />
    <v-row>
      <img
        class="mt-3"
        height="32px"
        src="../assets/hand.png"
        alt="hand"
      />
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/paronychia')"
        >
          Paronychia
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/thumbsprain')"
        >
          Thumb Sprain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/kanaval')"
        >
          kanavel
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/fingeramputation')"
        >
          Finger amputation
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/fingerfx')"
        >
          finger fx
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/boxerfx')"
        >
          boxer fx
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/wristfx')"
        >
          Wrist fx
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/nailavulsion')"
        >
          Nail Avulsion
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="warning"
          size="small"
          rounded="xl"
          @click="openDialog('/trephination')"
        >
          trephination
        </v-btn>
      </v-col>
    </v-row>
    <hr />
    <v-row>
      <img class="mt-3" height="32px" src="../assets/hip.png" alt="" />
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/sciatica')"
        >
          sciatica
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="warning"
          size="small"
          rounded="xl"
          @click="openDialog('/contusion')"
        >
          contusion
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/hipsprain')"
        >
          hip sprain
        </v-btn>
      </v-col>
  
    </v-row>
    <hr />
    <v-row>
      <img  class ="mt-3"
          height="32px"
      src="../assets/knee.png" alt="">
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/kneesprain')"
        >
          knee sprain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/compartmentsyndrome')"
        >
          not Compartment Syndrome
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/leginjury')"
        >
          leg Injury
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/kneeeffusion')"
        >
          knee effusion
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="primary"
          size="small"
          rounded="xl"
          @click="openDialog('/legpain')"
        >
          Leg Pain
        </v-btn>
      </v-col>
    </v-row>
    <hr>
<v-row>
  <img class="mt-3" height="32px" src="../assets/ankle.png" alt="" />
  <v-col>
    <v-btn
      color="primary"
      size="small"
      rounded="xl"
      @click="openDialog('/anklesprain')"
    >
      Ankle Sprain
    </v-btn>
  </v-col>
  <v-col>
    <v-btn
      color="primary"
      size="small"
      rounded="xl"
      @click="openDialog('/achillestendonitis')"
    >
      achilles Tendonitis
    </v-btn>
  </v-col>
  <v-col>
    <v-btn
      color="primary"
      size="small"
      rounded="xl"
      @click="openDialog('/anklefx')"
    >
      ankle fx
    </v-btn>

  </v-col>
  <v-col>
    <v-btn
      color="warning"
      size="small"
      rounded="xl"
      @click="openDialog('/conscioussedation')"
    >
      conscious sedation
    </v-btn>
  </v-col>

</v-row>
<hr>
  <v-row>
    <img class="mt-3" height="32px" src="../assets/foot.png" alt="" />
    <v-col>
      <v-btn
        color="primary"
        size="small"
        rounded="xl"
        @click="openDialog('/footpuncture')"
      >
        foot puncture
      </v-btn>

    </v-col>
    <v-col>
      <v-btn
        color="warning"
        size="small"
        rounded="xl"
        @click="openDialog('/fbnoremoval')"
      >
        FB NO removal
      </v-btn>
    </v-col>
        <v-col>
      <v-btn
        color="warning"
        size="small"
        rounded="xl"
        @click="openDialog('/fbremoval')"
      >
        FB + removal
      </v-btn>
    </v-col>
    <v-col>
      <v-btn
        color="primary"
        size="small"
        rounded="xl"
        @click="openDialog('/footpain')"
      >
        foot pain
      </v-btn>
    </v-col>
    <v-col>
      <v-btn
        color="primary"
        size="small"
        rounded="xl"
        @click="openDialog('/footsprain')"
      >
        foot sprain
      </v-btn>
    </v-col>
    <v-col>
      <v-btn
        color="primary"
        size="small"
        rounded="xl"
        @click="openDialog('/footfx')"
      >
        foot fx
      </v-btn>
    </v-col>
    <v-col>
      <v-btn
        color="primary"
        size="small"
        rounded="xl"
        @click="openDialog('/gout')"
      >
        gout
      </v-btn>
    </v-col>
    <v-col>
      <v-btn
        color="primary"
        size="small"
        rounded="xl"
        @click="openDialog('/footparesthesia')"
      >
        foot paresthesia
      </v-btn>
    </v-col>
    <v-col>
      <v-btn
        color="primary"
        size="small"
        rounded="xl"
        @click="openDialog('/paronychia')"
      >
        paronychia
      </v-btn>
    </v-col>
    <v-col>
      <v-btn
        color="primary"
        size="small"
        rounded="xl"
        @click="openDialog('/toefx')"
      >
        toe fx
      </v-btn>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      showRouterView: false,
      dialogRoutes: [
        "/headinjury",
        "/headinjury-no-ct",
        "/concussion",
        "/nonaccidental",
        "/pediheadinjuryalgorithm",
        "/severeTBI",
        "/sty",
        "/conjunctivitis",
        "/eyefb",
        "/abrasion",
        "/cornealulcer",
        "/blurry",
        "/notglaucoma",
        "/subconjunctivalhemorrhage",
        "/facialinjury",
        "/nasalinjury",
        "/DentalInjury",
        "/cervicalradiculopathy",
        "/trapeziusspasm",
        "/neckpain",
        "/upperback",
        "/upperbackinjury",
        "/shouldersprain",
        "/rotatorcuff",
        "/shoulderbruise",
        "/arthritis",
        "/acseparation",
        "/claviclefx",
        "/proximalhumerusfx",
        "/elbowfx",
        "/injurymild",
        "/wristfx",
        "/wristsprain",
        "/bursitis",
        "/laceration",
        "/chesttrauma",
        "/backpain",
        "/thoracicbackpain",
        "/backinjury",
        "/pilonidalcyst",
        "/paronychia",
        "/thumbsprain",
        "/kanaval",
        "/fingeramputation",
        "/fingerfx",
        "/boxerfx",
        "/nailavulsion",
        "/trephination",
        "/sciatica",
        "/contusion",
        "/hipsprain",
        "/kneesprain",
        "/compartmentsyndrome",
        "/leginjury",
        "/kneeeffusion",
        "/legpain",
        "/anklesprain",
        "/achillestendonitis",
        "/anklefx",
        "/conscioussedation",
        "/footpuncture",
        "/fbnoremoval",
        "/fbremoval",
        "/footpain",
        "/footsprain",
        "/footfx",
        "/gout",
        "/footparesthesia",
        "/toefx",
        
      ],
    };
  },
  methods: {
    openDialog(route) {
      this.$router.push(route);
    },
    closeDialog() {
      this.showRouterView = false;
      this.$router.push("/");
    },
  },
  watch: {
    $route(to) {
      this.showRouterView = this.dialogRoutes.includes(to.path);
    },
  },
};
</script>
