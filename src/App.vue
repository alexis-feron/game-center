<script>
import NavBar from "@/components/NavBar.vue";
import LinkService from "@/models/LinkService.js";

export default {
  name: "Game Center",
  components: {
    NavBar,
  },
  data() {
    return {
      links: new LinkService().getLinks(),
      allTeams: [],
      allMatchs: [],
    };
  },
};
</script>

<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.png" />
      <h1>Game Center</h1>
    </div>
    <NavBar :links="links"></NavBar>
  </header>
  <router-view :all-teams="this.allTeams" :all-matchs="this.allMatchs" />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  height: 100vh;
}

header {
  border-bottom: 2px solid #2c3e50;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  .logo {
    width: 50%;
    margin-left: 50px;
    display: flex;
    align-items: center;
    h1 {
      font-size: 1.5em;
    }
    img {
      width: 50px;
      margin-right: 20px;
    }
  }

  nav {
    width: 50%;
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
