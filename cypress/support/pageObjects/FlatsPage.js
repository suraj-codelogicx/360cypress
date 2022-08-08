class Flatspage{

    getFlats(){

        return cy.get('.mm-active > .sub-menu > :nth-child(3) > .side-nav-link-ref')
    }

    getSearch(){

        return cy.get('[style="margin-top: -15px;"] > .col input')

    }


}

export default Flatspage;