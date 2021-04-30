class Routes {

    as = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticleTitleComments: 'POSTArticleTitleComments'
    }

    init(){
        cy.server()
        cy.route('POST', '**/api/articles').as(this.postArticles);
        cy.route('GET', '**/api/articles/agilizei-title-**').as(this.getArticlesTitle);
        cy.route('POST', '**/api/articles/agilizei-title-**/comments').as(this.getArticleTitleComments);
    }
}

export default new Routes();