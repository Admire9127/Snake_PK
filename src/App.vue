<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script>

import NavBar from "@/components/NavBar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export default {

  name:"app",

  components:{
    NavBar,
  }

}
</script>

<style>
body{
  background-image: url("@/assets/images/wallhaven-weo72r.png");
  background-size: cover;
}

</style>
