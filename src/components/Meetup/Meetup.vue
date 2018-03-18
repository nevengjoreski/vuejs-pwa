<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card  :class="{'secondary': secondary}">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
          </div>
        </v-card-title>
        <v-card-media :src="meetup.src" height="400px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="primary--text" >{{meetup.date}}</div>
            <div>{{meetup.desc}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" class="align-end">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>

    export default {
      name: "meetup",
      props:['id'],
      computed: {
        meetup() {
          return this.$store.getters.loadedMeetup(this.id)
        },
        secondary(){
          return !this.$store.getters.getUserTheme
        }
      }
    };
</script>

<style scoped>

</style>
