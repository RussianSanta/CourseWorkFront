import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "../views/MainPage";
import Lobby from "../views/Lobby";
import Room from "../views/Room";

Vue.use(VueRouter)

const routes = [
  { path: "/home", name: "home", component: MainPage },
  { path: "/lobby", name: "lobby", component: Lobby },
  { path: "/room", name: "room", component: Room },
]

const router = new VueRouter({
  routes
})

export default router
