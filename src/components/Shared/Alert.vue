<template>
  <v-alert outline color="error" dismissible @click="errorclick" icon="warning" :value="alert">
    {{error.message}}
  </v-alert>
</template>


<script>
    export default {
        name: "alert",
        data () {
          return {
            alert: false
          }
        },
        computed:{
          error(){
            this.alert = this.$store.getters.getError !== null
            return {
              hasError : this.$store.getters.getError !== null && this.$store.getters.getError !== undefined,
              message: this.$store.getters.getError
            }
          }
        },
        methods:{
          errorclick(){
            this.alert = !this.alert
          }
        }
    };
</script>

<style scoped>

</style>
