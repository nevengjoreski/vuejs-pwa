<template>
  <v-container>
    <v-layout wrap row>
      <v-flex class="xs12">
        <custom-alert/>
      </v-flex>
      <v-flex class="xs12 sm6 offset-sm3">
        <v-card>
          <v-card-text>
            <v-container>
              <v-form @submit.prevent="onSignin">
                <v-layout wrap row>
                  <v-flex xs12 class="text-xs-center">
                    <div class="primary--text title">Sign Up</div>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      autocomplete="Off"
                      required />
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required />
                  </v-flex>
                  <v-flex xs12 class="text-xs-center">
                    <v-btn
                      color="primary"
                      type="submit"
                      :disabled="!checkSubmitLogin"
                    >Sign In</v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "signin",
    data(){
      return{
        email:'',
        password:'',
        confirmPassword:'',
      }
    },
    methods:{
      onSignin(){
        this.$store.dispatch('signIn',{
          email: this.email,
          password: this.password
        })
      }
    },
    computed:{
      checkSubmitLogin(){
        return this.email !== '' && this.password !== ''
      },
      user(){
        return this.$store.getters.getUser
      },
    },
    watch:{
      user(newValue){
        if(newValue !== null && newValue !== undefined){
          this.$router.push('/')
        }
      }
    }
  };
</script>

<style scoped>

</style>
