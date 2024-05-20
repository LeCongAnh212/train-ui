import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api/";

export default {
  getHeader() {
    const token = window.localStorage.getItem("token");
    if (token == null) {
      return {};
    }
    return {
      Authorization: "Bearer " + token,
      Accept: "application/json",
    };
  },
  get(url: string) {
    // bên kia co . then là dợi có kết quả nó với vô đó , còn k thì vô catch rồi
    return axios.get(apiUrl + url, { headers: this.getHeader() });
  },
  post(url: string, data: object) {
    return axios.post(apiUrl + url, data, { headers: this.getHeader() });
  },
};
