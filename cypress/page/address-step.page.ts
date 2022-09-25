class AddressStepPage {
    private proceedCheckout: string;

    constructor() {
        this.proceedCheckout = "[name=\"processAddress\"]";
    }

    public clickProceedToCheckout(): void {
        cy.get(this.proceedCheckout).click({force: true});
    }
}

export { AddressStepPage }
