<template>
  <v-app :dark="dark">
    <!--MAIN CONTENT-->
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-baseline>
          <v-flex shrink>
            <v-btn color="//black" class="mx-0" @click="dark = !dark">Dark</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        dark: false
      }
    }
  }
</script>
