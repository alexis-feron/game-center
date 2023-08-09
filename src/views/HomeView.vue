<template>
  <div>
    <h2>Latest esports news</h2>
    <div v-if="articles.length === 0">Nothing to display.</div>
    <div v-else class="newsContainer">
      <NewsCard v-for="article in articles.articles" :title="article.title" :publishedAt="formatDate(article.publishedAt)" :url="article.url" :image="article.image"/>
    </div>
  </div>
</template>

<script>
import NewsCard from '@/components/NewsCard.vue';
import NewsService from '@/models/NewsService';

export default {
  name: 'Home',
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
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      };
      return new Date(date).toLocaleDateString('fr-FR', options);
    },
  },
};
</script>


<style scoped lang="scss">
.newsContainer{
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  margin: 25px 50px 0px 50px;
  flex-wrap: wrap;
}
h2{
  margin: 25px 50px 0px 50px;
}
</style>