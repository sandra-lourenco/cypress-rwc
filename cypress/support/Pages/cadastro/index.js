const faker = require('faker')
const el = require('./elements').ELEMENTS

class Cadastro {
    
 //register
entrarPaginaRegistrar(){ 
    cy.visit('register');
}

//preencher
preencherFormulario(){
    cy.get(el.inputUsername).type(faker.name.firstName() + faker.name.lastName())
    cy.get(el.inputEmail).type(faker.internet.email())
    cy.get(el.inputPassword.type(12345678))
}

//submeter
submeterFormulario(){
    cy.get(el.buttonSubmit).click()
}
}
export default new Cadastro()