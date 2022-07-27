class AssetsPage {

    getManagement() {

        return cy.contains('Management');
    }

    getAssets() {

        return cy.get('a[href="/management/asset/"]');
    }

    getSearch() {

        return cy.get("input[type='text']");
    }

    getVerifySearchResult(){
        return cy.get("td[role='cell']")
    }

    getAddAssetCategory(){

        return cy.contains('Add Asset Category')
    }

}

export default AssetsPage;