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
              <v-form @submit.prevent="onSignup">
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
                  <v-flex xs12>
                    <v-text-field
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      :rules="[comparePasswords]"
                      required />
                  </v-flex>
                  <v-flex xs12 class="text-xs-center">
                    <v-btn
                      color="primary"
                      type="submit"
                      :disabled="!checkSubmitLogin"
                    >Create User</v-btn>
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
        name: "signup",
        data(){
          return{
            email:'',
            password:'',
            confirmPassword:'',
          }
        },
        methods:{
          onSignup(){
            this.$store.dispatch('signUserUp',{
              email: this.email,
              password: this.password
            })
          }
        },
        computed:{
          checkSubmitLogin(){
            return this.email !== '' && this.password !== '' && this.confirmPassword !== ''
              && this.password === this.confirmPassword
          },
          comparePasswords(){
            return this.password !== this.confirmPassword ? 'Passwords do not match' : true
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
