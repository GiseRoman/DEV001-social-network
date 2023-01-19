const Home = (onNavigate) => {
  // creacion de contenedores para la pantalla de bienvenida
  const HomeCont = document.createElement('section');
  const HomeLogoCont = document.createElement('div');
  const HomeLogo = document.createElement('img');
  const HomeLogoText = document.createElement('p');
  const HomeTitle = document.createElement('h2');
  const btnLogin = document.createElement('button');
  const btnRegis = document.createElement('button');

  // Agregar contenidos a los botones
  HomeLogoCont.className = 'logoContHome';
  HomeLogo.src = '../img/libros.png';
  HomeLogo.alt = 'Love Your Damn Self Logo';
  HomeLogo.className = 'logoHome';
  HomeLogoText.textContent = 'Home of readers';
  HomeLogoText.className = 'logoHomeText';
  HomeTitle.textContent = 'Home of readers';
  HomeTitle.className = 'titulo';
  btnLogin.textContent = 'Iniciar sesión';
  btnLogin.className = 'btn';
  btnRegis.textContent = 'Registrarse';
  btnRegis.className = 'btn';

  // Agregar funciones a los botones
  btnLogin.addEventListener('click', () => onNavigate('/login'));

  btnRegis.addEventListener('click', () => onNavigate('/register'));

  // Insertar los contenidos en el contenedor padre
  HomeLogoCont.append(HomeLogo);
  // HomeLogoCont.append(HomeLogoText);
  HomeCont.append(HomeLogoCont);
  HomeCont.append(HomeTitle);
  HomeCont.append(btnLogin);
  HomeCont.append(btnRegis);

  // retornar el contenedor padre
  return HomeCont;
};

export default Home;
