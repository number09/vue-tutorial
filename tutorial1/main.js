const app= new Vue({
   el: "#app" ,
    data: {
      bobby:{
         name: "Bobby Boone" ,
         age:25,

      },
      john:{
         name: "John Boby" ,
         age: 35,

      }


    }
    ,
   template: `
     <div>
       <h2>name:{{john.name}}</h2>
       <h2>Age:{{john.age}}</h2>
       <h2>name:{{bobby.name}}</h2>
       <h2>Age:{{bobby.age}}</h2>
     </div>
   `

})