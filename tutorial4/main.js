Vue.component('friend-component',{
  props: ['friend'],
  filters:{
    ageInOneYear: function (age) {
      return age + 1
    },
    fullName(value) {
      return `${value.last} ${value.first}`;
    },
  },
  methods:{
    incrementAge(friend) {
      friend.age = friend.age + 1;
    },
    decrementAge(friend) {
      friend.age = friend.age - 1;
    },
  },
  template: `
    <div>
      <h4>{{friend | fullName}}</h4>
      <h5>age:{{friend.age}}</h5>
      <button v-on:click="incrementAge(friend)"> + </button>
      <button v-on:click="decrementAge(friend)"> - </button>
      <input v-model="friend.first"/>
      <input v-model="friend.last"/>
    </div>
    `
  ,
});



const app= new Vue({
   el: "#app" ,
    data: {
      friends:[
          {
              first: "bobby",
              last: "Boone",
              age: 25,
          },
          {
              first:"John",
              last:"Boone",
              age: 35,
          }
      ],
    }
    ,
    filters:{
    },
    methods: {
   },

   template: `
     <div>
       <friend-component v-for="item in friends" v-bind:friend="item"/>
     </div>
   `

})