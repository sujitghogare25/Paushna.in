import axios from "axios";

const instance = axios.create({
      baseURL: "http://localhost:7071/api"
});

export default instance;
