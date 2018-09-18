import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `https://mern-dissuadev2-caladedge.c9users.io:8081`
  });
};
