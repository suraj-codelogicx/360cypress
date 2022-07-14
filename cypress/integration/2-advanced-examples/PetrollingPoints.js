/// <reference types="Cypress" />

import GuardprofilePage from '../../support/pageObjects/GuardprofilePage';

import PetrollingPointsPage from '../../support/pageObjects/PetrollingPointsPage';


describe('Regular Visitor fuctionality', function(){

    const guardPage = new GuardprofilePage();

    const petrollingPage = new PetrollingPointsPage();


    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })



    it('Regular Visitor', function(){

      cy.login(this.data.email, this.data.password);

      guardPage.getStaff().click()

      cy.wait(2000)
    
      petrollingPage.getPetrollinPointsTab().click()

      petrollingPage.getSearch().type('test')

      cy.wait(2000)

      petrollingPage.getSearch().clear()

      petrollingPage.getAddCheckpoint().click()

      petrollingPage.getAddName().type('test')
      
      petrollingPage.getCheckpointArea().type('test')
      
      petrollingPage.getSubmit().click()

    });

});


