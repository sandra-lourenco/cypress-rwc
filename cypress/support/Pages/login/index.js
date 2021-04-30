const el = require('./elements').ELEMENTS

class Login {
//acessar a pagina de login
acessarLogin(){
    cy.visit('login');
}

//preencher o formulario
preencherFormulario(){
    cy.get(el.inputEmail).type(Cypress.config().user.email)
    cy.get(el.inputPassword).type(Cypress.config().user.password)
}

//submeter o formulario de login
submeterFormulario(){
    cy.get(el.buttonSubmit).click()
}

}

export default new Login()