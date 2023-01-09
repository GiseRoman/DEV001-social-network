import { login } from '../lib/firebase';

const Login = (onNavigate) => {
  // creacion de contenedores para la pantalla de inicio de sesión
  const LoginCont = document.createElement('section');
  const TitleCont = document.createElement('div');
  const LogoLogin = document.createElement('img');
  const LoginTitle = document.createElement('h1');
  const LoginForm = document.createElement('form');
  const TitleMail = document.createElement('p');
  const LoginMail = document.createElement('input');
  const TitlePass = document.createElement('p');
  const LoginPass = document.createElement('input');
  const btnLogin = document.createElement('button');
  const linkRegist = document.createElement('p');

  // Agregar contenidos al formulario y los botones
  TitleCont.className = 'titLogCont';
  LogoLogin.src = '../img/lyds.svg';
  LogoLogin.className = 'logoLogReg';
  LoginTitle.textContent = 'Inicia tu sesión';
  LoginTitle.className = 'titleLogin';
  LoginForm.id = 'formLogin';
  TitleMail.textContent = 'Correo electrónico';
  TitleMail.className = 'inputTitles';
  LoginMail.type = 'email';
  LoginMail.required = '';
  LoginMail.placeholder = 'ej. corderito@perdido.com';
  LoginMail.className = 'inputLog';
  TitlePass.textContent = 'Contraseña';
  TitlePass.className = 'inputTitles';
  LoginPass.type = 'password';
  LoginPass.required = '';
  LoginPass.placeholder = 'ej. Chimichangas23';
  LoginPass.className = 'inputLog';
  btnLogin.textContent = 'Iniciar sesión';
  btnLogin.className = 'btn';
  linkRegist.innerHTML = '¿Aún no tienes una cuenta? <a href="">Regístrate</a>';
  linkRegist.className = 'linkLogReg';

  // Agregar funciones a los botones
  linkRegist.addEventListener('click', () => onNavigate('/register'));

  btnLogin.addEventListener('click', () => {
    login(LoginMail.value, LoginPass.value)
      .then((user) => onNavigate('/wall'))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });

  // Insertar los contenidos en el contenedor padre
  TitleCont.appendChild(LogoLogin);
  TitleCont.appendChild(LoginTitle);
  LoginForm.appendChild(TitleMail);
  LoginForm.appendChild(LoginMail);
  LoginForm.appendChild(TitlePass);
  LoginForm.appendChild(LoginPass);
  LoginCont.appendChild(TitleCont);
  LoginCont.appendChild(LoginForm);
  LoginCont.appendChild(btnLogin);
  LoginCont.appendChild(linkRegist);

  // retornar el contenedor padre
  return LoginCont;
};

export default Login;
