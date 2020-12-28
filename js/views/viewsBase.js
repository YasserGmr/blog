//* Render Alert Box
export const renderAlert = (element, message, type) => {
  //) Render success
  const markup = `    <div class="alert-box alert-box--${type} hideit" id="alert">
        <p>${message}</p>
        <i class="fa fa-times alert-box__close"></i>
    </div> 
`;

  element.insertAdjacentHTML('afterend', markup);
};
