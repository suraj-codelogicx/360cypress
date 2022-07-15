/// <reference types="Cypress" />

import GuardprofilePage from '../../support/pageObjects/GuardprofilePage';

import PetrollingPointsPage from '../../support/pageObjects/PetrollingPointsPage';


describe('PetrollinPoints fuctionality', function(){

    const guardPage = new GuardprofilePage();

    const petrollingPage = new PetrollingPointsPage();


    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })



    it('PetrollinPoints', function(){

      cy.login(this.data.email, this.data.password);

      guardPage.getStaff().click()

      cy.wait(2000)
    
      petrollingPage.getPetrollinPointsTab().click()

      petrollingPage.getSearch().type('test')

      cy.wait(2000)

      petrollingPage.getSearch().clear()

      petrollingPage.getAddCheckpoint().click({force: true})

      petrollingPage.getCheckPointAddName().type('surajTest')
      
      petrollingPage.getCheckpointArea().type('surajtestarea')

      petrollingPage.getCheckpointLatitude().type('22.5805359')

      petrollingPage.getCheckpointLongitude().type('88.4351048')
      
      petrollingPage.getSubmit().click()

    });

    it('PetrollinPoints With Negative Values', function(){

      cy.login(this.data.email, this.data.password);

      guardPage.getStaff().click()

      cy.wait(2000)
    
      petrollingPage.getPetrollinPointsTab().click()

      petrollingPage.getSearch().type('. . *')

      cy.wait(2000)

      petrollingPage.getSearch().clear()

      petrollingPage.getAddCheckpoint().click({force: true})

      petrollingPage.getCheckPointAddName().type('*0*0')
      
      petrollingPage.getCheckpointArea().type('...')

      petrollingPage.getCheckpointLatitude().type('....')

      petrollingPage.getCheckpointLongitude().type('....')
      
      petrollingPage.getSubmit().click()

    });


});


