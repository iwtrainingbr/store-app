describe('Testar o menu do aplicativo', () => {
    it ('Acessar a pagina inicial', () => {
        cy.visit('http://localhost:3000/inicio');

        cy.contains('Iw Store');
    });

    it ('testar se o menu abre', () => {
        cy.get('#abrir-menu').click();
        cy.contains('Ajuda');
    });

    it ('Testar se o menu fecha', () => {
        cy.get('body').click();
    });

    it ('testar se tem todas as opcoes', () => {

    })
});