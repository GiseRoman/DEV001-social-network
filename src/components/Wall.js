import { savePost, onGetPost } from '../lib/firebase';

const Wall = () => {
  // creacion de contenedores para el muro
  const WallCont = document.createElement('section');
  const TitleCont = document.createElement('div');
  const LogoWall = document.createElement('img');
  const WallTitle = document.createElement('h1');
  const PostsCont = document.createElement('section');
  const WallForm = document.createElement('form');
  const WallPost = document.createElement('input');
  const btnPost = document.createElement('button');
  const Posts = document.createElement('section');

  // Agregar contenidos
  TitleCont.className = 'titLogCont';
  LogoWall.src = '../img/lyds.svg';
  LogoWall.className = 'logoLogWall';
  WallTitle.textContent = 'Muro';
  WallTitle.className = 'titleWall';
  PostsCont.className = 'postsCont';
  WallForm.id = 'formPost';
  WallPost.type = 'text';
  WallPost.required = '';
  WallPost.placeholder = 'Escribe tu publicacion';
  WallPost.className = 'inputPost';
  btnPost.textContent = 'Publicar';
  btnPost.className = 'btnPost';
  Posts.className = 'allPosts';

  // Agregar funciones a los botones
  btnPost.addEventListener('click', (e) => {
    e.preventDefault();
    savePost(WallPost.value);
  });

  // funcion para cargar posts guardados
  const getPosts = async () => {
    onGetPost((querySnapshot) => {
      let publicPost = '';

      querySnapshot.forEach((doc) => {
        const posts = doc.data();
        publicPost += `
        <div class="posts">
        <p class="contPosts">${posts.post}</p>
        </div>
        `;
      });
      Posts.innerHTML = publicPost;
    });
  };
  getPosts();
  // Insertar los contenidos en el contenedor padre
  TitleCont.appendChild(LogoWall);
  TitleCont.appendChild(WallTitle);
  WallForm.appendChild(WallPost);
  WallForm.appendChild(btnPost);
  PostsCont.appendChild(WallForm);
  PostsCont.appendChild(Posts);
  WallCont.appendChild(TitleCont);
  WallCont.appendChild(PostsCont);

  // retornar el contenedor padre
  return WallCont;
};

export default Wall;
