import {createRouter, createWebHistory} from 'vue-router'
import NotFoundIndexView from "@/views/404/NotFoundIndexView.vue";
import PkIndexView from "@/views/pk/PkIndexView.vue";
import RankListIndexView from "@/views/ranklist/RankListIndexView.vue";
import RecordIndexView from "@/views/record/RecordIndexView.vue";
import UserBotsIndexView from "@/views/user/UserBotsIndexView.vue";


const routes = [
  {
    path: "/",
    redirect:"/pk/",
  },
  {
    path:"/pk/",
    name:"pk_index",
    component:PkIndexView,
  },
  {
    path:"/ranklist/",
    name:"ranklist_index",
    component: RankListIndexView,
  },
  {
    path:"/record/",
    name:"record_index",
    component: RecordIndexView,
  },
  {
    path:"/user/",
    name:"user_index",
    component: UserBotsIndexView,
  },
  {
    path: "/404/",
    name:"404_index",
    component: NotFoundIndexView,
  },
  {
    path:"/:catchAll(.*)",
    redirect: "/404/",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
