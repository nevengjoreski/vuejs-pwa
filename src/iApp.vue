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

      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="isActive = !isActive"/>

      <v-toolbar-title><router-link to="/" tag="button">NenoLand</router-link></v-toolbar-title>

			<v-toolbar-items class="hidden-xs-only mx-auto">
				<v-btn v-for="item in  drawerItems" flat :to="item.nav" :key="item.title"><v-icon class="pr-1">{{item.icon}}</v-icon>{{item.title}}</v-btn>
			</v-toolbar-items>

		</v-toolbar>
    <!---->

    <v-btn fixed fab bottom right @click="switchToDark" class="mb-5">{{btnText}}</v-btn>
    <main>
		<v-content>
			<router-view/>
		</v-content>
    </main>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
	</v-app>
</template>

<script>

	export default {
		data() {
			return {
        isActive: false,
        right: false,
        dark : false,
        login: 'login',
        drawerItems:[
          {icon:'supervisor_account',title: 'View Meetups', nav:'/meetups'},
          {icon:'room',title: 'Organize Meetup', nav:'/meetup/new'},
          {icon:'person',title: 'Profile', nav:'/Profile'},
          {icon:'face',title: 'Sign Up', nav:'/Signup'},
          {icon:'lock_open',title: 'Sign In', nav:'/Signin'}
        ]
			};
		},
    watch: {
      dark:function(){
        this.$root.$emit('changeTheme', this.dark)
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
      },
      getTheme(){
        return this.dark
      }
    },
    computed: {
      btnText: function () {
        return this.dark ? 'White' : 'Dark'
      }
    },
	};
</script>
