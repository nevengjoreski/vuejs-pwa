import Vue from "vue";
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    meetups:[],
    featuredMeetup:
      {src:'https://inhabitat.com/wp-content/blogs.dir/1/files/2013/01/Victor-Manuel-Fleites-Escobar-White-Squirrel-Shed-2.jpeg',
        id:'-L7u3EDZ7PwkFb4j7uSz',
        title:'Squirrel',
        desc:'This is a Squirrel with red eyes',
        date:'2018-07-17'}
    ,
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
    },
    setMeetupsFromFirebase(state, payload){
      state.meetups = payload
    }
  },
  actions: {
    createMeetup({commit}, payload){
      const meetup = {
        title: payload.title,
        date: payload.date,
        src: payload.src,
        desc: payload.desc
      }
      firebase.database().ref('meetups').push(meetup)
        .then(data =>{
          commit('createMeetup', {
            ...meetup,
            id: data.key
          })
        })
        .catch(error =>{
          console.log(error)
        })
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
          }
      )
    },
    loadMeetups({commit}){
      commit('setLoading', true)
      firebase.database().ref('meetups').once('value')
        .then(data => {
          const meetups = []
          for(let key in data.val()){
            meetups.push({
              ...data.val()[key],
              id : key
            })
          }
          commit('setMeetupsFromFirebase', meetups)
          commit('setLoading', false)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
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
    getFeaturedMeetup(state){
      return state.featuredMeetup
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
    },
    getLoading(state){
      return state.loading
    }
  },

});
