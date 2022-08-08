/// <reference types="Cypress" />

import FlatOwnersPage from '../../support/pageObjects/FlatOwnersPage';

import Flatspage from '../../support/pageObjects/Flatspage';


describe('Flats fuctionality', function(){

    const flatOwnersPage = new FlatOwnersPage();

    const flatspage = new Flatspage();


    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })

      it('Flats', function(){

        cy.login(this.data.email, this.data.password);
  
        flatOwnersPage.getProperty().click()
        
        cy.wait(2000);

        flatspage.getFlats().click()

        cy.wait(2000)

        

    });

});