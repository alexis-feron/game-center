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
    <div class="topBar">
      <div class="t1">
        <h2>{{ this.match.team1.name }}</h2>
        <span class="id">#{{ this.match.team1.id }}</span
        ><br />
        <h2>{{ this.match.score1 }}</h2>
      </div>
      <div>
        <h2>{{ this.match.score2 }}</h2>
        <br />
        <h2>{{ this.match.team2.name }}</h2>
        <span class="id">#{{ this.match.team2.id }}</span>
      </div>
    </div>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #35495e;
  border-radius: 25px;
  width: 230px;
  height: 230px;
  background-color: #d8e0e9;

  .topBar {
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    color: #35495e;
    padding: 10px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      h2 {
        margin: 0;
        font-size: 18px;
      }

      .id {
        font-size: 12px;
      }
    }
    .t1 {
      padding: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #35495e;
    }
  }
}
</style>
