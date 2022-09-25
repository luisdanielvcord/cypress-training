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

    public clickConfirmOrderButton(): void {
        cy.get(this.confirmOrderButton).click();
    }

    public getConfirmedOrder(): void {
        cy.get(this.confirmedOrder).should(
            "have.text",
            "Your order on My Store is complete.",
          );
    }
}

export { PaymentStepPage }
