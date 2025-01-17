<template>
  <div class="justify-center">
    <v-row justify="center">
      <v-btn @click="setLink('link1')" color="red" class="mx-10">
        &lt; 2 years old
      </v-btn>

      <v-btn @click="setLink('link2')" color="blue" class="mx-10">
        &gt; 2 years old
      </v-btn>
    </v-row>
    <iframe
      v-if="selectedLink === 'link1'"
      src="https://californiaacep.org/resource/resmgr/images/membership_marketing/pecarn1.jpg"
      width="100%"
      height="800"
    ></iframe>
    <iframe
      v-else
      src="https://californiaacep.org/resource/resmgr/files/images/pecarn_over_2.jpg"
      width="100%"
      height="800"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "PediHeadInjuryAlgorithm",
  data() {
    return {
      selectedLink: "link1",
    };
  },
  methods: {
    setLink(link) {
      this.selectedLink = link;
    },
  },
};
</script>
