import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://expo-ph.herokuapp.com/api/";


const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};