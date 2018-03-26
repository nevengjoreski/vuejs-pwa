<template>
    <v-dialog v-model="dialog" max-width="290">
      <v-btn color="primary" class="align-end" slot="activator">Register</v-btn>
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title class="mx-auto">Sign In</v-toolbar-title>
        </v-toolbar>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary " flat @click="dialog = false">Disagree</v-btn>
          <v-btn color="primary " flat @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "registration-dialog",
      data(){
          return{
            dialog:false
          }
      }
    };
</script>

<style scoped>

</style>
