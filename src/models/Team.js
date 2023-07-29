export default class Team{
    id;
    name;
    description;
    constructor(name, description){
        this.id = Team.incrementId()
        this.name = name;
        this.description = description;
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

}