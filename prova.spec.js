
describe('Dev prova', () => {

    it('Cadastrar entradas', () => {
cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
cy.get('#name').type("joão da silva")
cy.get('#email').type("joao@email.com")
cy.get('#password').type("12345678")
cy.get('button').contains ("Cadastrar").click()

 });
 // Cadastrar entradas
 }); 