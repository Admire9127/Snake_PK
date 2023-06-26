<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark" style="font-weight: bolder">
    <div class="container mybar">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/logo.png" alt="Bootstrap" width="30" height="24">
      </a>
      <a class="navbar-brand" href="#">King Of Bots</a>
      <a class="navbar-brand" href="#">
        <img src="../assets/images/logo.png" alt="Bootstrap" width="30" height="24">
      </a>
      <button aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
              data-bs-target="#navbarText" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarText" class="collapse navbar-collapse">
        <ul class="navbar-nav nav-pills ">
          <li class="nav-item fill">
            <router-link :class="route_name == 'pk_index' ? 'nav-link bg-light text-black':'nav-link' "  :to="{name:'pk_index'}">对战</router-link>
          </li>
          <li class="nav-item fill">
            <router-link :class="route_name == 'record_index' ? 'nav-link bg-light text-black':'nav-link' " :to="{name:'record_index'}">对战列表</router-link>
          </li>
          <li class="nav-item fill">
            <router-link :class="route_name == 'ranklist_index' ? 'nav-link bg-light text-black':'nav-link' " :to="{name:'ranklist_index'}">排行榜</router-link>
          </li>
        </ul>

      </div>
      <ul class="navbar-nav ">
        <li class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            我的信息
          </a>
          <ul class="dropdown-menu bg-dark">
            <li><router-link class="dropdown-item ft" :to="{name:'user_index'}">我的BOT</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item ft" href="#">退出</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {useRoute} from "vue-router";
import {computed} from "vue";
export default {
  name: "NavBar",
  setup(){
    const route = useRoute();
    let route_name = computed(()=>route.name);
    return {
      route_name
    }
  }
}


</script>

<style scoped>
.fill{
  padding-left: 50px;
}
.mybar{
  font-size: 20px;
}
.ft{
  color: lightgray;
  font-weight: bolder;
}
</style>