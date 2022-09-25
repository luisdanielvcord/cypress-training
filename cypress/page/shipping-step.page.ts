class ShippingStepPage {
    private termsCheckbox: string;
    private proceedCheckout: string;

    constructor() {
        this.termsCheckbox = "#cgv";
        this.proceedCheckout = "[name=\"processCarrier\"]";
    }

    public checkTermsBox(): void {
        cy.get(this.termsCheckbox).check();
    }

    public clickProceedToCheckout(): void {
        cy.get(this.proceedCheckout).click();
    }
}

export { ShippingStepPage }
