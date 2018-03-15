<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 offset-xs3 offset-sm5 offset-md5 offset-lg5>
        <h3 class="primary--text">Create Meetup</h3>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-form>
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
                label="Location"
                name="location"
                id="location"
                v-model="location"
                required
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
            <v-flex xs12 sm6 md4 lg3 offset-sm3 offset-md1 offset-lg1>
              <img :src="src" height="300px">
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
          </v-layout>
          <v-layout row>
            <v-flex xs6 sm6 md4 lg3 offset-xs0 offset-sm5 offset-md5 offset-lg5>
              <v-btn class="primary" :disabled="!formIsValid">Create Meetup</v-btn>
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
            location:'',
            src:'',
            desc:''
          }
      },
      computed:{
          formIsValid(){
            return this.title !== '' && this.location !== '' && this.src !== '' && this.desc !== ''
          }
      }
    };
</script>

<style scoped>

</style>
