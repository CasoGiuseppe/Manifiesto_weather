import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "route",
      components: {
        default: () => import("@/app/ui/views/dashboard/Dashboard.vue"),
        panel: () => import("@/app/ui/widgets/login/Login.vue")
      },
    },
    {
      path: "/library",
      name: "library",
      components: {
        default: () => import("@/app/ui/views/library/Library.vue"),
      },
    },
  ],
});

export default router;
