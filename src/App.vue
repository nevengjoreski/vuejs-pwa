<template>
	<v-app :dark="dark">

    <!--NAVIGATION DRAWER-->

    <v-navigation-drawer
      fixed
      v-model="isActive"
      :right="right"
      app
      temporary
    >
      <v-list>

        <v-list-tile @click="redirectTo(item.nav)" v-for="item in drawerItems" :key="item.title">
        <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <!---->

    <!--MAIN NAVIGATION-->
		<v-toolbar app fixed clipped-left>

      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="isActive = !isActive"></v-toolbar-side-icon>

      <v-toolbar-title>NenoLand</v-toolbar-title>

			<v-toolbar-items class="hidden-xs-only mx-auto">
				<v-btn flat to="/">Start</v-btn>
				<v-btn flat :to="login">login</v-btn>
				<v-btn flat to="/StarterTemplate">Default App</v-btn>
				<v-btn flat to="/firebase">FireBase</v-btn>
			</v-toolbar-items>

		</v-toolbar>
    <!---->

    <v-btn fixed fab bottom right @click="switchToDark" class="mb-5">{{btnText}}</v-btn>
		<v-content>
			<router-view/>
		</v-content>

    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
	</v-app>
</template>

<script>

  import index from './components/Index'

	export default {
    created:function(){
      console.log(index.data().dark);
    },
		data() {
			return {
        isActive: false,
        right: false,
        dark : false,
        login: 'login',
        drawerItems:[
          {icon:'fa-home',title: 'Start', nav:'index'},
          {icon:'fa-sign-in-alt',title: 'Log In', nav:'login'},
          {icon:'fa-database',title: 'Firebase', nav:'StarterTemplate'}
        ]
			};
		},
    watch: {
      isActive: function (newQuestion, oldQuestion) {
        console.log(newQuestion);
        console.log(oldQuestion);
      }
    },
    methods:{
      switchToDark: function(){
        this.dark = !this.dark;
      },
      redirectTo:function(nav){
        this.$router.push({
          path: nav
        })
      }
    },
    computed: {
      btnText: function () {
        return this.dark ? 'White' : 'Dark'
      }
    },
	};
</script>
