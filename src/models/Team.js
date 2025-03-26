export default class Team {
  id;
  name;
  description;
  logo;
  constructor(name, description, logo) {
    this.id = Team.incrementId();
    this.name = name;
    this.description = description;
    this.logo = logo;
  }

  static incrementId() {
    if (!this.latestId) this.latestId = 4;
    else this.latestId++;
    return this.latestId;
  }
}
