/// <reference types="cypress" />

import articles from '../support/index/articles';
import Routes from '../support/routes'

context('Publicação', () => {
    //hooks -> momentos antes e depois do teste
    //before/before each
    //after/after each
    //Page objects - AAA -> Arrange Act Assert
    // -> preparação ação verificação/validação


    beforeEach(() => {
       
        //preparação
        cy.backgroundLogin()
        articles.acessarFormularioDeNovapublicacao()
       
    });
    it('Criar uma nova publicação', () => {
       //Ação
       articles.preencherFormulario()
       articles.submeterPublicacao()
       

        //Verificação
        articles.verificarSeAPublicacaoFoiCriadaComSucesso()
    });
    
});