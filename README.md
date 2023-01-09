# Creando una Red Social

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Definición del producto](#2-definición-del-producto)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Prototipo de baja fidelidad](#4-prototipo-de-baja-fidelidad)
* [5. Prototipo de alta fidelidad](#5-prototipo-de-alta-fidelidad)
* [6. Hacker edition](#6-hacker-edition)
* [7. Entrega](#7-entrega)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Para considerar Project Feedback](#9-para-considerar-project-feedback)

## 1. Preámbulo

Se a creado una red social en a través de la cuál los usuarios puedan expresar sus ideas y emociones de forma libre. Dentro de esta red social se pueden crear usuarios através de un email y un password, iniciar sesión con usuarios existentes e ingresar a un muro en el cuál pueden crear, editar y eliminar publicaciones.
Todo esto se consiguió teniendo en cuenta los siguientes objetivos:

### objetivos

* Desarrollar una SPA con temática de red social
* Aplicar los conceptos de responsividad en el desarrollo de las vistas (templates)
* Implementar un router para la navegación entre las diferentes vistas de la aplicación
* Emplear un servicio externo para la persistencia de datos de la aplicación
* Crear una suite de pruebas unitarias que permitan testear código asíncrono


## 2. Definición del producto

* Quiénes son los principales usuarios de producto.
* Qué problema resuelve el producto / para qué le servirá a estos usuarios.

## 3. Historias de usuario
### Definicion de terminado

Una vez que entiendas las necesidades de tus usuarixs, escribe las Historias de
Usuario que representen todo lo que necesitan hacer/ver en la Red Social. Cada
una de tus Historias de Usuario debe tener:

* **Criterios de Aceptación:** todo lo que debe ocurrir para satisfacer las
  necesidades del usuario.

* **Definición de terminado:** todos los aspectos técnicos que deben cumplirse
  para que, como equipo, sepan que esa historia está terminada y lista
  para publicarse. **Todas** tus Historias de Usuario (salvo excepciones), deben
  incluir estos aspectos en su Definición de Terminado (más todo lo que
  necesiten agregar):

  - Debe ser una SPA.
  - Debe ser _responsive_.
  - Deben haber recibido _code review_ de al menos una compañera de otro equipo.
  - Hicieron los _test_ unitarios
  - Testearon manualmente buscando errores e imperfecciones simples.
  - Hicieron _pruebas_ de usabilidad e incorporaron el _feedback_ de los
    usuarios como mejoras.
  - Desplegaron su aplicación y etiquetaron la versión (git tag).

#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:
  - Para el _login_ y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
  - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al
  usuario a corregirlos.

#### Muro/timeline

* Validaciones:
  - Al publicar, se debe validar que exista contenido en el _input_.
* Comportamiento:
  - Al recargar la aplicación, se debe verificar si el usuario está _logueado_
    antes de mostrar contenido.
  - Poder publicar un _post_.
  - Poder dar y quitar _like_ a una publicación. Máximo uno por usuario.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.

## 4. Prototipo de baja fidelidad

## 5. Prototipo de alta fidelidad

## 6. Interfaz desplegada
