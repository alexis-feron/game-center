<template>
  <div class="teamsContainer">
    <div class="formContainer">
      <h1 class="titleForm">{{ title }}</h1>
      <FormAddTeam v-if="rerenderComponent" @add-team="addTeam" @reset-current-team="resetCurrentTeam" :current-team="this.currentTeam"></FormAddTeam>
    </div>
    <div class="teamsSection">
      <h1>Teams: </h1>
      <button class="exportBtn" @click="exportTeams">Export</button>
      <span v-if="allTeams.length === 0">No teams yet</span>
      <div class="teamsList">
        <TeamCard v-for="team in allTeams" :team="team" @edit-team="editTeam"></TeamCard>
      </div>
    </div>
  </div>
</template>

<script>

import FormAddTeam from '@/components/FormAddTeam.vue'
import TeamCard from '@/components/TeamCard.vue'

export default {
  name: 'TeamsView',
  components: {
    FormAddTeam, 
    TeamCard
  },
  created() {
    
  },
  data() {
    return {
      currentTeam: null,
      rerenderComponent: true,
      title: "Add a new Team :"
    }
  },
  props: {
		allTeams: Array,
	},
  methods: {
    addTeam : function(e) {
      this.allTeams.push(e);
    },
    resetCurrentTeam: function() {
      this.currentTeam = null;
      this.title = "Add a new Team :"
    },
    editTeam: function(team) {
      this.currentTeam = team;
      this.title = "Edit Team :"
      this.rerenderComponent = false;
      this.$nextTick(() => {
        this.rerenderComponent = true;
      });
    },
    exportTeams: function(){
      let exportBtn = document.querySelector(".exportBtn");
      exportBtn.innerHTML = "Exported !";
      exportBtn.setAttribute("disabled", "disabled");
      exportBtn.style.cursor = "not-allowed";
      exportBtn.style.backgroundColor = "#2EDF8E";
      console.log(JSON.stringify(this.allTeams));
      setTimeout(() => {
        document.querySelector(".exportBtn").innerHTML = "Export";
        document.querySelector(".exportBtn").removeAttribute("disabled");
        document.querySelector(".exportBtn").style.cursor = "pointer";
        document.querySelector(".exportBtn").style.backgroundColor = "#42b983";
      }, 2000);
    }
  }
}
</script>

<style scoped lang="scss">

.teamsContainer{
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.exportBtn{
  width: 100px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
}

.titleForm{
  margin-left: 50px;
  text-align: left;
  margin-bottom: 50px;
}
.teamsSection{
  display: flex;
  text-align: left;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 30px;  
  width: 100%;
  margin-left: 75px;
  margin-top: 25px;
}

.teamsList{
  display: flex;
  flex-wrap: wrap;
  gap: 30px;  
}

.formContainer{
  margin-top: 25px;
  padding-right: 50px;
  border-right: 2px solid #35495E;
}

@media (max-width: 950px) { 
  .teamsContainer{
    flex-direction: column;
  }
  .teamsSection{
    margin-top: 20px;
  }
  .formContainer{
    border-right: none;
    padding-bottom: 20px;
    margin: 0px 25px 0px 25px;
    border-bottom: 2px solid #35495E;
  }
}
</style>