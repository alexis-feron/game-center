import HomeView from "@/views/HomeView.vue";
import ResultsView from "@/views/ResultsView.vue";
import TeamsView from "@/views/TeamsView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home | Game Center",
      description:
        "All the latest news, teams, and results for your favorite games.",
    },
  },
  {
    path: "/teams",
    name: "teams",
    component: TeamsView,
    meta: {
      title: "Teams | Game Center",
      description:
        "All the latest news, teams, and results for your favorite games.",
    },
  },
  {
    path: "/results",
    name: "results",
    component: ResultsView,
    meta: {
      title: "Results | Game Center",
      description:
        "All the latest news, teams, and results for your favorite games",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Game Center";

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      to.meta.description || "Actualité et résultats de l’esport."
    );
  }

  next();
});

export default router;
