<template>
  <div>
    <h1>Home Page</h1>
    <div>
      <v-btn
        v-for="i in 50"
        :key="i"
        :to="`/button-${i}`"
        class="ma-2"
      >
        Button {{ i }}
      </v-btn>
    </div>
  </div>
</template>
