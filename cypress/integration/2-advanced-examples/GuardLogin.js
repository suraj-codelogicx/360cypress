/// <reference types="Cypress" />

import GuardprofilePage from '../../support/pageObjects/GuardprofilePage';

import GuardLoginPage from '../../support/pageObjects/GuardLoginPage'


describe('Guard login fuctionality', function(){

    const guardPage = new GuardprofilePage()

    const guardLogin = new GuardLoginPage()
    
    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data
        })
        

      })



    it('Guard Login', function(){

      cy.login(this.data.email, this.data.password);

      guardPage.getStaff().click()

      guardLogin.getGuardLogin().click()


      guardLogin.getSearch().type('abby',{force: true});

      guardLogin.getSearchText().should('have.text', 'Abbyprama')

      guardLogin.getSearch().clear()

      guardLogin.getAppLogin().click()

     guardLogin.getSelectGuard().click()

     guardLogin.getSelectGuardName().click()

     guardLogin.getGateNumber().click({force: true}).type('112',{force: true})

     guardLogin.getUseName().type('suraj123')

     guardLogin.getPassword().type('suraj123')

     guardLogin.getTowerGuardLogin().click()

     guardLogin.getSelectTower().click()

     cy.wait(2000)

     guardLogin.getSelectTowerName().click({force: true})

     cy.wait(2000)

     guardLogin.getSubmit().click()

     cy.wait(2000)

     guardLogin.getDeleteUser().click({force: true})

     guardLogin.geConfirmDelete().click()

      
    });


    })

    
    


   

