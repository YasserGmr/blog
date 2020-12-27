import { elements } from './base';
import { loginController } from './controllers/authController';
import { articleController } from './controllers/articleController';

const { login, article } = elements;

const init = () => {
  //) Check if Login button exists, If true, add Event Listner
  if (login) loginController();

  //) Check if Add Article button exists, if true, add Event Listner
  if (article) articleController();
};

init();
