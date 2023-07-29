<template>
    <section>
        <div class="topBar">
            <a class="title" v-bind:href="this.url" target="_blank">{{ title }}</a>
        </div>
        <div>
            <img v-bind:src="this.urlToImage" alt="news image" class="img">
        </div>
        <div class="newsContent">
            <p>{{ publishedAt }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'NewsCard',
    props: {
        title: {
            type: String,
        },
        publishedAt: {
            type: String,
        },
        urlToImage: {
            type: String,
        },
        url: {
            type: String,
        },
    },
};
</script>
  

<style scoped lang="scss">
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid #42b983;
    border-radius: 25px;
    width: 300px;
    height: 300px;
    background-color: #D8E0E9;

    .topBar {
        height: 65%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .title{
            font-size: 18px;
            color: #35495E;
            font-weight: 600;
        }
    } 
    .img{
        width: 85%;
        height: 85%;
        border-radius: 15px;
    }
} 
</style>