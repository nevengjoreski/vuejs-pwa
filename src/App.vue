<template>
	<v-app :dark="dark">

    <!--NAVIGATION DRAWER-->

    <v-navigation-drawer
      fixed
      v-model="drawer"
      :right="right"
      app
    >
      <v-list>

        <v-list-tile @click="">

        <v-list-tile-action>
            <v-icon>fa-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Start</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>fa-sign-in-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Log In</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>fa-database</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Firebase</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <!---->

    <!--MAIN NAVIGATION-->
		<v-toolbar app fixed clipped-left>

      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title>NenoLand</v-toolbar-title>

			<v-toolbar-items class="hidden-xs-only mx-auto">
				<v-btn flat to="/">Start</v-btn>
				<v-btn flat to="/login">login</v-btn>
				<v-btn flat to="/defaultapp">Default App</v-btn>
				<v-btn flat to="/defaultapp">FireBase</v-btn>
			</v-toolbar-items>

		</v-toolbar>
    <!---->

    <v-btn fixed fab bottom right @click="switchToDark" class="mb-5">{{btnText}}</v-btn>
		<v-content>
			<router-view/>
		</v-content>
	</v-app>
</template>

<script>

  import helloworld from './components/HelloWorld'

	export default {
		data() {
			return {
        drawer: false,
        right: false,
        dark : false,
			};
		},
    methods:{
      switchToDark: function(){
        this.dark = !this.dark;
      }
    },
    computed: {
      btnText: function () {
        return this.dark ? 'White' : 'Dark'
      }
    },
	};
</script>
