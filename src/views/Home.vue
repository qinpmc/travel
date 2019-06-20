<template>
  <div>
    <home-header></home-header>
  </div>
</template>


// @ is an alias to /src

<script>
  import HomeHeader from "../components/Header"
  export default {
    name:"Home",
    components:{
      HomeHeader
    }
  }
</script>
