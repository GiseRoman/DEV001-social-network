const error404 = () => {
  const errorCont = document.createElement('section');
  const errorImg = document.createElement('img');

  errorImg.src = '../img/error.png';

  errorCont.appendChild(errorImg);

  return errorCont;
};

export default error404;
