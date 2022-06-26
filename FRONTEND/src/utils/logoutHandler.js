import axios from 'axios';
export const logoutHandler = (userId, setUserIsLoggedin) => {
  setUserIsLoggedin(false);
  localStorage.removeItem('userId');
  localStorage.removeItem('username');
  axios
    .put(`http://localhost:5500/api/auth/logout`, {
      userId,
    })
    .then((res) => {})
    .catch((err) => console.log(err));
};
