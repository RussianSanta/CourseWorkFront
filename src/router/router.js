import Vue from 'vue'
import VueRouter from 'vue-router'
import BranchesList from "@/views/adminViews/BranchesList";
import CallsList from "@/views/adminViews/CallsList";
import MessagesList from "@/views/adminViews/MessagesList";
import RoomsList from "@/views/adminViews/RoomsList";
import UsersList from "@/views/adminViews/UsersList";
import TestView from "@/views/adminViews/TestView";

Vue.use(VueRouter)

const routes = [
  { path: "/branches", name: "branches", component: BranchesList },
  { path: "/calls", name: "calls", component: CallsList },
  { path: "/messages", name: "messages", component: MessagesList },
  { path: "/rooms", name: "rooms", component: RoomsList },
  { path: "/users", name: "users", component: UsersList },
  { path: "/test", name: "test", component: TestView }
]

const router = new VueRouter({
  routes
})

export default router
