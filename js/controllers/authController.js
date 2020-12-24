import { doc } from 'prettier';
import { elements } from '../base';

const { login } = elements;

const getLoginCredentials = (email, password) => {
  const emailText = email;
};

const loginHandler = e => {
  //& Prevent Reload
  e.preventDefault();

  //& Get email and password
  // const credentials = getLoginCredentials(email, password)
  console.log(document.getElementById('email'));
};

export const loginController = () => {
  //) Add event Listener and its handler
  login.addEventListener('click', e => {
    e.preventDefault();
    console.log('Helo');
  });
};
