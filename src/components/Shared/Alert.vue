<template>
  <v-alert outline color="error" dismissible @click="errorClick" icon="warning" :value="error">
    {{error}}
  </v-alert>
</template>


<script>
    export default {
        name: "alert",
        props:['error'],
        methods:{
          errorClick(){
            this.$emit('dismissAlert')
          }
        }
    };
</script>

<style scoped>

</style>
