import Register from '../src/components/Register';

jest.mock('../__mocks__/main.js');

describe('existe la función register', () => {
  const component = Register();
  const btnCreateUser = component.querySelector('#btnRegister');
  const btnCreateUserGoog = component.querySelector('#btnRegisterGoog');
  // const linkLogReg = component.querySelector('linkLogReg');

  it('debe ser una función', () => {
    expect(typeof Register).toBe('function');
  });
  it('Existe un botón regístrate', () => {
    expect(btnCreateUser.innerHTML).toBe('Registrarse');
  });
  it('Existe un botón registrarse con Google', () => {
    expect(btnCreateUserGoog.innerHTML).toBe('Google');
  });
});
