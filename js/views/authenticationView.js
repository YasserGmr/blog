import { elements } from '../base';

const { form } = elements;

//* Show login success
export const success = (message, type) => {
  //) Render success

  const markup = `    <div class="alert-box alert-box--${type} hideit">
        <p>${message}</p>
        <i class="fa fa-times alert-box__close"></i>
    </div> 
`;

  form.insertAdjacentHTML('afterend', markup);
};
