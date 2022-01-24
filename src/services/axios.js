import axios from "axios";

export default axios.create({
  baseURL: "https://intrade.herokuapp.com",
});
