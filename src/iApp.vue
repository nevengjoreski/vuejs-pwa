<template>
	<v-app :dark="dark">

    <!--NAVIGATION DRAWER-->

    <v-navigation-drawer
      fixed
      v-model="isActive"
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

        <v-list-tile @click="userLogOut" v-if="userLogedIn">
          <v-list-tile-action>
            <v-icon>fa-sign-out-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Log Out</v-list-tile-title>
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
				<v-btn flat @click="userLogOut" v-if="userLogedIn"><v-icon class="pr-1">fa-sign-out-alt</v-icon>Log Out</v-btn>
			</v-toolbar-items>
		</v-toolbar>
    <!---->

    <v-btn fixed fab bottom right @click="toggleTheme" class="mb-5">{{btnText}}</v-btn>
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
        login: 'login',
			};
		},
    methods:{
      toggleTheme: function(){
        this.$store.commit('changeTheme', !this.dark)
      },
      redirectTo:function(nav){
        this.$router.push({
          path: nav
        })
      },
      userLogOut(){
        this.$store.dispatch('userLogout')
      }
    },
    computed: {
      btnText: function () {
        return this.dark ? 'White' : 'Dark'
      },
      dark(){
        return this.$store.getters.getUserTheme
      },
      userLogedIn(){
        return this.$store.getters.getUser
      },
      drawerItems(){
        if(this.$store.getters.getUser !== null && this.$store.getters.getUser !== undefined) {
          return [
            {icon: 'supervisor_account', title: 'View Meetups', nav: '/meetups'},
            {icon: 'room', title: 'Organize Meetup', nav: '/meetup/new'},
            {icon: 'person', title: 'Profile', nav: '/Profile'},
          ]
        } else {
          return [
            {icon: 'face', title: 'Sign Up', nav: '/Signup'},
            {icon: 'lock_open', title: 'Sign In', nav: '/Signin'}
          ]
        }
      }
    },
	};
</script>
