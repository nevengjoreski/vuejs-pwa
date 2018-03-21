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
        date:'2018-07-17',
        creatorId: 'YJby1feYMCYPcEODlTXq3YdJsO63'}
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
    setUser(state, payload){
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
    },
    setUserFromLocal(state, payload){
      state.user = payload
    }
  },
  actions: {
    createMeetup({commit, getters}, payload){
      const meetup = {
        title: payload.title,
        date: payload.date,
        desc: payload.desc,
        creatorId : getters.getUser.id
      }
      let src
      let key

      firebase.database().ref('meetups').push(meetup)
        .then(data =>{


          //nemora so then , ama poso pravime then moze da napravime key
          return key = data.key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('meetups/' + key + '.' + ext).put(payload.image)
        })
        .then(fileData => {
          src = fileData.metadata.downloadURLs[0]
          return firebase.database().ref('meetups').child(key).update({src : src})
        })
        .then(()=>{
          commit('createMeetup', {
            ...meetup,
            id: key,
            src: src
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
            commit('setUser',newUser)
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
            commit('setUser', user)
          }
        ).catch(
          error => {
            commit('setLoading', false)
            commit('setError', error.message)
          }
      )
    },
    autoSignIn({commit, getters}, payload){
      commit('setUserFromLocal', {
        id : payload.uid,
        registeredMeetups:[]
      })
    },
    userLogout({commit, getters}){
      firebase.auth().signOut()
      commit('setUser', null)
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
