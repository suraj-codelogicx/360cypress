class PetrollingPointsPage{

    getPetrollinPointsTab() {

        return cy.get(':nth-child(3) > .sub-menu > :nth-child(6) > .side-nav-link-ref')
    }
    getSearch() {

        return cy.get('.v-input input')
    }

    getAddCheckpoint() {

        return cy.get('.addButton')
    }

    getAddName() {

        return cy.get(':nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot input')
    }

    getCheckpointArea() {

        return cy.get('form > :nth-child(1) > :nth-child(2) input')
    }

    getSubmit() {

        return cy.get('[style="margin: 15px;"] > :nth-child(2) > .col-12 > button')
    }


}

export default PetrollingPointsPage;