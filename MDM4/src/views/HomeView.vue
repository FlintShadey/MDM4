<template>
  <v-container>
    <!-- =========================
         Row 1: Head Injury
    ========================== -->
    <v-row>
      <img
        src="../assets/ImageHeadInjury.png"
        alt="Head Injury"
        height="26px"
        class="mt-2"
      />
      <v-col>
        <v-btn
          :color="getButtonColor('Head Injury')"
          size="small"
          rounded="xl"
          @click="openDialog('/headinjury')"
        >
          Head Injury
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Head Injury No CT')"
          size="small"
          rounded="xl"
          @click="openDialog('/headinjury-no-ct')"
        >
          Head Injury No CT
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Concussion')"
          size="small"
          rounded="xl"
          @click="openDialog('/concussion')"
        >
          Concussion
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Non-Accidental')"
          size="small"
          rounded="xl"
          @click="openDialog('/nonaccidental')"
        >
          Non-Accidental
        </v-btn>
      </v-col>
      <!-- Keep the grey color as-is -->
      <v-col>
        <v-btn
          color="grey"
          size="small"
          @click="openDialog('/pediheadinjuryalgorithm')"
        >
          Pedi TBI Algorithm
        </v-btn>
      </v-col>
      <!-- Keep the grey color as-is -->
      <v-col>
        <v-btn color="grey" size="small" @click="openDialog('/severeTBI')">
          Severe TBI
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 2: Eye
    ========================== -->
    <v-row class="small-vertical">
      <img src="../assets/eye.png" alt="eye" height="26px" class="mt-3" />
      <v-col>
        <v-btn
          :color="getButtonColor('Sty')"
          size="small"
          rounded="xl"
          @click="openDialog('/sty')"
        >
          Sty
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Conjunctivitis')"
          size="small"
          rounded="xl"
          @click="openDialog('/conjunctivitis')"
        >
          Conjunctivitis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Eye FB')"
          size="small"
          rounded="xl"
          @click="openDialog('/eyefb')"
        >
          Eye FB
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Abrasion')"
          size="small"
          rounded="xl"
          @click="openDialog('/abrasion')"
        >
          Abrasion
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Corneal Ulcer')"
          size="small"
          rounded="xl"
          @click="openDialog('/cornealulcer')"
        >
          Corneal Ulcer
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Blurry')"
          size="small"
          rounded="xl"
          @click="openDialog('/blurry')"
        >
          Blurry
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Not Glaucoma')"
          size="small"
          rounded="xl"
          @click="openDialog('/notglaucoma')"
        >
          Not Glaucoma
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Subconjunctival Hemorrhage')"
          size="small"
          rounded="xl"
          @click="openDialog('/subconjunctivalhemorrhage')"
        >
          Subconjunctival Hemorrhage
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 3: Face Injury
    ========================== -->
    <v-row>
      <img
        class="mt-3"
        height="26px"
        src="../assets/faceInjury.png"
        alt="faceInjury"
      />
      <v-col>
        <v-btn
          :color="getButtonColor('Facial Injury')"
          size="small"
          rounded="xl"
          @click="openDialog('/facialinjury')"
        >
          Facial Injury
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Nasal Injury')"
          size="small"
          rounded="xl"
          @click="openDialog('/nasalinjury')"
        >
          Nasal Injury
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Dental Injury')"
          size="small"
          rounded="xl"
          @click="openDialog('/DentalInjury')"
        >
          Dental Injury
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 4: Neck & Upper Back
    ========================== -->
    <v-row>
      <img
        class="mt-3"
        height="26px"
        src="../assets/neckUpperBack.png"
        alt="Neck & Upper Back"
      />
      <v-col>
        <v-btn
          :color="getButtonColor('Cervical Radiculopathy')"
          size="small"
          rounded="xl"
          @click="openDialog('/cervicalradiculopathy')"
        >
          Cervical Radiculopathy
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Trapezius Spasm')"
          size="small"
          rounded="xl"
          @click="openDialog('/trapeziusspasm')"
        >
          Trapezius Spasm
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Neck Pain')"
          size="small"
          rounded="xl"
          @click="openDialog('/neckpain')"
        >
          Neck Pain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Upper Back')"
          size="small"
          rounded="xl"
          @click="openDialog('/upperback')"
        >
          Upper Back
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Upper Back Injury')"
          size="small"
          rounded="xl"
          @click="openDialog('/upperbackinjury')"
        >
          Upper Back Injury
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 5: Shoulder
    ========================== -->
    <v-row>
      <img
        class="mt-3"
        height="26px"
        src="../assets/shoulder.png"
        alt="Shoulder"
      />
      <v-col>
        <v-btn
          :color="getButtonColor('Shoulder Sprain')"
          size="small"
          rounded="xl"
          @click="openDialog('/shouldersprain')"
        >
          Shoulder Sprain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Rotator Cuff')"
          size="small"
          rounded="xl"
          @click="openDialog('/rotatorcuff')"
        >
          Rotator Cuff
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Shoulder Contusion')"
          size="small"
          rounded="xl"
          @click="openDialog('/shoulderbruise')"
        >
          Shoulder Contusion
        </v-btn>
      </v-col>
      <!-- Keep color="warning" -->
      <v-col>
        <v-btn
          color="warning"
          size="small"
          rounded="xl"
          @click="openDialog('/arthritis')"
        >
          arthritis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('AC Separation')"
          size="small"
          rounded="xl"
          @click="openDialog('/acseparation')"
        >
          AC Separation
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('clavicle fx')"
          size="small"
          rounded="xl"
          @click="openDialog('/claviclefx')"
        >
          clavicle fx
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Prox Humerus FX')"
          size="small"
          rounded="xl"
          @click="openDialog('/proximalhumerusfx')"
        >
          Prox Humerus FX
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Elbow FX')"
          size="small"
          rounded="xl"
          @click="openDialog('/elbowfx')"
        >
          Elbow FX
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 6: Arm/Wrist
    ========================== -->
    <v-row>
      <img class="mt-3" src="../assets/arm.png" alt="arm" />
      <!-- Keep warning color -->
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
          :color="getButtonColor('wrist fx')"
          size="small"
          rounded="xl"
          @click="openDialog('/wristfx')"
        >
          wrist fx
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('wrist sprain')"
          size="small"
          rounded="xl"
          @click="openDialog('/wristsprain')"
        >
          wrist sprain
        </v-btn>
      </v-col>
      <!-- Keep warning color -->
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
      <!-- Keep warning color -->
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

    <v-divider></v-divider>


    <!-- =========================
         Row 7: Chest Trauma
    ========================== -->
    <v-row>
      <img
        class="mt-3"
        height="26px"
        src="../assets/ChestWall.png"
        alt="chestwall"
      />
      <v-col>
        <v-btn
          :color="getButtonColor('chest trauma')"
          size="small"
          rounded="xl"
          @click="openDialog('/chesttrauma')"
        >
          chest trauma
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 8: Back
    ========================== -->
    <v-row>
      <img class="mt-3" height="26px" src="../assets/back.png" alt="back" />
      <v-col>
        <v-btn
          :color="getButtonColor('back pain')"
          size="small"
          rounded="xl"
          @click="openDialog('/backpain')"
        >
          back pain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('thoracic back pain')"
          size="small"
          rounded="xl"
          @click="openDialog('/thoracicbackpain')"
        >
          thoracic back pain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('back injury')"
          size="small"
          rounded="xl"
          @click="openDialog('/backinjury')"
        >
          back injury
        </v-btn>
      </v-col>
      <v-col>
        <!-- Sciatica repeated in multiple places => same label for same color -->
        <v-btn
          :color="getButtonColor('sciatica')"
          size="small"
          rounded="xl"
          @click="openDialog('/sciatica')"
        >
          sciatica
        </v-btn>
      </v-col>
      <v-col>
        <!-- Pilonidal Cyst repeated too => same label string each time -->
        <v-btn
          :color="getButtonColor('pilonidal cyst')"
          size="small"
          rounded="xl"
          @click="openDialog('/pilonidalcyst')"
        >
          pilonidal cyst
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 9: Hand
    ========================== -->
    <v-row>
      <img class="mt-3" height="26px" src="../assets/hand.png" alt="hand" />
      <v-col>
        <v-btn
          :color="getButtonColor('Paronychia')"
          size="small"
          rounded="xl"
          @click="openDialog('/paronychia')"
        >
          Paronychia
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Thumb Sprain')"
          size="small"
          rounded="xl"
          @click="openDialog('/thumbsprain')"
        >
          Thumb Sprain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('kanavel')"
          size="small"
          rounded="xl"
          @click="openDialog('/kanaval')"
        >
          kanavel
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Finger amputation')"
          size="small"
          rounded="xl"
          @click="openDialog('/fingeramputation')"
        >
          Finger amputation
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('finger fx')"
          size="small"
          rounded="xl"
          @click="openDialog('/fingerfx')"
        >
          finger fx
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('boxer fx')"
          size="small"
          rounded="xl"
          @click="openDialog('/boxerfx')"
        >
          boxer fx
        </v-btn>
      </v-col>
      <!-- We see "wrist fx" already used above, so that label will repeat the color if we do so, 
           but here's a new "Wrist fx" with slightly different case. 
           To keep them identical, pass the same exact string as above if you like. 
           Or keep it separate if you prefer a different color. 
        -->
      <v-col>
        <v-btn
          :color="getButtonColor('wrist fx')"
          size="small"
          rounded="xl"
          @click="openDialog('/wristfx')"
        >
          Wrist fx
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Nail Avulsion')"
          size="small"
          rounded="xl"
          @click="openDialog('/nailavulsion')"
        >
          Nail Avulsion
        </v-btn>
      </v-col>
      <!-- Keep warning color -->
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

    <v-divider></v-divider>


    <!-- =========================
         Row 10: Hip
    ========================== -->
    <v-row>
      <img class="mt-3" height="26px" src="../assets/hip.png" alt="hip" />
      <!-- Sciatica repeated again => same label "sciatica" for same color -->
      <v-col>
        <v-btn
          :color="getButtonColor('sciatica')"
          size="small"
          rounded="xl"
          @click="openDialog('/sciatica')"
        >
          sciatica
        </v-btn>
      </v-col>
      <!-- Keep warning color -->
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
          :color="getButtonColor('hip sprain')"
          size="small"
          rounded="xl"
          @click="openDialog('/hipsprain')"
        >
          hip sprain
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 11: Knee/Leg
    ========================== -->
    <v-row>
      <img class="mt-3" height="26px" src="../assets/knee.png" alt="knee" />
      <v-col>
        <v-btn
          :color="getButtonColor('knee sprain')"
          size="small"
          rounded="xl"
          @click="openDialog('/kneesprain')"
        >
          knee sprain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('not Compartment Syndrome')"
          size="small"
          rounded="xl"
          @click="openDialog('/compartmentsyndrome')"
        >
          not Compartment Syndrome
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('leg Injury')"
          size="small"
          rounded="xl"
          @click="openDialog('/leginjury')"
        >
          leg Injury
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('knee effusion')"
          size="small"
          rounded="xl"
          @click="openDialog('/kneeeffusion')"
        >
          knee effusion
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Leg Pain')"
          size="small"
          rounded="xl"
          @click="openDialog('/legpain')"
        >
          Leg Pain
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 12: Ankle
    ========================== -->
    <v-row>
      <img class="mt-3" height="26px" src="../assets/ankle.png" alt="ankle" />
      <v-col>
        <v-btn
          :color="getButtonColor('Ankle Sprain')"
          size="small"
          rounded="xl"
          @click="openDialog('/anklesprain')"
        >
          Ankle Sprain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('achilles Tendonitis')"
          size="small"
          rounded="xl"
          @click="openDialog('/achillestendonitis')"
        >
          achilles Tendonitis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('ankle fx')"
          size="small"
          rounded="xl"
          @click="openDialog('/anklefx')"
        >
          ankle fx
        </v-btn>
      </v-col>
      <!-- Keep warning color -->
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

    <v-divider></v-divider>


    <!-- =========================
         Row 13: Foot
    ========================== -->
    <v-row>
      <img class="mt-3" height="26px" src="../assets/foot.png" alt="foot" />
      <v-col>
        <v-btn
          :color="getButtonColor('foot puncture')"
          size="small"
          rounded="xl"
          @click="openDialog('/footpuncture')"
        >
          foot puncture
        </v-btn>
      </v-col>
      <!-- Keep warning color -->
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
      <!-- Keep warning color -->
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
          :color="getButtonColor('foot pain')"
          size="small"
          rounded="xl"
          @click="openDialog('/footpain')"
        >
          foot pain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('foot sprain')"
          size="small"
          rounded="xl"
          @click="openDialog('/footsprain')"
        >
          foot sprain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('foot fx')"
          size="small"
          rounded="xl"
          @click="openDialog('/footfx')"
        >
          foot fx
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('gout')"
          size="small"
          rounded="xl"
          @click="openDialog('/gout')"
        >
          gout
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('foot paresthesia')"
          size="small"
          rounded="xl"
          @click="openDialog('/footparesthesia')"
        >
          foot paresthesia
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('paronychia')"
          size="small"
          rounded="xl"
          @click="openDialog('/paronychia')"
        >
          paronychia
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('toe fx')"
          size="small"
          rounded="xl"
          @click="openDialog('/toefx')"
        >
          toe fx
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 14: Car / Trauma
    ========================== -->
    <v-row>
      <img class="mt-3" height="26px" src="../assets/car.png" alt="mvc" />
      <v-col>
        <v-btn
          :color="getButtonColor('motor vehicle collision')"
          size="small"
          rounded="xl"
          @click="openDialog('/MVC')"
        >
          motor vehicle collision
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Major Trauma')"
          size="small"
          rounded="xl"
          @click="openDialog('/majortrauma')"
        >
          Major Trauma
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('fall')"
          size="small"
          rounded="xl"
          @click="openDialog('/fall')"
        >
          fall
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Date rape')"
          size="small"
          rounded="xl"
          @click="openDialog('/daterape')"
        >
          Date rape
        </v-btn>
      </v-col>
      <!-- Keep warning color -->
      <v-col>
        <v-btn
          color="warning"
          size="small"
          rounded="xl"
          @click="openDialog('/packingremoved')"
        >
          Packing removed
        </v-btn>
      </v-col>
      <!-- Keep warning color -->
      <v-col>
        <v-btn
          color="warning"
          size="small"
          rounded="xl"
          @click="openDialog('/postsurgicalwound')"
        >
          Post surgical wound
        </v-btn>
      </v-col>
      <!-- Keep warning color -->
      <v-col>
        <v-btn
          color="warning"
          size="small"
          rounded="xl"
          @click="openDialog('/packingchange')"
        >
          packing change
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 15: Fire / Burn
    ========================== -->
    <v-row>
      <img src="../assets/fire.png" alt="fire" height="26px" class="mt-3" />
      <v-col>
        <v-btn
          :color="getButtonColor('burn')"
          size="small"
          rounded="xl"
          @click="openDialog('/burn')"
        >
          burn
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('inhalation injury')"
          size="small"
          rounded="xl"
          @click="openDialog('/inhalationinjury')"
        >
          inhalation injury
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 16: Animal / Insect
    ========================== -->
    <v-row>
      <img src="../assets/bite.png" alt="bite" height="26px" class="mt-3" />
      <v-col>
        <v-btn
          :color="getButtonColor('animal bite')"
          size="small"
          rounded="xl"
          @click="openDialog('/animalbite')"
        >
          animal bite
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('insect bite')"
          size="small"
          rounded="xl"
          @click="openDialog('/insectbite')"
        >
          insect bite
        </v-btn>
      </v-col>
    </v-row>

    <hr style="border-top: 5px solid white" />


    <!-- =========================
         Row 17: Head (non-trauma)
    ========================== -->
    <v-row>
      <img src="../assets/head.png" alt="head" height="26px" class="mt-3" />
      <v-col>
        <v-btn
          :color="getButtonColor('Headache')"
          size="small"
          rounded="xl"
          @click="openDialog('/headache')"
        >
          Headache
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Migraine')"
          size="small"
          rounded="xl"
          @click="openDialog('/migraine')"
        >
          Migraine
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Not Pre-eclampsia')"
          size="small"
          rounded="xl"
          @click="openDialog('/notpreEclampsia')"
        >
          Not Pre-eclampsia
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('hypertension')"
          size="small"
          rounded="xl"
          @click="openDialog('/hypertension')"
        >
          hypertension
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 18: Ear
    ========================== -->
    <v-row>
      <img src="../assets/ear.png" alt="ear" height="26px" class="mt-3" />
      <v-col>
        <v-btn
          :color="getButtonColor('Ear FB')"
          size="small"
          rounded="xl"
          @click="openDialog('/earfb')"
        >
          Ear FB
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Otitis Media')"
          size="small"
          rounded="xl"
          @click="openDialog('/otitismedia')"
        >
          Otitis Media
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Otitis Externa')"
          size="small"
          rounded="xl"
          @click="openDialog('/otitisexterna')"
        >
          Otitis Externa
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('cerumen impaction')"
          size="small"
          rounded="xl"
          @click="openDialog('/cerumenimpaction')"
        >
          cerumen impaction
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('perforation')"
          size="small"
          rounded="xl"
          @click="openDialog('/perforation')"
        >
          perforation
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 19: Nose
    ========================== -->
    <v-row>
      <img src="../assets/nose.png" alt="nose" height="26px" class="mt-3" />
      <v-col>
        <v-btn
          :color="getButtonColor('Nose FB')"
          size="small"
          rounded="xl"
          @click="openDialog('/nosefb')"
        >
          Nose FB
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Epistaxis')"
          size="small"
          rounded="xl"
          @click="openDialog('/epistaxis')"
        >
          Epistaxis
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 20: Mouth
    ========================== -->
    <v-row>
      <img src="../assets/mouth.png" alt="mouth" height="26px" class="mt-3" />
      <v-col>
        <v-btn
          :color="getButtonColor('Sore Throat')"
          size="small"
          rounded="xl"
          @click="openDialog('/sorethroat')"
        >
          Sore Throat
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Toothache')"
          size="small"
          rounded="xl"
          @click="openDialog('/toothache')"
        >
          Toothache
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Pharyngeal Scratch')"
          size="small"
          rounded="xl"
          @click="openDialog('/pharyngealscratch')"
        >
          Pharyngeal Scratch
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Pharyngeal Cellulitis')"
          size="small"
          rounded="xl"
          @click="openDialog('/pharyngealcellulitis')"
        >
          Pharyngeal Cellulitis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Preseptal Cellulitis')"
          size="small"
          rounded="xl"
          @click="openDialog('/preseptalcellulitis')"
        >
          Preseptal Cellulitis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Cold Sore')"
          size="small"
          rounded="xl"
          @click="openDialog('/coldsore')"
        >
          Cold Sore
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('mono')"
          size="small"
          rounded="xl"
          @click="openDialog('/mono')"
        >
          mono
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('tmj')"
          size="small"
          rounded="xl"
          @click="openDialog('/tmj')"
        >
          tmj
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 21: Virus / URI
    ========================== -->
    <v-row>
      <img src="../assets/virus.png" alt="virus" height="26px" class="mt-3" />
      <v-col>
        <v-btn
          :color="getButtonColor('URI')"
          size="small"
          rounded="xl"
          @click="openDialog('/uri')"
        >
          URI
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Sinusitis')"
          size="small"
          rounded="xl"
          @click="openDialog('/sinusitis')"
        >
          Sinusitis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Bronchitis')"
          size="small"
          rounded="xl"
          @click="openDialog('/bronchitis')"
        >
          Bronchitis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Flu')"
          size="small"
          rounded="xl"
          @click="openDialog('/flu')"
        >
          Flu
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Covid')"
          size="small"
          rounded="xl"
          @click="openDialog('/covid')"
        >
          Covid
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('cough')"
          size="small"
          rounded="xl"
          @click="openDialog('/cough')"
        >
          cough
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Allergic Rhinitis')"
          size="small"
          rounded="xl"
          @click="openDialog('/allergicrhinitis')"
        >
          Allergic Rhinitis
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 22: Lung
    ========================== -->
    <v-row>
      <img src="../assets/lung.png" alt="lung" height="26px" class="mt-3" />
      <v-col>
        <v-btn
          :color="getButtonColor('dyspnea')"
          size="small"
          rounded="xl"
          @click="openDialog('/dyspnea')"
        >
          dyspnea
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('asthma')"
          size="small"
          rounded="xl"
          @click="openDialog('/asthma')"
        >
          asthma
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('copd')"
          size="small"
          rounded="xl"
          @click="openDialog('/copd')"
        >
          copd
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('pneumonia')"
          size="small"
          rounded="xl"
          @click="openDialog('/pneumonia')"
        >
          pneumonia
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('hiccups')"
          size="small"
          rounded="xl"
          @click="openDialog('/hiccups')"
        >
          hiccups
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 23: Heart
    ========================== -->
    <v-row>
      <img src="../assets/heart.png" alt="heart" height="26px" class="mt-3" />
      <v-col>
        <v-btn
          :color="getButtonColor('Chest Pain')"
          size="small"
          rounded="xl"
          @click="openDialog('/chestpain')"
        >
          Chest Pain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Chest pain admission')"
          size="small"
          rounded="xl"
          @click="openDialog('/chestpainadmission')"
        >
          Chest pain admission
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('pleurisy')"
          size="small"
          rounded="xl"
          @click="openDialog('/pleurisy')"
        >
          pleurisy
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Palpitations')"
          size="small"
          rounded="xl"
          @click="openDialog('/palpitations')"
        >
          Palpitations
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('bradycardia')"
          size="small"
          rounded="xl"
          @click="openDialog('/bradycardia')"
        >
          bradycardia
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 24: Abdomen
    ========================== -->
    <v-row>
      <img
        src="../assets/abdomen.png"
        alt="abdomen"
        class="mt-3"
        height="26px"
      />
      <v-col>
        <v-btn
          :color="getButtonColor('♀ Gen Abd pain')"
          size="small"
          rounded="xl"
          @click="openDialog('/femaleabdominalpain')"
        >
          ♀ Gen Abd pain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('♂ Gen Abd pain')"
          size="small"
          rounded="xl"
          @click="openDialog('/maleabdominalpain')"
        >
          ♂ Gen Abd pain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('constipation')"
          size="small"
          rounded="xl"
          @click="openDialog('/constipation')"
        >
          constipation
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('diverticulitis')"
          size="small"
          rounded="xl"
          @click="openDialog('/diverticulitis')"
        >
          diverticulitis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Biliary Colic')"
          size="small"
          rounded="xl"
          @click="openDialog('/biliarycolic')"
        >
          Biliary Colic
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Kidney Stone')"
          size="small"
          rounded="xl"
          @click="openDialog('/kidneystone')"
        >
          Kidney Stone
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Pyelonephritis')"
          size="small"
          rounded="xl"
          @click="openDialog('/pyelonephritis')"
        >
          Pyelonephritis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('colitis')"
          size="small"
          rounded="xl"
          @click="openDialog('/colitis')"
        >
          colitis
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 25: GI/Vomit
    ========================== -->
    <v-row>
      <img src="../assets/vomit.png" alt="vomit" class="mt-3" height="26px" />
      <v-col>
        <v-btn
          :color="getButtonColor('age')"
          size="small"
          rounded="xl"
          @click="openDialog('/age')"
        >
          age
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('diarrhea')"
          size="small"
          rounded="xl"
          @click="openDialog('/diarrhea')"
        >
          diarrhea
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('gastritis')"
          size="small"
          rounded="xl"
          @click="openDialog('/gastritis')"
        >
          gastritis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('gerd')"
          size="small"
          rounded="xl"
          @click="openDialog('/gerd')"
        >
          gerd
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('hyperemesis gravidarum')"
          size="small"
          rounded="xl"
          @click="openDialog('/hyperemesisgravidarum')"
        >
          hyperemesis gravidarum
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 26: Butt / Rectum
    ========================== -->
    <v-row>
      <img src="../assets/butt.png" alt="butt" class="mt-3" height="26px" />
      <!-- Same label for Pilonidal Cyst => 'pilonidal cyst' -->
      <v-col>
        <v-btn
          :color="getButtonColor('pilonidal cyst')"
          size="small"
          rounded="xl"
          @click="openDialog('/pilonidalcyst')"
        >
          pilonidal cyst
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('hematochezia')"
          size="small"
          rounded="xl"
          @click="openDialog('/hematochezia')"
        >
          hematochezia
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('peri-anal')"
          size="small"
          rounded="xl"
          @click="openDialog('/perianal')"
        >
          peri-anal
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('rectal fissure')"
          size="small"
          rounded="xl"
          @click="openDialog('/rectalfissure')"
        >
          rectal fissure
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Hemorrhoid')"
          size="small"
          rounded="xl"
          @click="openDialog('/hemorrhoid')"
        >
          Hemorrhoid
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 27: Female GU
    ========================== -->
    <v-row>
      <img src="../assets/uterus.png" alt="uterus" class="mt-3" height="26px" />
      <v-col>
        <v-btn
          :color="getButtonColor('uti')"
          size="small"
          rounded="xl"
          @click="openDialog('/uti')"
        >
          uti
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('STD ♀')"
          size="small"
          rounded="xl"
          @click="openDialog('/femalestd')"
        >
          STD ♀
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Dysmenorrhea')"
          size="small"
          rounded="xl"
          @click="openDialog('/dysmenorrhea')"
        >
          Dysmenorrhea
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('threat misc')"
          size="small"
          rounded="xl"
          @click="openDialog('/threatmiscarriage')"
        >
          threat misc
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Ovar Cyst')"
          size="small"
          rounded="xl"
          @click="openDialog('/ovariancyst')"
        >
          Ovar Cyst
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('bartholins')"
          size="small"
          rounded="xl"
          @click="openDialog('/bartholins')"
        >
          bartholins
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Herpes')"
          size="small"
          rounded="xl"
          @click="openDialog('/herpes')"
        >
          Herpes
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('pregnancy pain')"
          size="small"
          rounded="xl"
          @click="openDialog('/pregnancypain')"
        >
          pregnancy pain
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Vaginitis')"
          size="small"
          rounded="xl"
          @click="openDialog('/vaginitis')"
        >
          Vaginitis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('not EP')"
          size="small"
          rounded="xl"
          @click="openDialog('/notectopicpregnancy')"
        >
          not EP
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 28: Male GU
    ========================== -->
    <v-row>
      <img
        src="../assets/eggplant.png"
        alt="eggplant"
        height="26px"
        class="mt-3"
      />
      <v-col>
        <v-btn
          :color="getButtonColor('STD ♂')"
          size="small"
          rounded="xl"
          @click="openDialog('/malestd')"
        >
          STD ♂
        </v-btn>
      </v-col>
      <v-col>
        <!-- "Kidney Stone" repeated => same label if you want same color, 
             but this is a new line "kidney stone"? 
             For consistent color, do the same text 'Kidney Stone' as above. -->
        <v-btn
          :color="getButtonColor('Kidney Stone')"
          size="small"
          rounded="xl"
          @click="openDialog('/kidneystone')"
        >
          kidney stone
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('epididymitis')"
          size="small"
          rounded="xl"
          @click="openDialog('/epididymitis')"
        >
          epididymitis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Balanitis')"
          size="small"
          rounded="xl"
          @click="openDialog('/balanitis')"
        >
          Balanitis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('nl testicle')"
          size="small"
          rounded="xl"
          @click="openDialog('/nlteste')"
        >
          nl testicle
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Urinary Retention')"
          size="small"
          rounded="xl"
          @click="openDialog('/urinaryretention')"
        >
          Urinary Retention
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Phimosis')"
          size="small"
          rounded="xl"
          @click="openDialog('/phimosis')"
        >
          Phimosis
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 29: Leg (DVT, edema, etc.)
    ========================== -->
    <v-row>
      <img src="../assets/leg.png" alt="leg" height="26px" class="mt-3" />
      <v-col>
        <v-btn
          :color="getButtonColor('DVT')"
          size="small"
          rounded="xl"
          @click="openDialog('/dvt')"
        >
          DVT
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Leg edema')"
          size="small"
          rounded="xl"
          @click="openDialog('/legedema')"
        >
          Leg edema
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Neuropathy')"
          size="small"
          rounded="xl"
          @click="openDialog('/neuropathy')"
        >
          Neuropathy
        </v-btn>
      </v-col>
      <!-- Sciatica repeated again => 'sciatica' -->
      <v-col>
        <v-btn
          :color="getButtonColor('sciatica')"
          size="small"
          rounded="xl"
          @click="openDialog('/sciatica')"
        >
          sciatica
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 30: Skin
    ========================== -->
    <v-row>
      <img src="../assets/skin.png" alt="skin" height="26px" class="mt-3" />
      <v-col>
        <v-btn
          :color="getButtonColor('cellulitis')"
          size="small"
          rounded="xl"
          @click="openDialog('/cellulitis')"
        >
          cellulitis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Abscess')"
          size="small"
          rounded="xl"
          @click="openDialog('/abscess')"
        >
          Abscess
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('contact derm')"
          size="small"
          rounded="xl"
          @click="openDialog('/contactdermatitis')"
        >
          contact derm
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Urticaria')"
          size="small"
          rounded="xl"
          @click="openDialog('/urticaria')"
        >
          Urticaria
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('zoster')"
          size="small"
          rounded="xl"
          @click="openDialog('/zoster')"
        >
          zoster
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('tinea')"
          size="small"
          rounded="xl"
          @click="openDialog('/tinea')"
        >
          tinea
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('scabies')"
          size="small"
          rounded="xl"
          @click="openDialog('/scabies')"
        >
          scabies
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('candidiasis')"
          size="small"
          rounded="xl"
          @click="openDialog('/candidiasis')"
        >
          candidiasis
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('viral')"
          size="small"
          rounded="xl"
          @click="openDialog('/viralrash')"
        >
          viral
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('mac/pap')"
          size="small"
          rounded="xl"
          @click="openDialog('/maculopapularrash')"
        >
          mac/pap
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('LN')"
          size="small"
          rounded="xl"
          @click="openDialog('/lymphadenopathy')"
        >
          LN
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('hidradenitis supp')"
          size="small"
          rounded="xl"
          @click="openDialog('/hidradenitissuppurativa')"
        >
          hidradenitis supp
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 31: Neuro
    ========================== -->
    <v-row>
      <img src="../assets/brain.png" alt="neuro" height="26px" class="mt-3" />
      <v-col>
        <v-btn
          :color="getButtonColor('Bell’s Palsy')"
          size="small"
          rounded="xl"
          @click="openDialog('/bellspalsy')"
        >
          Bell's Palsy
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Paresthesia')"
          size="small"
          rounded="xl"
          @click="openDialog('/paresthesia')"
        >
          Paresthesia
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('TIA')"
          size="small"
          rounded="xl"
          @click="openDialog('/tia')"
        >
          TIA
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Vertigo')"
          size="small"
          rounded="xl"
          @click="openDialog('/vertigo')"
        >
          Vertigo
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Presyncope')"
          size="small"
          rounded="xl"
          @click="openDialog('/presyncope')"
        >
          Presyncope
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Seizure')"
          size="small"
          rounded="xl"
          @click="openDialog('/seizure')"
        >
          Seizure
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 32: Psychiatry
    ========================== -->
    <v-row>
      <img src="../assets/psi.png" alt="psychiatry" height="26px" class="mt-3" />
      <v-col>
        <v-btn
          :color="getButtonColor('Anxiety')"
          size="small"
          rounded="xl"
          @click="openDialog('/anxiety')"
        >
          Anxiety
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Safe')"
          size="small"
          rounded="xl"
          @click="openDialog('/safe')"
        >
          Safe
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Accidental Ingestion')"
          size="small"
          rounded="xl"
          @click="openDialog('/accidentalingestion')"
        >
          Accidental Ingestion
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('ETOH')"
          size="small"
          rounded="xl"
          @click="openDialog('/alcohol')"
        >
          ETOH
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>


    <!-- =========================
         Row 33: General
    ========================== -->
    <v-row>
      <img src="../assets/gen.png" alt="general" height="26px" class="mt-3" />
      <v-col>
        <v-btn
          :color="getButtonColor('Allergic Reaction')"
          size="small"
          rounded="xl"
          @click="openDialog('/allergicreaction')"
        >
          Allergic Reaction
        </v-btn>
      </v-col>
      <!-- Hypertension repeated => same label if you want identical color. 
           We'll keep "hypertension" to match above. 
        -->
      <v-col>
        <v-btn
          :color="getButtonColor('hypertension')"
          size="small"
          rounded="xl"
          @click="openDialog('/hypertension')"
        >
          Hypertension
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Med Refill')"
          size="small"
          rounded="xl"
          @click="openDialog('/medrefill')"
        >
          Med Refill
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Fever')"
          size="small"
          rounded="xl"
          @click="openDialog('/fever')"
        >
          Fever
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Hyperglycemia')"
          size="small"
          rounded="xl"
          @click="openDialog('/hyperglycemia')"
        >
          Hyperglycemia
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Dehydration')"
          size="small"
          rounded="xl"
          @click="openDialog('/dehydration')"
        >
          Dehydration
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          :color="getButtonColor('Sickle Cell')"
          size="small"
          rounded="xl"
          @click="openDialog('/sicklecell')"
        >
          Sickle Cell
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
      /* 
       * This is your array of 40 colors, in the exact order requested:
       */
      buttonPalette: [
        "#0F1F37", "#162341", "#1C274B", "#202D54", "#25335D",
        "#2A3867", "#2E3C70", "#334079", "#384583", "#3C4A8C",
        "#423F66", "#473C6F", "#4B3977", "#50367F", "#583184",
        "#613687", "#6A3C89", "#71418D", "#7A448F", "#844A92",
        "#7B365C", "#1C7745", "#20824C", "#249C56", "#26A35A",
        "#2AAD60", "#31B367", "#37BA6F", "#3FC077", "#49C37C",
        "#4CC784", "#7E395F", "#834063", "#894667", "#8E4B6B",
        "#92506E", "#995776", "#A15F7B", "#A7657F", "#AE6B84"
      ],
      /*
       * Dictionary to keep track of which labels have been assigned which color.
       * That way, repeated labels (e.g. "sciatica") map to the same color.
       */
      colorMap: {},
      usedColorsIndex: 0,

      /*
       * Your existing route array 
       * (unchanged, so only included here in full for completeness).
       */
      dialogRoutes: [
        "/headinjury","/headinjury-no-ct","/concussion","/nonaccidental",
        "/pediheadinjuryalgorithm","/severeTBI","/sty","/conjunctivitis",
        "/eyefb","/abrasion","/cornealulcer","/blurry","/notglaucoma",
        "/subconjunctivalhemorrhage","/facialinjury","/nasalinjury","/DentalInjury",
        "/cervicalradiculopathy","/trapeziusspasm","/neckpain","/upperback",
        "/upperbackinjury","/shouldersprain","/rotatorcuff","/shoulderbruise",
        "/arthritis","/acseparation","/claviclefx","/proximalhumerusfx","/elbowfx",
        "/injurymild","/wristfx","/wristsprain","/bursitis","/laceration",
        "/chesttrauma","/backpain","/thoracicbackpain","/backinjury","/pilonidalcyst",
        "/paronychia","/thumbsprain","/kanavel","/fingeramputation","/fingerfx",
        "/boxerfx","/nailavulsion","/trephination","/sciatica","/contusion","/hipsprain",
        "/kneesprain","/compartmentsyndrome","/leginjury","/kneeeffusion","/legpain",
        "/anklesprain","/achillestendonitis","/anklefx","/conscioussedation","/footpuncture",
        "/fbnoremoval","/fbremoval","/footpain","/footsprain","/footfx","/gout",
        "/footparesthesia","/toefx","/mvc","/majortrauma","/fall","/daterape",
        "/packingremoved","/postsurgicalwound","/packingchange","/burn","/inhalationinjury",
        "/animalbite","/insectbite","/headache","/migraine","/notpreEclampsia",
        "/hypertension","/earfb","/otitismedia","/otitisexterna","/cerumenimpaction",
        "/perforation","/nosefb","/epistaxis","/sorethroat","/toothache","/pharyngealscratch",
        "/pharyngealcellulitis","/preseptalcellulitis","/coldsore","/mono","/tmj","/uri",
        "/sinusitis","/bronchitis","/flu","/covid","/cough","/allergicrhinitis",
        "/dyspnea","/asthma","/copd","/pneumonia","/hiccups","/chestpain",
        "/chestpainadmission","/pleurisy","/palpitations","/bradycardia","/femaleabdominalpain",
        "/maleabdominalpain","/constipation","/diverticulitis","/biliarycolic","/kidneystone",
        "/pyelonephritis","/colitis","/age","/diarrhea","/gastritis","/gerd",
        "/hyperemesisgravidarum","/hematochezia","/perianal","/rectalfissure","/hemorrhoid","/uti",
        "/femalestd","/dysmenorrhea","/threatmiscarriage","/ovariancyst","/bartholins","/herpes",
        "/pregnancypain","/vaginitis","/notectopicpregnancy","/malestd","/epididymitis","/balanitis",
        "/nlteste","/urinaryretention","/phimosis","/dvt","/legedema","/neuropathy",
        "/cellulitis","/abscess","/contactdermatitis","/urticaria","/zoster","/tinea","/scabies",
        "/candidiasis","/viralrash","/maculopapularrash","/lymphadenopathy","/hidradenitissuppurativa",
        "/bellspalsy","/paresthesia","/tia","/vertigo","/presyncope","/seizure","/anxiety",
        "/safe","/accidentalingestion","/alcohol","/allergicreaction","/hypertension","/medrefill",
        "/fever","/hyperglycemia","/dehydration","/sicklecell"
      ],
    };
  },
  methods: {
    // Simple route navigation
    openDialog(route) {
      this.$router.push(route);
    },
    closeDialog() {
      this.showRouterView = false;
      this.$router.push("/");
    },

    // Returns a color from the palette for each distinct label
    getButtonColor(label) {
      // If we already assigned a color for this label, reuse it:
      if (this.colorMap[label]) {
        return this.colorMap[label];
      }
      // Otherwise pick the next color in sequence:
      const color =
        this.buttonPalette[this.usedColorsIndex % this.buttonPalette.length];
      // Store it so repeated labels match:
      this.colorMap[label] = color;
      this.usedColorsIndex++;
      return color;
    },
  },
  watch: {
    // Show a dialog if route is in our "dialogRoutes" array
    $route(to) {
      this.showRouterView = this.dialogRoutes.includes(to.path);
    },
  },
};
</script>
