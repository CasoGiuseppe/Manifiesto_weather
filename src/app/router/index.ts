import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "route",
      components: {
        default: () => undefined,
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
