import ApiService from './ApiService';

export default class NewsService {
  static async getLatestEsportNews() {
    const url = 'https://gnews.io/api/v4/search?q=esport&sortBy=publishedAt&max=5&in=title&apikey=e1b7ff1ef52e68b53e8b6e9fdc4284f6';
    const response = await ApiService.get(url);
    return response;
  }
}