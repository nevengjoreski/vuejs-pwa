<template>
  <v-app :dark="dark">
    <!--MAIN CONTENT-->
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-baseline>
          <v-flex shrink>
            <v-btn class="mx-0" @click="dark = !dark">Dark</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-content>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-btn large> Explore</v-btn>
        </v-flex>
        <v-flex xs12 sm6>
          <v-btn large> Explore</v-btn>
        </v-flex>
      </v-layout>
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
