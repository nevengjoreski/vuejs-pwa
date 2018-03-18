<template>
  <v-container>
    <v-layout wrap row>
      <v-flex class="xs12">
        <custom-alert @dismissAlert="dismissAlert" :error="getError"/>
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
                      :disabled="!checkSubmitLogin && !loading"
                      :loading="loading"
                    >Create User
                      <span slot="loader" class="custom-loader">
                        <v-icon>cached</v-icon>
                      </span>
                    </v-btn>
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
          },
          dismissAlert(){
            this.$store.commit('setError', null)
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
          getError(){
            return this.$store.getters.getError !== null ? this.$store.getters.getError : false
          },
          loading(){
            return this.$store.getters.getLoading
          }
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
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
