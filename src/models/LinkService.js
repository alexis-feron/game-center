import { HOME,TEAMS,RESULTS } from '@/assets/constant.js';
export default class LinkService{
    constructor(){
        this.links = new Map();
        this.links.set('Home', HOME);
        this.links.set('Teams', TEAMS);
        this.links.set('Results', RESULTS);
    }
    getLinks(){
        return this.links
    }
}