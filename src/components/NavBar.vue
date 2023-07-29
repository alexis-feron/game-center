<script>
export default {
    name: 'NavBar',
    props: ['links']
}
</script>

<template>
    <nav class="listLinks">
        <div v-for="elem in links" class="divLinks">
            <router-link :to="elem[1]" class="links">{{ elem[0] }} </router-link>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.listLinks{
    display: flex;
    gap: 15px;
    justify-content: center;
    .links{
        text-decoration: none;
        display: inline-block;
        position: relative;
    }

    .links::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        text-decoration: underline;
        left: 0;
        background-color: #2C3E50;
        transform-origin: bottom right;
        transition: transform 0.2s ease-out;
    }

    .links:hover::after {
        transform: scaleX(1);
        text-decoration: underline;
        transform-origin: bottom left;
    }

    .divLinks:nth-child(-n+2){
        padding-right: 15px;
        border-right: 2px solid #2C3E50;
    }
}
</style>