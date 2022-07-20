class RegularVisitorsLogPage{

    getLogs() {

        return cy.get(':nth-child(4) > .is-parent');
    }

    getRegularVisitorsLogs() {

        return cy.contains('Regular Visitor Log')
    }

    getFilter() {

        return cy.get('.text-end > :nth-child(1) > .btn')
    }

    getDate() {

        return cy.get("input[type='date']")
    }

    getCategories() {

        return cy.get('.v-select__selections input')
    }

    getCategoriesSelectOption() {

        return cy.get("div[role='option']")
    }

    getFilterSubmit() {

        return cy.get('.submitButton > .uil ')
    }

    getIsInside() {

        return cy.get('#__BVID__216 > :nth-child(1) > .handoverSwitch > #customSwitchsizemd ')
    }

    geResetFilter() {

        return cy.get('.resetButton')
    }


}

export default RegularVisitorsLogPage;