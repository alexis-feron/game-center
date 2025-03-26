export default class ApiService {
  static async get(url) {
    const response = await fetch(url);
    return response.json();
  }

  static async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
