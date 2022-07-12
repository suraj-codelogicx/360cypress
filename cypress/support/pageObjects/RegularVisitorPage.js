class RegularVisitorPage
{

    getRegularVisitorTab() {

        return cy.get(':nth-child(3) > .sub-menu > :nth-child(4) > .side-nav-link-ref')
    }

    getSearch() {

        return cy.get('.col-md-5 > .v-input > .v-input__control > .v-input__slot input')
    }

    getVisitorsDetails() {

        return cy.get('.tableRow > :nth-child(1) > [aria-colindex="2"]')
    }

    getCloseVisitorsDetails() {

        return cy.get('.checklistModalCloseButton > .far')
    }

    getFilterButton() {

        return cy.get('.addButton')
    }

    getFilterSearch() {

        return cy.get('.pb-3 > .v-input > .v-input__control > .v-input__slot input')
    }

    getFilter() {

        return cy.get('.col-lg-12 > .btn')
    }

    getFilterCategory() {

        return cy.get('.v-select__selections')
    }


}

export default RegularVisitorPage;