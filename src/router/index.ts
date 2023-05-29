import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import { useAuthStore } from "@/store";
import { IUserData } from "@/type";
import { storeToRefs } from "pinia";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  const authStore = useAuthStore();
  const { setUser } = authStore;
  const { user } = storeToRefs(authStore);

  if (loggedIn) {
    setUser(JSON.parse(loggedIn) as unknown as IUserData);
  }

  if (authRequired && !user.value) {
    next("/login");
  } else {
    next();
  }
});

export default router;
