<template>
  <v-navigation-drawer
    app
    color="#912737"
    class="rounded"
    width="200"
    :image="backgroundImage"
  >
    <v-list>
      <v-list-item>
        <v-list-item-title>Quick Access Buttons</v-list-item-title>
      </v-list-item>
      <v-list-item
        v-for="button in buttons"
        :key="button.label"
      >
        <v-btn :color="button.color" @click="navigate(button.route)">
          {{ button.label }}
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "LeftNavBar",
  data() {
    return {
      buttons: [
        { label: "HOME / Refresh", color: "yellow", route: "/" },
        { label: "MDM", color: "#63b0cf", route: "/mdm" },
        { label: "Diagnosis Codes", color: "#63b0cf", route: "/diagnosis-codes" },
      ],
      backgroundImage: new URL('@/assets/RedNavBarBackground.png', import.meta.url).href,
    };
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
/* Add custom styles here */
</style>
