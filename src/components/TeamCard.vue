<script>
import Team from "@/models/Team";
export default {
  name: "TeamCard",
  props: {
    team: Team,
  },
  methods: {
    editValues() {
      this.$emit("editTeam", this.team);
    },
  },
};
</script>

<template>
  <section>
    <div class="divEdit">
      <button @click="editValues" class="btnEdit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM6 6v3.515L3.515 12 6 14.485V18h3.515L12 20.485 14.485 18H18v-3.515L20.485 12 18 9.515V6h-3.515L12 3.515 9.515 6H6zm6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
          />
        </svg>
      </button>
    </div>
    <div class="topBar">
      <div class="circleImg">
        <img class="imgTeam" src="@/assets/team.png" />
      </div>
      <h2>{{ this.team.name }}</h2>
      <span class="id">#{{ this.team.id }}</span>
    </div>
    <div class="teamContent">
      <span>{{
        this.team.description.length > 20
          ? this.team.description.substr(0, 20) + "..."
          : this.team.description
      }}</span>
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

  .teamContent {
    height: 15%;
    margin: 10px;
    display: flex;
    justify-content: center;

    span {
      white-space: normal;
    }
  }

  .divEdit {
    display: flex;
    justify-content: flex-end;
    height: 27px;

    button {
      all: unset;
      cursor: pointer;
      margin-top: 3px;
      margin-right: 5px;
      filter: invert(22%) sepia(11%) saturate(1608%) hue-rotate(169deg)
        brightness(91%) contrast(90%);

      &:hover {
        filter: invert(53%) sepia(65%) saturate(380%) hue-rotate(101deg)
          brightness(103%) contrast(86%);
      }
    }
  }

  .topBar {
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;

    .circleImg {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 2px solid #35495e;
      background-color: rgb(250, 250, 250);
      margin-top: 10px;
      overflow: hidden;

      .imgTeam {
        width: 100px;
        height: 100px;
      }
    }

    h2 {
      margin-top: 0;
      font-size: 1.1em;
    }
  }
}
</style>
