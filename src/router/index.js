import HomeView from "@/views/HomeView.vue";
import ResultsView from "@/views/ResultsView.vue";
import TeamsView from "@/views/TeamsView.vue";
import { createRouter, createWebHistory } from "vue-router";

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
      description: "Discover all the teams competing in your favorite games.",
    },
  },
  {
    path: "/results",
    name: "results",
    component: ResultsView,
    meta: {
      title: "Results | Game Center",
      description: "Check out the latest match results and standings.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Game Center";

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute(
    "content",
    to.meta.description || "Latest esports news and results."
  );

  next();
});

export default router;
