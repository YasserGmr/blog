import axios from 'axios';
import { elements, requests, message } from '../base';
import { success } from '../views/authenticationView';

const { login, email, password } = elements;
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

  let type = {
    success: 'success',
    error: 'error',
  };

  try {
    //& Pass The email and password to a helper function that loggs in
    await sendCredentials(credentials);

    //& Validate Login
    const { successMessage } = message;
    success(successMessage, type['success']);
  } catch (error) {
    //& Error Message and reload
    const { failureMessage } = message;
    success(failureMessage, type['error']);
  }

  //& Reload the page
  setTimeout(location.reload(), 2000);
};

export const loginController = () => {
  //) Add event Listener and its handler
  login.addEventListener('click', loginHandler);
};
