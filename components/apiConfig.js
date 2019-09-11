
// let apiUrl
// const expressPort = 3000
// const apiUrls = {
//   production: 'https://support-groups.herokuapp.com',
//   development: `http://localhost:${expressPort}`
// }

// if (window.location.hostname === 'localhost') {
//   apiUrl = apiUrls.development
// } else {
//   apiUrl = apiUrls.production
// }
import axios from "axios";

let apiUrl
const expressPort = 3000
const apiUrls = {
  // production: 'https://express-back-end.herokuapp.com/apartments',
  development: `http://localhost:${expressPort}`
}

apiUrl = apiUrls.development
export default apiUrl


export const getApartments = () => {
  return axios
    .get(`${apiUrl}/apartments`)
    .then(res => res)
    .catch(error => error);
};

export const updateApartments = (token ,id, apartment) => {
  const config = {
    headers: { Authorization: `bearer ${token}`}
  };
  return axios
    .patch(`${apiUrl}/apartments/${id}`,{apartment}, config)
    .then(res => res)
    .catch(error => error);
};

export const deleteApartments = (token ,id) => {
  const config = {
    headers: { Authorization: `bearer ${token}`}
  };
  return axios
    .delete(`${apiUrl}/apartments/${id}`, config)
    .then(res => res)
    .catch(error => error);
};

export const signOut = token => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  return axios
    .delete(`${apiUrl}/sign-out`, config)
    .then(res => res)
    .catch(err => err);
};

export const loginUser = (email, password) => {
    
  return axios
    .post(`${apiUrl}/sign-in`, {
      credentials: {
        email: email,
        password: password
      }
    })
}

export const regiesterUser = (userName, password, passwordConfirmation) => {
  return axios
    .post(`${apiUrl}/sign-up`, {
      credentials: {
        username: userName,
        password: password,
        password_confirmation: passwordConfirmation
      }
    })
    .then(res => res)
    .catch(err => err);
};

