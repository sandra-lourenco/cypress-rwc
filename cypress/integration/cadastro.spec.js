/// <reference types="cypress" />

import cadastro from '../support/Pages/cadastro'

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        cadastro.entrarPaginaRegistrar()
        cadastro.preencherFormulario()
        cadastro.submeterFormulario()

        //verificação
    });
    
});