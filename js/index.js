import { elements } from './base';
import * as Auth from './controllers/authController';

const { login } = elements;

const init = () => {
  //) Check if Login button exists, If true, add Event Listner
  if (login) Auth.loginController();
};

init();
