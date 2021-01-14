import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://expo-ph.herokuapp.com/api";


const updateEvent = () => {
  return axios.put(API_URL + "/event/", { headers: authHeader() });
};

export default {
    updateEvent
};