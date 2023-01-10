import { onGetPost } from './firebase';

// funcion para cargar posts guardados
export const getPosts = async () => {
  onGetPost((querySnapshot) => {
    let publicPost = '';

    querySnapshot.forEach((doc) => {
      const posts = doc.data();
      publicPost += `
        <div>
          <p>${posts.post}</p>
        </div>
      `;
    });
    console.log(publicPost);
  });
};
