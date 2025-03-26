<script>
import Match from "@/models/Match";

export default {
  name: "MatchCard",
  props: {
    match: Match,
  },
};
</script>

<template>
  <section>
    <div class="matchCard">
      <div class="team team1">
        <img :src="match.team1.logo" alt="Team 1 Logo" class="team-logo" />
        <h2>{{ match.team1.name }}</h2>
        <span class="id">#{{ match.team1.id }}</span>
        <h2 class="score">{{ match.score1 }}</h2>
      </div>
      <div class="vs">VS</div>
      <div class="team team2">
        <h2 class="score">{{ match.score2 }}</h2>
        <h2>{{ match.team2.name }}</h2>
        <span class="id">#{{ match.team2.id }}</span>
        <img :src="match.team2.logo" alt="Team 2 Logo" class="team-logo" />
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
  background: linear-gradient(135deg, #1f1f1f, #42b983);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}

.matchCard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
}

.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.team-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.score {
  font-size: 28px;
  font-weight: bold;
  color: #35495e;
}

.id {
  font-size: 12px;
  opacity: 0.7;
}

.vs {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  background-color: #42b983;
  padding: 10px 15px;
  border-radius: 10px;
}
</style>
