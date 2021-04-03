describe('Fazer pedido pelo whatsapp', () => {
   it ('visitar a página inicial', () => {
       cy.visit('http://localhost:3000/inicio');
   });

   it ('Selecionar categoria', () => {
       cy.get('[data-action="acessar-categoria"]').first().click();
   });

   it ('Selecionar pedido', () => {
       cy.get('[data-action="acessar-pedido"]').first().click();
   });

   it('Adicionar ao carrinho', () => {
       cy.get('#add-carrinho').click();
   });

   it ('Acessar a pagina do carrinho', () => {
       cy.get('#abrir-menu').click();
       cy.get('#pagina-carrinho').click();
       cy.contains('Carrinho de Compras');
   });

   it ('Finalizar pedido', () => {
       cy.get('#finalizar-pedido').click();
   });
});