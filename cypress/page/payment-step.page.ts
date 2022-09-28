class PaymentStepPage {
    private bankWire: string;
    private confirmOrderButton: string;
    private confirmedOrder: string;


    constructor() {
        this.bankWire = ".bankwire";
        this.confirmOrderButton = "#cart_navigation button";
        this.confirmedOrder = "#center_column > div > p > strong";
    }

    public selectBankWire(): void {
        cy.get(this.bankWire).click();
    }

    public confirmOrder(): void {
        cy.get(this.confirmOrderButton).click();
    }

    public getConfirmationMessage(): any {
        return cy.get(this.confirmedOrder);
    }
}

export { PaymentStepPage }
