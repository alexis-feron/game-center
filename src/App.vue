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
      allTeams: [
        {
          id: 1,
          name: "Team Liquid",
          description:
            "A professional esports organization known for their dominance in multiple games.",
          logo: "https://upload.wikimedia.org/wikipedia/fr/f/fe/Team_Liquid.svg",
        },
        {
          id: 2,
          name: "Fnatic",
          description:
            "A legendary esports team with a rich history in competitive gaming.",
          logo: "https://upload.wikimedia.org/wikipedia/en/4/43/Esports_organization_Fnatic_logo.svg",
        },
        {
          id: 3,
          name: "G2 Esports",
          description:
            "A top-tier esports organization excelling in various games.",
          logo: "https://upload.wikimedia.org/wikipedia/fr/e/e4/G2_Esports.svg",
        },
      ],
      allMatchs: [
        {
          team1: {
            id: 1,
            name: "Team Liquid",
            description:
              "A professional esports organization known for their dominance in multiple games.",
            logo: "https://upload.wikimedia.org/wikipedia/fr/f/fe/Team_Liquid.svg",
          },
          team2: {
            id: 2,
            name: "Fnatic",
            description:
              "A legendary esports team with a rich history in competitive gaming.",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/43/Esports_organization_Fnatic_logo.svg",
          },
          score1: 2,
          score2: 1,
        },
        {
          team1: {
            id: 2,
            name: "Fnatic",
            description:
              "A legendary esports team with a rich history in competitive gaming.",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/43/Esports_organization_Fnatic_logo.svg",
          },
          team2: {
            id: 3,
            name: "G2 Esports",
            description:
              "A top-tier esports organization excelling in various games.",
            logo: "https://upload.wikimedia.org/wikipedia/fr/e/e4/G2_Esports.svg",
          },
          score1: 1,
          score2: 3,
        },
        {
          team1: {
            id: 3,
            name: "G2 Esports",
            description:
              "A top-tier esports organization excelling in various games.",
            logo: "https://upload.wikimedia.org/wikipedia/fr/e/e4/G2_Esports.svg",
          },
          team2: {
            id: 1,
            name: "Team Liquid",
            description:
              "A professional esports organization known for their dominance in multiple games.",
            logo: "https://upload.wikimedia.org/wikipedia/fr/f/fe/Team_Liquid.svg",
          },
          score1: 0,
          score2: 2,
        },
      ],
    };
  },
};
</script>

<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
      <h1 class="name">Game Center</h1>
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
        text-decoration: underline !important;
        color: #2c5844;
      }
    }
  }
}

@media (max-width: 608px) {
  .logo {
    .name {
      display: none;
    }
  }
}
</style>
