const app= new Vue({
   el: "#app" ,
    data: {
      bobby:{
          first:"bobby",
          last:"Boone",
         age:25,

      },
      john:{
          first:"John",
          last:"Boone",
         age: 35,

      }
    }
    ,
    computed:{
      bobbyFullName(){
       return `${this.bobby.first} ${this.bobby.last}`

      },
      johnFullName(){
          return `${this.john.first} ${this.john.last}`
      },
      johnAgeInOneYear() {
          return this.john.age +1;
      }
    } ,
    filters:{
        ageInOneYear: function (age) {
            return age + 1
        },
       fullName(value) {
          return `${value.last} ${value.first}`;
       },

    },
   template: `
     <div>
       <h2>name:{{john | fullName}}</h2>
       <h2>Age:{{john.age | ageInOneYear}}</h2>
       <h2>name:{{bobby | fullName}}</h2>
       <h2>Age:{{bobby.age | ageInOneYear}}</h2>
     </div>
   `

})