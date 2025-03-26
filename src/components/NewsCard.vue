<script>
export default {
  name: "NewsCard",
  props: {
    title: String,
    publishedAt: String,
    image: String,
    url: String,
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

<template>
  <section @click="redirectToUrl">
    <div class="newsCard">
      <div class="topBar">
        <a class="title" :href="url" target="_blank">{{ title }}</a>
      </div>
      <div class="content">
        <div class="imageContainer">
          <img :src="image" alt="news image" class="img" />
        </div>
        <div class="newsContent">
          <p class="date">{{ publishedAt }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  padding: 5px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  background: linear-gradient(135deg, #1f1f1f, #42b983);
  border-radius: 15px;
  height: 100%;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
}

.newsCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 15px;
  text-align: center;
}

.topBar {
  width: 100%;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  text-align: center;
  background: transparent;
}

.title {
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
}

.imageContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}

.img {
  height: 200px;
  width: 300px;
  max-width: calc(100% - 20px);
  object-fit: cover;
  border-radius: 10px;
}

.newsContent {
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}

.date {
  font-size: 14px;
  color: black;
}

.content {
  background-color: #ffffff;
  border-radius: 15px;
  width: 100%;
}
</style>
