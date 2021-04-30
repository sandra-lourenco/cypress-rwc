const faker = require('faker')
const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Articles {

    acessarFormularioDeNovaPublicacao(){
         cy.get(el.linkNovaPublicacao).click()
    }

    preencherFormulario(){
    //preencher o formulario do artigo
        cy.get(el.inputTitle).type('Agilizei Title')
        cy.get(el.inputDescription).type('Cypress')
        cy.get(el.textAreaContent).type(faker.lorem.paragraph())
        cy.get(el.inputTags).type('Cypress')
  
    }

    submeterPublicacao(){


          //submeter o artigo
    cy.get(el.buttonsubmit).click()
    }

    verificarSeAPublicacaoFoiCriadaComSucesso(){
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
        expect(postArticlesResponse.status).to.eq(200)
    })

        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitle) => {
        expect(postArticlesResponse.status).to.eq(200)
    })

        cy.wait(`@${Routes.as.getArticleTitleComments}`).then((getArticlesTitleComments) => {
        expect(postArticlesResponse.status).to.eq(200)
    })

    }
        }
    

export default new Articles();