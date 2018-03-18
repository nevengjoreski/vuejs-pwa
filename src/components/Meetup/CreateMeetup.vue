<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 offset-xs3 offset-sm5 offset-md5 offset-lg5>
        <h3 class="primary--text">Create Meetup</h3>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-form @submit.prevent="saveMeetup">
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 offset-sm3 offset-md1 offset-lg1>
              <v-text-field
                label="Name"
                name="title"
                id="title"
                v-model="title"
                required
              />
            </v-flex>

            <v-flex xs12 sm6 md4 lg3 offset-sm3 offset-md1 offset-lg1>
              <v-text-field
                label="Description"
                name="desc"
                id="desc"
                v-model="desc"
                multi-line
                required
              />
            </v-flex>

            <v-flex xs12 sm6 md4 lg3 offset-sm3 offset-md1 offset-lg1>
              <p class="grey--text subheading">Date</p>
              <v-date-picker
                class="mt-3"
                color="primary"
                full-width
                v-model="date"
                first-day-of-week="1"
              />
            </v-flex>

            <v-flex xs12 sm6 md4 lg3 offset-sm3 offset-md1 offset-lg1>
              <v-text-field
                label="Image URL"
                name="src"
                id="src"
                v-model="src"
                required
              />
            </v-flex>

              <!--IMAGE-->
            <v-flex xs12 offset-sm3 offset-md1 offset-lg1>
              <img :src="src" height="300px">
            </v-flex>

          </v-layout>
          <v-layout row>
            <v-flex xs6 sm6 md4 lg3 offset-xs0 offset-sm5 offset-md5 offset-lg5>
              <v-btn class="primary"
                     :disabled="!formIsValid"
                     type="submit"

              >Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        name: "create-meetup",
      data(){
          return{
            title:'',
            date:'',
            src:'',
            desc:''
          }
      },
      computed:{
          formIsValid(){
            return this.title !== '' && this.date !== '' && this.src !== '' && this.desc !== ''
          }
      },
      mounted(){
        this.date = this.$moment.format('YYYY-MM-DD');
      },
      methods:{
        saveMeetup(){
          this.$store.dispatch('createMeetup', {title: this.title,
              date: this.date,
              src: this.src,
              desc: this.desc,
              id: 4})

          this.$router.push('/meetups')
        }
      }
    };
</script>

<style scoped>

</style>
