import axios from 'axios';
export const logoutHandler = (userId, setUserIsLoggedin) => {
  setUserIsLoggedin(false);
  localStorage.removeItem('userId');
  localStorage.removeItem('username');
  axios
    .put(process.env.REACT_APP_BACKEND_URL + `/auth/logout`, {
      userId,
    })
    .then((res) => {})
    .catch((err) => console.log(err));
};
