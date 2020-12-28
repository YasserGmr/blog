//* Render Alert Box
export const renderAlert = (element, message, type) => {
  //) Render Alert Box
  const markup = `    <div class="alert-box alert-box--${type} hideit" id="alert">
        <p>${message}</p>
        <i class="fa fa-times alert-box__close"></i>
    </div> 
`;

  element.insertAdjacentHTML('afterend', markup);
};

export const removeBox = (idTag) => {
  const el = document.getElementById(`${idTag}`);
  el.style.display = 'none';
};

export const renderLoader = (element) => {
  const markup = `
  <div class="lds-ring" id="loader"><div></div><div></div><div></div><div></div></div>
  `;

  element.insertAdjacentHTML('beforeend', markup);
};
