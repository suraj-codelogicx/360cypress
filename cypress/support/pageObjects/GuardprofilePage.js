class GuardprofilePage {

    getStaff() {

        return cy.get(':nth-child(3) > .is-parent')

    }
    getGuard() {
        return cy.get(':nth-child(3) > .sub-menu > :nth-child(1) > .side-nav-link-ref')
    }

    getSearch() {
        return cy.get('#input-149')
    }

    getAddGuardsButton() {
        return cy.get('.addButton')
    }

    getFirstName() {
        return cy.get('#modal-addguard___BV_modal_body_ > form > :nth-child(1) > :nth-child(1) input')
    }

    getLastName() {
        return cy.get(':nth-child(2) > .v-input')
    }
    getPhone() {
        return cy.get('form > :nth-child(2) > .col-12 > .v-input')
    }
    getSubmit() {
        return cy.get('#modal-addguard___BV_modal_body_ > :nth-child(2) > .col-12 > .btn')
    }

    getRearrangeButton() {
        return cy.get('.extraButton')
    }

    getGuardNameRemoveBtn() {
        return cy.get(':nth-child(2) > .row > .col-lg-5 > .dangerBadge')

    }

    getGuardNameSubmit() {
        return cy.get('.col-xl-12 > .btn')

    }

    getGuardNameVisible() {
        return cy.get(':nth-child(1) > .row > .text-end > .successBadge')

    }

    
}



export default GuardprofilePage;