describe('Teste do login', () => {
   it('Visitar a página de login', () => {
       cy.visit('http://localhost:3000');
   });

   it('Certifique-se que está na página certa', () => {
       cy.contains('Fazer Login');
   });

   it('Preencha o formulário de login', () => {
       cy.get('#email').type('alessandro@email.com');
       cy.get('#senha').type('12345678');
       cy.get('#form-login').submit();
   });
}); //npx cypress open