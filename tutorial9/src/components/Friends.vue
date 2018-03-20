<template>
  <div>
    <h1>My Friends</h1>
    <li v-for="friend in FriendsStore.friends">{{friend}}</li>
    <input v-model="newFriend" v-on:keyup.13="addFriend(newFriend)"/>
  </div>

</template>

<script>
import FriendsStore from "../stores/FriendStore"
  export default {
    data() {
     return{
       newFriend:null,
       FriendsStore:FriendsStore.data,

     };
    },
    methods :{
      addFriend(name) {
        FriendsStore.methods.addFriend(name)
        this.newFriend = null;

      }
    },
  }
</script>

<style scoped>

</style>
