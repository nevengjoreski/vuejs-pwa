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
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
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
