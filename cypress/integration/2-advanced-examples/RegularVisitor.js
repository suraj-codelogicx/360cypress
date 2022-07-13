/// <reference types="Cypress" />

import GuardprofilePage from '../../support/pageObjects/GuardprofilePage';

import RegularVisitorPage from '../../support/pageObjects/RegularVisitorPage';

describe('Regular Visitor fuctionality', function(){

    const guardPage = new GuardprofilePage()
    const regularVisitorPage = new RegularVisitorPage()
    
    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })



    it('Regular Visitor', function(){

      cy.login(this.data.email, this.data.password);

      guardPage.getStaff().click()

      cy.wait(2000)

      regularVisitorPage.getRegularVisitorTab().click()

      cy.wait(2000)

      //type test in search box
      regularVisitorPage.getSearch().type('test', {force: true})

      cy.wait(2000)
      
      regularVisitorPage.getVisitorsDetails().click({force: true})

      cy.wait(2000)

      regularVisitorPage.getCloseVisitorsDetails().click()

      cy.wait(2000)

      //clear the search box after getting the results
      regularVisitorPage.getSearch().clear()

      cy.wait(2000)

      regularVisitorPage.getFilterButton().click({force: true})

      cy.wait(2000)

      //type verification code in search box
      regularVisitorPage.getFilterSearch().type('842184')

      cy.wait(2000)

      regularVisitorPage.getFilter().click()

      cy.wait(2000)

      regularVisitorPage.getFilterButton().click({force: true})

      cy.wait(2000)

      regularVisitorPage.getFilterSearch().clear()

      cy.wait(2000)

      regularVisitorPage.getFilter().click()

      cy.wait(2000)

      regularVisitorPage.getFilterButton().click({force: true})

      cy.wait(2000)

      //type c in category drodown
      regularVisitorPage.getFilterCategory().type('c').click()

      cy.wait(2000)

      regularVisitorPage.getFilter().click()


      
    });


    it('Regular Visitor with negative values', function(){

      cy.login(this.data.email, this.data.password);

      guardPage.getStaff().click()

      cy.wait(2000)

      regularVisitorPage.getRegularVisitorTab().click()

      cy.wait(2000)

      //type invalid characters in search box
      regularVisitorPage.getSearch().type('...', {force: true})

      cy.wait(2000)
      
      regularVisitorPage.getSearch().clear()

      cy.wait(2000)

      regularVisitorPage.getFilterButton().click({force: true})

      cy.wait(2000)

      //type invalid details in filter search and press filter button
      regularVisitorPage.getFilterSearch().type('x0x0')

      cy.wait(2000)

      regularVisitorPage.getFilter().click()

      cy.wait(2000)

      regularVisitorPage.getFilterButton().click({force: true})

      cy.wait(2000)

      regularVisitorPage.getFilterSearch().clear()

      cy.wait(2000)

      regularVisitorPage.getFilter().click()

      cy.wait(2000)

      regularVisitorPage.getFilterButton().click({force: true})

      cy.wait(2000)

      //type v in category filter dropdown menu
      regularVisitorPage.getFilterCategory().type('v')

      cy.wait(2000)

      regularVisitorPage.getFilter().click()


      
    });

})