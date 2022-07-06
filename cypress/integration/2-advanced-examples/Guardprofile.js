/// <reference types="Cypress" />

import LoginPage from '../../support/pageObjects/LoginPage'

import GuardprofilePage from '../../support/pageObjects/GuardprofilePage'

describe('360 login fuctionality', function(){

    
    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })

      const loginPage = new LoginPage()
      const guardPage = new GuardprofilePage()


    it('Guard Profile', function(){


        loginPage.getException();

       cy.visit('https://adminfontend.the360.in/')


       loginPage.getEmail().type(this.data.email).invoke('attr', 'placeholder').should('contain', 'Email address')

       loginPage.getPassword().type(this.data.password).invoke('attr', 'placeholder').should('contain', 'Password')
      
       loginPage.getSubmitButton().should('be.visible')
       loginPage.getSubmitButton().click()

       loginPage.getAlert().click()

       loginPage.getLaunchDevServer().should('contain', 'Launch')

       loginPage.getLaunchDevServer().click()
  
       guardPage.getStaff().click()

       guardPage.getGuard().click()

       guardPage.getSearch().type('test', {force: true})
       
       guardPage.getAddGuardsButton().click({force: true})

       guardPage.getFirstName().type('nam0')
       
       guardPage.getLastName().type('t050')

       guardPage.getPhone().type('09560')

       guardPage.getSubmit().click()

       guardPage.getSearch().clear({force: true})

       guardPage.getRearrangeButton().click({force: true})

       guardPage.getGuardNameRemoveBtn().wait(1000).click()

       guardPage.getGuardNameSubmit().click()

       guardPage.getRearrangeButton().wait(1000).should('be.visible').click({force: true})
      
       guardPage.getGuardNameVisible().click()

       guardPage.getGuardNameSubmit().click()


    })

    
    })


   

