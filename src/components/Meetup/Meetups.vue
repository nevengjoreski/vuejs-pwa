<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card  :class="{'secondary': secondary}">
        <v-card-media :src="latestPost.src" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0"> Latest SQURELL</h3>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dignissimos earum laboriosam nostrum numquam omnis placeat quod ratione, sit unde? Aliquam autem blanditiis, dolorem, dolorum eos et exercitationem expedita, illum itaque modi nemo nesciunt nisi obcaecati odio provident. Autem dignissimos ducimus eum facere fuga ipsa iusto quaerat, quas quo reiciendis?</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn color="primary" :to="'/meetup/' + latestPost.id">View Meetup</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 mt-2 v-for="(image,i) in meetups" :key="i">
      <v-card :class="{'secondary': secondary}">
        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <v-flex xs12 sm5 md5>
              <v-card-media
                :src="image.src"
                height="150px"
              />
            </v-flex>
            <v-flex xs12 sm7 md7>
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{image.title}}</div>
                  <div>{{image.desc}}</div>
                  <div>{{image.date}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn color="primary" :to="/meetup/ +image.id">View Meetup</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>

  import iapp from '../../iApp'

    export default {
        name: "meetups",
        data(){
            return{
              secondary: !iapp.data().dark
            }
        },
        mounted() {
          this.$root.$on('changeTheme', data => {
            this.secondary= !data;
          });
        },
        computed:{
            meetups(){
              return this.$store.getters.featuredMeetups
            },
            latestPost(){
              return this.$store.getters.loadedMeetup(this.$store.getters.loadedMeetups.length.toString())
            },
        },
    };
</script>

<style scoped>

</style>
