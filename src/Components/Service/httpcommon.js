import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080",
  //   withCredentials: false,
  //   optionSuccessStatus: 200,
  //   headers: {
  //     // "Access-Control-Allow-Origin": "*",
  //     // "Content-Type": "application/json",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS, FETCH",
  //   },
});
