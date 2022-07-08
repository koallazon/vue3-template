import { createRouter, createWebHashHistory } from "vue-router"
import HelloWorld from "../views/HelloWorld.vue"

const routes: Array<any> = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
