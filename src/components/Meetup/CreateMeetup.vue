<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 offset-xs3 offset-sm5 offset-md5 offset-lg5>
        <h3 class="primary--text">Create Meetup</h3>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-form @submit.prevent="createMeetup">
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
              <!--<v-text-field-->
                <!--label="Image URL"-->
                <!--name="src"-->
                <!--id="src"-->
                <!--v-model="src"-->
                <!--required-->
              <!--/>-->

              <v-btn raised color="primary" @click="onPickFile">Upload Image</v-btn>
              <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFileChangeClick">
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
            desc:'',
            image:null
          }
      },
      computed:{
          formIsValid(){
            return this.title !== '' && this.date !== '' && this.image !== '' && this.desc !== ''
          }
      },
      mounted(){
        this.date = this.$moment.format('YYYY-MM-DD');
      },
      methods:{
        createMeetup(){

          this.$store.dispatch('createMeetup', {title: this.title,
              date: this.date,
              image: this.image,
              desc: this.desc
          })

          this.$router.push('/meetups')
        },
        onPickFile(){
          this.$refs.fileInput.click();
        },
        onFileChangeClick(event){
          const files = event.target.files
          let filename = files[0].name
          //ako nema . extenzija na fajlot
          if(filename.lastIndexOf('.') <= 0){
            return alert('Please add a valid file!')
          }

          const fileReader = new FileReader()
          fileReader.addEventListener('load', () =>{
            this.src = fileReader.result
          })
          fileReader.readAsDataURL(files[0])
          this.image = files[0]
        }
      }
    };
</script>

<style scoped>

</style>
