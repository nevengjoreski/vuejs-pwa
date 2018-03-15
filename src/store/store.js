import Vue from "vue";
import Vuex from 'vuex'

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
    user:{
      id:'asdasd',
      registeredMeetups:['asdasd'],
      themeDark:true
    },
  },
  mutations: {
    createMeetup(state, payload){

    }
  },
  actions: {},
  getters:{
    loadedMeetups(state){
      return state.meetups.sort((A,B)=>{
        return A.date > B.date
      })
    },
    loadedMeetup(state){
      return (meetupId) =>{
        return state.meetups.find((meetup)=>{
          return meetup.id === meetupId
        })
      }
    },
    featuredMeetups(state, getters){
      return getters.loadedMeetups.slice(0,5)
    }
  }

});
