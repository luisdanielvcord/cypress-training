class ShippingStepPage {
    private termsCheckbox: string;
    private proceedCheckout: string;

    constructor() {
        this.termsCheckbox = "#cgv";
        this.proceedCheckout = "[name=\"processCarrier\"]";
    }

    public acceptTerms(): void {
        cy.get(this.termsCheckbox).check();
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedCheckout).click();
    }
}

export { ShippingStepPage }
