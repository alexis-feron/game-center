<script>
import Team from "@/models/Team";

export default {
  name: "TeamCard",
  props: {
    team: {
      type: Team,
      required: true,
    },
  },
  methods: {
    editValues() {
      this.$emit("edit-team", this.team);
    },
  },
  computed: {
    truncatedDescription() {
      return this.team.description.length > 50
        ? this.team.description.substring(0, 50) + "..."
        : this.team.description;
    },
    teamLogo() {
      return this.team.logo || require("@/assets/team.png");
    },
  },
};
</script>

<template>
  <section>
    <div class="teamCard">
      <div class="divEdit">
        <button @click="editValues" class="btnEdit" aria-label="Edit Team">
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
          <img class="imgTeam" :src="teamLogo" :alt="`${team.name} Logo`" />
        </div>
        <h2>{{ team.name }}</h2>
        <span class="id">#{{ team.id }}</span>
      </div>
      <div class="teamContent">
        <p>{{ truncatedDescription }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  width: 260px;
  background: linear-gradient(135deg, #1f1f1f, #42b983);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 15px;
  transition: transform 0.3s ease-in-out;
  flex-grow: 1;

  &:hover {
    transform: scale(1.05);
  }
}

.teamCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 15px;
  text-align: center;
}

.divEdit {
  align-self: flex-end;
  margin-bottom: 10px;
}

.btnEdit {
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
}

.topBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
}

.circleImg {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #35495e;
  background-color: rgb(250, 250, 250);
  overflow: hidden;
  margin-bottom: 10px;
}

.imgTeam {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h2 {
  font-size: 1.2em;
  color: #35495e;
  margin: 5px 0;
  word-wrap: break-word;
  word-break: break-word;
}

.id {
  font-size: 12px;
  opacity: 0.7;
}

.teamContent {
  padding: 10px;
  background: #f5f5f5;
  border-radius: 10px;
  word-wrap: break-word;
  word-break: break-word;
  width: 100%;
  flex-grow: 1;
}
</style>
