<template>
  <section v-bind:onclick="redirectToUrl">
    <div class="topBar">
      <a class="title" v-bind:href="this.url" target="_blank">{{ title }}</a>
    </div>
    <div>
      <img v-bind:src="this.image" alt="news image" class="img" />
    </div>
    <div class="newsContent">
      <p>{{ publishedAt }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    title: {
      type: String,
    },
    publishedAt: {
      type: String,
    },
    image: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  methods: {
    redirectToUrl() {
      if (this.url) {
        window.open(this.url, "_blank");
      }
    },
  },
};
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 15px;
  width: 320px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
}

.topBar {
  padding: 10px;
  text-align: center;
  background: #42b983;
  width: 100%;
  margin-bottom: 10px;

  .title {
    padding: 10px;
    overflow: hidden;
    font-size: 20px;
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
  }
}

.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.img {
  width: 90%;
  height: 200px;
  object-fit: cover;

  border-radius: 10px;
}

.newsContent {
  padding: 10px;
  text-align: center;

  .date {
    font-size: 14px;
    color: #555;
  }
}
</style>
