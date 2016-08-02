import axios from 'axios';
export default function getUserInfo(username){
  return axios.get(`https://api.github.com/users/s594475`)
              .then((res) => ({
                gitInfo:res.data
              }))
}
