/// <reference types="Cypress" />


import GuardprofilePage from '../../support/pageObjects/GuardprofilePage'

describe('360 login fuctionality', function(){

    
    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })

      const guardPage = new GuardprofilePage()


    it('Guard Profile', function(){

      cy.login(this.data.email, this.data.password);

       guardPage.getStaff().click()

       guardPage.getGuard().click()

       guardPage.getSearch().type('test', {force: true})
       
       guardPage.getAddGuardsButton().click({force: true})

       guardPage.getFirstName().type('suraj')
       
       guardPage.getLastName().type('test')

       guardPage.getPhone().type('007')

       guardPage.getSubmit().click()

       guardPage.getSearch().clear({force: true})

       guardPage.getRearrangeButton().click({force: true})

       guardPage.getGuardNameRemoveBtn().wait(1000).click()

       guardPage.getGuardNameSubmit().click()

       guardPage.getRearrangeButton().wait(1000).should('be.visible').click({force: true})
      
       guardPage.getGuardNameVisible().click({force: true} )

       guardPage.getGuardNameSubmit().click({force: true} )


    })

    
    })


   

