import './style.css';
import Home from './components/Home';
import error404 from './components/Error404';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import Wall from './components/Wall';

const rootDiv = document.getElementById('root');
let routes = {};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]);
};

routes = {
  404: error404,
  '/': Home(onNavigate),
  '/login': Login(onNavigate),
  '/register': Register(onNavigate),
  '/wall': Wall(onNavigate),
  '/Profile': Profile(onNavigate),
};

const component = () => routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.append(component());
  rootDiv.removeChild(rootDiv.firstChild);
};

rootDiv.appendChild(component());
