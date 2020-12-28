import axios from 'axios';
import { elements, requests, message } from '../base';
import { renderAlert } from '../views/viewsBase';

const { login, email, password, form } = elements;
const { loginReq } = requests;

const sendCredentials = (credentials) => {
  return axios.post(loginReq, {
    email: credentials.email,
    password: credentials.password,
  });
};

const loginHandler = async (e) => {
  //& Prevent Reload
  e.preventDefault();

  //& Get email and password
  const credentials = {
    email: email.value,
    password: password.value,
  };

  let type = ['success', 'error'];

  const [success, error] = type;

  try {
    //& Pass The email and password to a helper function that loggs in
    await sendCredentials(credentials);

    //& Validate Login
    const { successMessage } = message;
    renderAlert(form, successMessage, success);
  } catch (err) {
    //& Error Message and reload
    const { failureMessage } = message;
    renderAlert(form, failureMessage, error);
  }

  //& Reload the page
  setTimeout(location.reload(), 2000);
};

export const loginController = () => {
  //) Add event Listener and its handler
  login.addEventListener('click', loginHandler);
};
