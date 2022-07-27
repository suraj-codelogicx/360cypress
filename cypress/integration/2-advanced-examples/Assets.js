/// <reference types="Cypress" />

import AssetsPage from '../../support/pageObjects/AssetsPage';

describe('Assets fuctionality', function(){

    const assetsPage = new AssetsPage();

    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })

      it('Assets', function(){

        cy.login(this.data.email, this.data.password);

        assetsPage.getManagement().click()

        cy.wait(2000);
  
        assetsPage.getAssets().click()

        cy.wait(2000);

        assetsPage.getSearch().eq(0).type('test', {force: true})

        assetsPage.getVerifySearchResult().eq(1).should('contain', 'test')

        cy.wait(2000);

        assetsPage.getSearch().eq(0).clear()

        cy.wait(2000)

        assetsPage.getAddAssetCategory().click({force: true})
        
        cy.wait(2000)



    });

});