class PaymentStepPage {
    private bankWire: string;
    private confirmOrderButton: string;
    private confirmedOrder: string;


    constructor() {
        this.bankWire = ".bankwire";
        this.confirmOrderButton = "#cart_navigation button";
        this.confirmedOrder = "is complete";
    }

    public selectBankWire(): void {
        cy.get(this.bankWire).click();
    }

    public confirmOrder(): void {
        cy.get(this.confirmOrderButton).click();
    }

    public getConfirmationMessage(): any {
        return cy.contains(this.confirmedOrder);
    }
}

export { PaymentStepPage }
