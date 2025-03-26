import ApiService from "./ApiService";

export default class MatchService {
  async postMatch(team1, team2, score1, score2) {
    try {
      await ApiService.post("http://www.post-result.com", {
        team1: team1,
        team2: team2,
        score1: score1,
        score2: score2,
      });
    } catch (e) {
      return {
        success: false,
        error: "API Error | Error while posting the match's result",
      };
    }
    return { success: true };
  }
}
