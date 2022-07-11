import axios from 'axios';
export const logoutHandler = (userId, setUserIsLoggedin) => {
  const email = localStorage.getItem('email')
  setUserIsLoggedin(false);
  localStorage.removeItem('userId');
  localStorage.removeItem('username');
  localStorage.removeItem('isManager')
  localStorage.removeItem('email')
  window.location.href = '/best-sellers'
  axios
    .put(process.env.REACT_APP_BACKEND_URL + `/auth/logout`, {
      userId,
      email
    })
    .then((res) => {
    })
    .catch((err) => console.log(err));
};
