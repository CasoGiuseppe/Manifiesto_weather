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
  ],
});

export default router;
