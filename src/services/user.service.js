import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://expo-ph.herokuapp.com/api";


const getEvent = () => {
  return axios.get(API_URL + "/event/", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getEvent,
  getModeratorBoard,
  getAdminBoard,
};