const loginUrl = 'http://www.mocky.io/v2/5e4c2671310000c998d8bd24';
const userUrl = 'http://www.mocky.io/v2/5e4c25c5310000e2cad8bd1e';

function login() {
  cy.visit('/login');
  cy.get('input[type=email]').type('test@email.com');
  cy.get('input[type=password]').type('password');
  cy.get('button').click();
}

function mockLoginResponse() {
  cy.server();
  cy.fixture('user-login-success.json').as('userLoginSuccessJson');
  cy.fixture('user-details.json').as('userDetailsJson');
  cy.route({
    method: 'POST',
    url: loginUrl,
    response: '@userLoginSuccessJson',
  }).as('mockLoginSuccess');
  cy.route({
    method: 'GET',
    url: userUrl,
    response: '@userDetailsJson',
  });
}

describe('User', () => {
  it('is logged out', () => {
    cy.visit('/')
      .window()
      .its('app.store')
      .its('state.auth.loggedIn')
      .should('equal', false);
  });

  it('can log in', () => {
    mockLoginResponse();

    login();

    cy.window()
      .its('app.store')
      .its('state.auth.loggedIn')
      .should('equal', true);
  });
});
