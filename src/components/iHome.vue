<template>
  <v-container>
    <v-layout wrap row ><!--justify-center-->
      <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn class="primary" large to="/meetups">
          Explore Meetups
        </v-btn>
      </v-flex>
      <v-flex xs12 lg6 md6 sm6 class="text-sm-left text-xs-center">
        <v-btn class="primary" large to="/meetup/new">
          Organize Meetups
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout wrap row v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular indeterminate :size="500" :width="0.3" color="primary"/>
      </v-flex>
    </v-layout>
    <v-layout mt-2 row wrap v-else>
      <v-flex xs12>
          <v-carousel hide-controls >
            <v-carousel-item
              v-for="(item,i) in meetups"
              :key="i"
              :src="item.src"
              transition="fade"
              reverse-transition="fade"
              :to="/meetup/+ item.id"
              style="cursor:pointer;"
            >
              <div class="title">{{item.title}}</div>
            </v-carousel-item>
          </v-carousel>
      </v-flex>

      <v-flex xs12 class="text-xs-center primary">
        <v-btn block class="primary" depressed="">Join Us</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

    export default {
        name: "home",
        computed:{
          meetups:function () {
            return this.$store.getters.featuredMeetups
          },
          loading(){
            return this.$store.getters.getLoading
          }
        },

    };
</script>

<style scoped>
.title{
  text-align: center;
  position:absolute;
  width:100%;
  bottom:50px;
  background-color:rgba(0,0,0,0.5);
  color:white;
  padding:10px;
}
</style>
