const Register = (onNavigate) => {
  // creacion de contenedores para la pantalla de registro
  const RegisterCont = document.createElement('section');
  const TitleCont = document.createElement('div');
  const LogoRegister = document.createElement('img');
  const RegisterTitle = document.createElement('h1');
  const RegisterForm = document.createElement('form');
  const TitleUserName = document.createElement('p');
  const RegistUserName = document.createElement('input');
  const TitleMail = document.createElement('p');
  const RegisterMail = document.createElement('input');
  const TitlePass = document.createElement('p');
  const RegisterPass = document.createElement('input');
  const btnRegister = document.createElement('button');
  const linkLogin = document.createElement('p');

  // Agregar contenidos al formulario y los botones
  TitleCont.className = 'titLogCont';
  LogoRegister.src = '../img/lyds.svg';
  LogoRegister.className = 'logoLogReg';
  RegisterTitle.textContent = 'Regístrate';
  RegisterTitle.className = 'titleRegist';
  TitleUserName.textContent = 'Nombre de usuario';
  TitleUserName.className = 'inputTitles';
  RegistUserName.type = 'text';
  RegistUserName.required = '';
  RegistUserName.placeholder = 'ej. SoñadoraDiurna91';
  RegistUserName.className = 'inputReg';
  TitleMail.textContent = 'Correo electrónico';
  TitleMail.className = 'inputTitles';
  RegisterMail.type = 'email';
  RegisterMail.required = '';
  RegisterMail.placeholder = 'ej. mail@domino.com';
  RegisterMail.className = 'inputReg';
  TitlePass.textContent = 'Contraseña';
  TitlePass.className = 'inputTitles';
  RegisterPass.type = 'password';
  RegisterPass.required = '';
  RegisterPass.placeholder = 'ej. 123Frutitastica';
  RegisterPass.className = 'inputReg';
  btnRegister.textContent = 'Registrarse';
  btnRegister.className = 'btn';
  linkLogin.innerHTML = '¿Ya tienes una cuenta? <a href="">Inicia sesión</a>';
  linkLogin.className = 'linkLogReg';

  // Agregar funciones a los botones
  linkLogin.addEventListener('click', () => onNavigate('/login'));

  // Insertar los contenidos en el contenedor padre
  TitleCont.appendChild(LogoRegister);
  TitleCont.appendChild(RegisterTitle);
  RegisterForm.appendChild(TitleUserName);
  RegisterForm.appendChild(RegistUserName);
  RegisterForm.appendChild(TitleMail);
  RegisterForm.appendChild(RegisterMail);
  RegisterForm.appendChild(TitlePass);
  RegisterForm.appendChild(RegisterPass);
  RegisterCont.appendChild(TitleCont);
  RegisterCont.appendChild(RegisterForm);
  RegisterCont.appendChild(btnRegister);
  RegisterCont.appendChild(linkLogin);

  // retornar el contenedor padre
  return RegisterCont;
};

export default Register;