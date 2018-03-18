import Vue from "vue";
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    meetups:[
      {src:'https://inhabitat.com/wp-content/blogs.dir/1/files/2013/01/Victor-Manuel-Fleites-Escobar-White-Squirrel-Shed-2.jpeg',
        id:'1',
        title:'Squirrel',
        desc:'This is a Squirrel with red eyes',
        date:'2018-07-17'},
      {src:'http://www.ellisnaturephotography.com/shop/images/White%20Squirrel%2072dpi.jpg',
        id:'2',
        title:'Squirrel',
        desc:'This is a Squirrel with black eyes',
        date:'2018-07-16'},
      {src:'http://pennylhunt.com/wp-content/uploads/2014/06/snowy-squirrel.jpg',
        id:'3',
        title:'Squirrel',
        desc:'This is a Squirrel with brown eyes',
        date:'2018-07-15'},
    ],
    user: null,
    userDarkTheme: false,
    loading: false,
    error: null,
  },
  mutations: {
    createMeetup(state, payload){
      state.meetups.push(payload)
    },
    changeTheme(state, payload){
      state.userDarkTheme = payload
    },
    signUserUpIn(state, payload){
      state.user = payload
    },
    setLoading(state, payload){
      state.loading = payload
    },
    setError(state, payload){
      state.error = payload
    }
  },
  actions: {
    createMeetup({commit}, payload){
      const meetup = {
        title: payload.title,
        date: payload.date,
        src: payload.src,
        desc: payload.desc,
        id: 4}

      //reach out to firebase and store it
      commit('createMeetup', meetup)
    },
    signUserUp({commit}, payload){
      commit('setLoading', true)
      commit('setError', null)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setLoading', false)
            commit('signUserUpIn',newUser)
          }
        )
        .catch(
          error =>{
            commit('setLoading', false)
            commit('setError', error.message)
            console.log(error)
          }
        )
    },
    signIn({commit}, payload){
      commit('setLoading', true)
      commit('setError', null)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user =>{
            commit('setLoading', false)
            commit('signUserUpIn', user)
          }
        ).catch(
          error => {
            commit('setLoading', false)
            commit('setError', error.message)
            console.log(error)
          }
      )
    }
  },
  getters:{
    loadedMeetups(state){
      return state.meetups.sort((A,B)=>{
        return A.date > B.date
      })
    },
    loadedMeetup(state){
      return (meetupId) =>{
        return state.meetups.find((meetup)=>{
          return meetup.id.toString() === meetupId.toString()
        })
      }
    },
    featuredMeetups(state, getters){
      return getters.loadedMeetups.slice(0,5)
    },
    getUserTheme(state){
      return state.userDarkTheme
    },
    getUser(state){
      return state.user
    },
    getError(state){
      return state.error
    }
  }

});
