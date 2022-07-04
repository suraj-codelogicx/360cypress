/// <reference types="Cypress" />

import LoginPage from '../../support/pageObjects/LoginPage'

describe('360 login fuctionality', function(){

    
    before(function() {

        cy.fixture('example').then(function(data){

            this.data = data
        })
        

      })

    it('Login to 360dev server', function(){

        const loginPage = new LoginPage()

        loginPage.getException();

       cy.visit('https://adminfontend.the360.in/')

       loginPage.getEmail().type(this.data.email)

       loginPage.getPassword().type(this.data.password)
    
       loginPage.getSubmitButton().click()

       loginPage.getAlert().click()
      
       loginPage.getLaunchDevServer().click()

    })

   

})