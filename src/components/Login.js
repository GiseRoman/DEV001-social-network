import { GoogleAuthProvider } from 'firebase/auth';
import { login, loginGoogle, provider } from '../lib/firebase';

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
  const btnLoginGoogle = document.createElement('button');
  const linkRegist = document.createElement('p');
  const ErrorCode = document.createElement('div');

  // Agregar contenidos al formulario y los botones
  TitleCont.className = 'titLogCont';
  LogoLogin.src = '../img/libros.png';
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
  btnLoginGoogle.textContent = 'Google';
  btnLoginGoogle.className = 'btn';
  linkRegist.innerHTML = '¿Aún no tienes una cuenta? <a href="">Regístrate</a>';
  linkRegist.className = 'linkLogReg';
  ErrorCode.textContent = '';

  // Agregar funciones a los botones
  linkRegist.addEventListener('click', () => onNavigate('/register'));

  btnLogin.addEventListener('click', () => {
    login(LoginMail.value, LoginPass.value)
      .then(() => onNavigate('/wall'))
      .catch((error) => {
        if (error.code === 'auth/email-alrady-in-use') {
          ErrorCode.textContent = 'El correo que intentas ingresar ya se encuentra registrado';
        } else if (error.code === 'auth/invalid-email') {
          ErrorCode.textContent = 'El correo que intentas ingresar es inválido';
        } else if (error.code) {
          ErrorCode.textContent = 'Datos de usuario incorrectos, intenta nuevamente';
        }
      });
  });

  btnLoginGoogle.addEventListener('click', () => {
    loginGoogle(provider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        onNavigate('/wall');
      }).catch((error) => {
        if (error.code) {
          ErrorCode.textContent = 'Parece que a ocurrido un error';
        }
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
  LoginCont.appendChild(btnLoginGoogle);
  LoginCont.appendChild(linkRegist);

  // retornar el contenedor padre
  return LoginCont;
};

export default Login;
