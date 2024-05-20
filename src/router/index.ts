import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "default" },
      component: () => import("../views/homepage/homepage.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: { layout: "phone" },
      component: () => import("@/views/account/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      meta: { layout: "phone" },
      component: () => import("@/views/account/Register.vue"),
    },
    {
      path: "/video/:id",
      name: "detail-video",
      meta: { layout: "default" },
      component: () => import("@/views/detail/DetailVideo.vue"),
    },
    {
      path: "/account",
      name: "account",
      meta: { layout: "default" },
      component: () => import("@/views/profile/Profile.vue"),
    },
    {
      path: "/search",
      name: "search",
      meta: { layout: "default" },
      component: () => import("@/views/search/SearchVideo.vue"),
    },
    {
      path: "/my-course",
      name: "my-course",
      meta: { layout: "default" },
      component: () => import("@/views/course/MyCourse.vue"),
    },
    {
      path: "/test",
      name: "test",
      meta: { layout: "default" },
      component: () => import("@/views/test/TestOke.vue"),
    },
  ],
});

export default router;
