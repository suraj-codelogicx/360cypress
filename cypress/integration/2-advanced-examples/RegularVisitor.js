/// <reference types="Cypress" />

import GuardprofilePage from '../../support/pageObjects/GuardprofilePage';

import RegularVisitorPage from '../../support/pageObjects/RegularVisitorPage';

describe('Guard login fuctionality', function(){

    const guardPage = new GuardprofilePage()
    const regularVisitorPage = new RegularVisitorPage()
    
    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })



    it('Guard Login', function(){

      cy.login(this.data.email, this.data.password);

      guardPage.getStaff().click()

      regularVisitorPage.getRegularVisitorTab().click()

      regularVisitorPage.getSearch().type('test', {froce: true})

      cy.wait(2000)
      
      regularVisitorPage.getVisitorsDetails().click({force: true})

      cy.wait(2000)

      regularVisitorPage.getCloseVisitorsDetails().click()

      regularVisitorPage.getSearch().clear()

      regularVisitorPage.getFilterButton().click()

      regularVisitorPage.getFilterSearch().type('842184')

      regularVisitorPage.getFilter().click()

      regularVisitorPage.getFilterButton().click()

      regularVisitorPage.getFilterSearch().clear()

      regularVisitorPage.getFilter().click()

      regularVisitorPage.getFilterButton().click({force: true})


      regularVisitorPage.getFilterCategory().type('c').click()

      regularVisitorPage.getFilter().click()




      

      
    });

})