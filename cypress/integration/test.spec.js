describe('Test feature', () => {
  it('can tell the user is logged out', () => {
    cy.visit('/login')
      .window()
      .then((win) => {
        expect(win.store.state.auth.loggedIn).to.eq(false);
      });
  });
});
