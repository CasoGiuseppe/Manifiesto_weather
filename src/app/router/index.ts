import { createRouter, createWebHistory } from "vue-router";
import { userStore } from "@/domains/user/infrastructure/store/user"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start",
      meta: { login: true, type: 'start' },
      components: {
        default: () => import("@/app/ui/views/dashboard/Dashboard.vue"),
        panel: () => import("@/app/ui/views/panel/Panel.vue"),
      },
    },
    {
      path: "/sign",
      name: "sign",
      meta: { login: true, type: 'sign-in' },
      components: {
        default: () => import("@/app/ui/views/dashboard/Dashboard.vue"),
        panel: () => import("@/app/ui/views/panel/Panel.vue"),
      },
    },
    {
      path: "/dashboard/:id?",
      name: "dashboard",
      meta: { login: true, type: 'dashboard' },
      components: {
        default: () => import("@/app/ui/views/dashboard/Dashboard.vue"),
        panel: () => import("@/app/ui/views/panel/Panel.vue"),
      },

      beforeEnter: async (to, from) => {
        const isUserLogged = userStore.getUserLogged
        if (!isUserLogged) return '/'
      },
    },
    {
      path: "/library",
      name: "library",
      meta: { login: false, type: 'library' },
      components: {
        default: () => import("@/app/ui/views/library/Library.vue"),
      },
    },
  ],
});

export default router;
