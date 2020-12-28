import axios from 'axios';
import { elements, requests, message } from '../base';
import { renderAlert, renderLoader, removeBox } from '../views/viewsBase';

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

  //& Render The Loader
  renderLoader(form);

  //& Get email and password
  const credentials = {
    email: email.value,
    password: password.value,
  };

  const type = ['success', 'error'];
  const [success, error] = type;

  try {
    //& Pass The email and password to a helper function that loggs in
    await sendCredentials(credentials);

    //& Remove the Loader
    removeBox('loader');

    //& Validate Login
    const { successMessage } = message;
    renderAlert(form, successMessage, success);
  } catch (err) {
    //& Error Message and reload
    const { failureMessage } = message;
    renderAlert(form, failureMessage, error);
  }

  // & Reload the page
  setTimeout(location.reload(), 2000);
};

export const loginController = () => {
  //) Add event Listener and its handler
  login.addEventListener('click', loginHandler);
};
