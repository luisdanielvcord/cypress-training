class ShoppingCartPage {
    private proceedCheckout: string;

    constructor() {
        this.proceedCheckout = ".cart_navigation span";
    }

    public clickProceedToCheckout(): void {
        cy.get(this.proceedCheckout).click();
    }
}

export { ShoppingCartPage }
