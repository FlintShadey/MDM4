<template>
  <v-navigation-drawer
    permanent
    app
    color="#3281a8"
    class="rounded"
    location="right"
    width="250"
    image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
  >
    <v-list>
      <v-list-item>
        <v-list-item-title >Search</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Calculations</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Likely MDM</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Conscious Sedcation</v-list-item-title></v-list-item>

      <v-list-item>
        <v-list-item-title>Observation</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>CB Randomizer</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>image / light that shows internet status</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "RightNavBar",
};
</script>

<style scoped>
/* Add any specific styling here if needed */
</style>
