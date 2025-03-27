<template>
  <div class="home">
    <h2>Latest esports news</h2>
    <div v-if="articles.length === 0">Nothing to display.</div>
    <div v-else class="newsContainer">
      <NewsCard
        v-for="article in articles.articles"
        :title="article.title"
        :publishedAt="formatDate(article.publishedAt)"
        :url="article.url"
        :image="article.image"
      />
    </div>
  </div>
</template>

<script>
import NewsCard from "@/components/NewsCard.vue";
import NewsService from "@/models/NewsService";

export default {
  name: "Home",
  components: {
    NewsCard,
  },
  data() {
    return {
      articles: [],
    };
  },
  async created() {
    this.articles = await NewsService.getLatestEsportNews();
  },
  methods: {
    formatDate(date) {
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      };
      return new Date(date).toLocaleDateString("fr-FR", options);
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  padding-bottom: 20px;
  min-height: calc(100vh - 142px);
  display: flex;
  flex-direction: column;
  > * {
    flex-shrink: 0;
  }
}
.newsContainer {
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  margin: 25px 50px 0px 50px;
  flex-wrap: wrap;
  height: 100%;
}
h2 {
  margin: 25px 50px 0px 50px;
  font-weight: 700;
}
</style>
