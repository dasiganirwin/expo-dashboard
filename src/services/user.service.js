import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://expo-ph.herokuapp.com/api";


const getEvent = () => {
 // return axios.get(API_URL + "/event/", { headers: authHeader() });
  return axios.get(API_URL + "/event/", { headers: authHeader() });
};

export default {
  getEvent
};