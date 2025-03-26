<template>
  <div class="teamsContainer">
    <div class="formContainer">
      <h1 class="titleForm">{{ title }}</h1>
      <FormAddMatch :all-teams="allTeams" @add-match="addMatch"></FormAddMatch>
    </div>

    <div class="teamsSection">
      <h1>Matchs:</h1>
      <span v-if="allMatchs.length === 0">No matchs yet</span>
      <div class="teamsList">
        <MatchCard v-for="match in allMatchs" :match="match"></MatchCard>
      </div>
    </div>
  </div>
</template>

<script>
import FormAddMatch from "@/components/FormAddMatch.vue";
import MatchCard from "@/components/MatchCard.vue";

export default {
  name: "ResultsView",
  components: {
    FormAddMatch,
    MatchCard,
  },
  data() {
    return {
      title: "Add a new Match:",
    };
  },
  props: {
    allTeams: Array,
    allMatchs: Array,
  },
  methods: {
    addMatch: function (e) {
      this.allMatchs.push(e);
    },
  },
};
</script>

<style scoped lang="scss">
.teamsContainer {
  margin-top: 25px;
  width: 92%;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  flex-direction: row;
  padding-bottom: 25px;
}

.titleForm {
  margin-left: 50px;
  text-align: left;
  margin-bottom: 50px;
}

.teamsSection {
  display: flex;
  text-align: left;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  margin-left: 75px;
  margin-top: 25px;
}

.teamsList {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.formContainer {
  margin-top: 25px;
  padding-right: 50px;
  width: 40%;
  border-right: 2px solid #35495e;
}

@media (max-width: 950px) {
  .teamsContainer {
    flex-direction: column;
  }

  .teamsSection {
    margin-top: 20px;
    margin-left: 10px;
  }

  .formContainer {
    border-right: none;
    padding-bottom: 20px;
    width: 92%;
    padding-right: 0px;
    margin: 0px 25px 0px 25px;
    border-bottom: 2px solid #35495e;
  }
}
</style>
