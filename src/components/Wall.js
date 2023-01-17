import {
  savePost,
  onGetPost,
  deletePost,
  getPost,
  updatePost,
  currentUserInfo,
  logOut,
} from '../lib/firebase';

const Wall = (onNavigate) => {
  // creacion de contenedores para el muro
  const WallCont = document.createElement('section');
  const TitleCont = document.createElement('div');
  const LogoWall = document.createElement('img');
  const WallTitle = document.createElement('h1');
  const LogOut = document.createElement('button');
  const PostsCont = document.createElement('section');
  const WallForm = document.createElement('form');
  const WallPostLabel = document.createElement('label');
  const WallPost = document.createElement('textarea');
  const btnPost = document.createElement('button');
  const Posts = document.createElement('section');
  let id = '';

  // Agregar contenidos
  WallCont.className = 'generalCont';
  TitleCont.className = 'titLogCont';
  LogoWall.src = '../img/logoBook.svg';
  LogoWall.className = 'logoLogWall';
  WallTitle.textContent = 'Publicaciones';
  WallTitle.className = 'titleWall';
  LogOut.textContent = 'Log Out';
  LogOut.className = 'logOut';
  PostsCont.className = 'postsCont';
  WallForm.id = 'formPost';
  WallPostLabel.for = '';
  WallPostLabel.textContent = 'Post';
  WallPost.required = '';
  WallPost.placeholder = 'Escribe tu publicacion';
  WallPost.className = 'inputPost';
  btnPost.textContent = 'Publicar';
  btnPost.className = 'btnPost';
  btnPost.type = 'submit';
  Posts.className = 'allPosts';

  // Agregar funciones
  // Cerrar sesión
  LogOut.addEventListener('click', () => {
    logOut();
    onNavigate('/');
  });
  // generar un post nuevo
  btnPost.addEventListener('click', (e) => {
    e.preventDefault();

    const date = new Date();
    const uid = currentUserInfo().uid;
    savePost(currentUserInfo().displayName, WallPost.value, date, uid);

    WallForm.reset();
  });

  // Envío de post
  WallForm.addEventListener('submit', () => WallForm.reset());

  // cargar posts guardados
  const getPosts = async () => {
    onGetPost((querySnapshot) => {
      let publicPost = '';

      querySnapshot.forEach((doc) => {
        const posts = doc.data();
        if (posts.uid === currentUserInfo().uid) {
          publicPost += `
          <div class="posts">
          <p class="postUser">${posts.user}</p>
          <button class="btnTrash" data-id="${doc.id}" title="Eliminar post"><img src="../img/removePost.svg" class="trashImg" data-id="${doc.id}"></button>
          <p id='postCont' class="contPosts">${posts.post}</p>
          <p id="btnSendEd" class="btnSendEdit"></p>
          <button class="btnEdit" data-id="${doc.id}" title="Editar post"><img src="../img/editPost.svg" class="pencilImg" data-id="${doc.id}"></button>
          </div>
          `;
        } else {
          publicPost += `
          <div class="posts">
          <p class="postUser">${posts.user}</p>
          <button class="btnTrash" data-id="${doc.id}" title="Eliminar post"><img></button>
          <p class="contPosts">${posts.post}</p>
          <p id="btnSendEd" class="btnSendEdit"></p>
          <button class="btnLike" data-id="${doc.id}" title="Me gusta"><img src="../img/like.svg" class="Like" data-id="${doc.id}"></button>
          </div>
          `;
        }
      });
      Posts.innerHTML = publicPost;
      // Eliminar posts
      const btnsRemove = Posts.querySelectorAll('.btnTrash');
      btnsRemove.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          // Modal para confirmación de eliminación de posts
          const modalDelete = document.createElement('div');
          const modalDeleteCont = document.createElement('p');
          const btnDeleteSi = document.createElement('button');
          const btnDeleteCancel = document.createElement('button');

          modalDelete.className = 'modalEdit';
          modalDeleteCont.textContent = '¿Estás segura que deseas eliminar este post?';
          btnDeleteSi.textContent = 'Eliminar';
          btnDeleteSi.className = 'btnEditSi';
          btnDeleteCancel.textContent = 'Cancelar';
          btnDeleteCancel.className = 'btnEditCancel';

          modalDelete.appendChild(modalDeleteCont);
          modalDelete.appendChild(btnDeleteSi);
          modalDelete.appendChild(btnDeleteCancel);
          WallCont.appendChild(modalDelete);
          // Confirmar eliminación
          btnDeleteSi.addEventListener('click', (e) => {
            e.preventDefault();
            deletePost(dataset.id);
            WallCont.removeChild(modalDelete);
          });
          // Cancelar eliminación
          btnDeleteCancel.addEventListener('click', (e) => {
            e.preventDefault();
            WallCont.removeChild(modalDelete);
          });
        });
      });
      // Editar posts
      const btnsEdit = Posts.querySelectorAll('.btnEdit');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async ({ target: { dataset } }) => {
          const doc = await getPost(dataset.id);
          const editPost = doc.data();
          const contPost = document.getElementById('postCont');
          // Crear input para editar posts
          const inputEditPost = document.createElement('textarea');
          inputEditPost.textContent = '';
          inputEditPost.className = 'contPosts';
          const parent = contPost.parentNode;
          parent.replaceChild(inputEditPost, contPost);
          inputEditPost.value = editPost.post;
          id = doc.id;

          const btnSendEditVoid = document.getElementById('btnSendEd');
          const btnSendEdit = document.createElement('button');
          btnSendEdit.textContent = 'Editar';
          btnSendEdit.className = 'btnSendEdit';
          const parentEdit = btnSendEditVoid.parentNode;
          parentEdit.replaceChild(btnSendEdit, btnSendEditVoid);

          const btnEditSend = Posts.querySelectorAll('.btnSendEdit');

          btnEditSend.forEach((btn2) => {
            btn2.addEventListener('click', () => {
              // Modal para confirmación de edición de posts
              const modalEdit = document.createElement('div');
              const modalEditConts = document.createElement('div');
              const modalEditCont = document.createElement('p');
              const btnEditSi = document.createElement('button');
              const btnEditCancel = document.createElement('button');

              modalEdit.className = 'modalEdit';
              modalEditConts.className = 'modalEditConts';
              modalEditCont.textContent = '¿Estás segura que deseas guardar los cambios realizados?';
              btnEditSi.textContent = 'Guardar';
              btnEditSi.className = 'btnEditSi';
              btnEditCancel.textContent = 'Cancelar';
              btnEditCancel.className = 'btnEditCancel';

              modalEditConts.appendChild(modalEditCont);
              modalEditConts.appendChild(btnEditSi);
              modalEditConts.appendChild(btnEditCancel);
              modalEdit.appendChild(modalEditConts);
              WallCont.appendChild(modalEdit);
              // Guardar cambios de edición
              btnEditSi.addEventListener('click', (e) => {
                e.preventDefault();
                WallCont.removeChild(modalEdit);
                parentEdit.replaceChild(btnSendEditVoid, btnSendEdit);
                updatePost(id, {
                  post: inputEditPost.value,
                });
              });
              // Cancelar Edición de posts
              btnEditCancel.addEventListener('click', (e) => {
                e.preventDefault();
                WallCont.removeChild(modalEdit);
                parentEdit.replaceChild(btnSendEditVoid, btnSendEdit);
                parent.replaceChild(contPost, inputEditPost);
              });
            });
          });
        });
      });
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
  WallCont.appendChild(LogOut);
  WallCont.appendChild(PostsCont);

  // retornar el contenedor padre
  return WallCont;
};

export default Wall;
