import ApiService from './ApiService';

export default class NewsService {
  static async getLatestEsportNews() {
    const url = 'https://newsapi.org/v2/everything?qInTitle=esport&sortBy=publishedAt&pageSize=5&apiKey=36622bfdc2604e47b514a071c973db97';
    const response = await ApiService.get(url);
    return response;
  }
}