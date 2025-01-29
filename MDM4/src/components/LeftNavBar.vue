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
  
             { label: "Adult", color: "primary", route: "/adult" },
        { label: "Mom", color: "primary", route: "/mom" },
        { label: "Dad", color: "primary", route: "/dad" },
        { label: "Parents", color: "primary", route: "/parents" },
        { label: "Guardian", color: "primary", route: "/guardian" },
        { label: "URI", color: "info", route: "/uri" },
        { label: "Dx:URI", color: "info", route: "/dx-uri" },
        { label: "Sinus", color: "info", route: "/sinus" },
        { label: "Dx:Sinus", color: "info", route: "/dx-sinus" },
        { label: "Bronchitis", color: "warning", route: "/bronchitis" },
        { label: "Dx:Bronchitis", color: "warning", route: "/dx-bronchitis" },
        { label: "Flu", color: "success", route: "/flu" },
        { label: "Dx:Flu", color: "success", route: "/dx-flu" },
        { label: "Pharyngitis", color: "success", route: "/pharyngitis" },
        { label: "Dx:Pharyngitis", color: "success", route: "/dx-pharyngitis" },
        { label: "Splint Check", color: "secondary", route: "/splint-check" },
        { label: "EKG", color: "secondary", route: "/ekg" },
        { label: "Aware", color: "secondary", route: "/aware" },
        
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
