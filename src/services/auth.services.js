import axios from "axios";

const API_URL = 'http://expo-ph.herokuapp.com/api';


const login = (username, password) => {
  return axios
    .post(API_URL + "/login/", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
      }

      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};


export default {
  login,
  logout,
  
};