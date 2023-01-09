const Wall = () => {
  // creacion de contenedores para el muro
  const WallCont = document.createElement('section');
  const TitleCont = document.createElement('div');
  const LogoWall = document.createElement('img');
  const WallTitle = document.createElement('h1');

  // Agregar contenidos
  TitleCont.className = 'titLogCont';
  LogoWall.src = '../img/lyds.svg';
  LogoWall.className = 'logoLogWall';
  WallTitle.textContent = 'Muro';
  WallTitle.className = 'titleRegist';

  // Agregar funciones a los botones

  // Insertar los contenidos en el contenedor padre
  TitleCont.appendChild(LogoWall);
  TitleCont.appendChild(WallTitle);
  WallCont.appendChild(TitleCont);

  // retornar el contenedor padre
  return WallCont;
};

export default Wall;
