<script>
import Team from '@/models/Team';
import Match from '@/models/Match';
import MatchService from '@/models/MatchService';
export default {
	name: 'FormAddMatch',
	data() {
		return {
			team1: Team,
			team2: Team,
			score1: 0,
			score2: 0,
			errorMessage: '',
		}
	},
	props: {
		allTeams: Array,
	},
	methods: {
		addMatch: async function (e) {
			e.preventDefault();
			this.errorMessage = '';

			if (this.team1 === this.team2) {
				return this.errorMessage = 'You must select two different teams';
				
			}

			if (this.score1 < 0 || this.score2 < 0) {
				return this.errorMessage = 'You can\'t have a negative score';
			}

			const result = await new MatchService().postMatch(this.team1, this.team2, this.score1, this.score2)

			if (result.success === false) {
				return this.errorMessage = result.error;
			}

			const match = new Match(this.team1, this.team2, this.score1, this.score2);
			this.$emit('addMatch', match)
		}
	}
}
</script>

<template>
	<form>
		<div class="container">
			<div class="firstTeam">

				<div class="teamSelection">
					<label>Choose the first team</label>
					<select v-model="team1" class="selector">
						<option v-for="team in this.allTeams" :value="team">[{{ team.id }}] {{ team.name }}</option>
					</select>
				</div>

				<div class="scoreSelection">
					<label>Choose the score</label>
					<input type="number" v-model="score1" min="0" max="99">
				</div>

			</div>

			<div class="secondTeam">

				<div class="teamSelection">
					<label>Choose the second team</label>
					<select v-model="team2" class="selector">
						<option v-for="team in allTeams" :value="team">[{{ team.id }}] {{ team.name }}</option>
					</select>
				</div>

				<div class="scoreSelection">
					<label>Choose the score</label>
					<input type="number" v-model="score2" min="0" max="99">
				</div>

			</div>


		</div>

		<div class="errorContainer">
			<span>{{ errorMessage }}</span>
		</div>
		<input type="Submit" value="Add Match" @click="addMatch">

	</form>
</template>

  
<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
}

.team-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
}

.selector{
	padding: 5px;
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.team1 {
  margin-right: 20px;
}

.team-selection {
  margin-bottom: 10px;
  font-weight: bold;
}

.scoreSelection {
	margin-top: 20px;
  margin-bottom: 20px;
}

input[type="number"] {
  padding: 5px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="submit"] {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background: #42B983;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.secondTeam {
  margin-left: 20px;
  padding: 15px;
  border-left: #35495E solid 1px;
}

.error-container {
  text-align: center;
  margin-top: 20px;
  color: red;
  font-weight: bold;
}
</style>