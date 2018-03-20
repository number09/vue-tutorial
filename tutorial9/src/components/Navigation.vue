<template>
  <nav>
    <a href="#">Some Link</a>
    <a href="#">Some Other Link</a>
    <a href="#">Friends ({{FriendsStore.friends.length}})</a>
  </nav>
</template>

<script>
  import FriendsStore from "../stores/FriendStore"
  export default {
    data() {
      return {
        FriendsStore:FriendsStore.data
      }
    }
  }
</script>

<style scoped>
  nav{
    background:#000077;
    color: white;
    margin-bottom: 20px;
    padding: 20px 10%;
    width: 80%;
    text-align: center;
  }

  a{
    color: #fff;
  }
</style>
