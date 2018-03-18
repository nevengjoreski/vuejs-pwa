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
                      :disabled="!loading && !checkSubmitLogin"
                      :loading="loading"
                    >
                      Sign In
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
      },
      dismissAlert(){
        this.$store.commit('setError', null)
      }
    },
    computed:{
      checkSubmitLogin(){
        return this.email !== '' && this.password !== ''
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
