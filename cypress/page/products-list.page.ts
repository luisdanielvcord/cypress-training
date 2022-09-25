class ProductsListPage {
    private addShirt: string;
    private proceedCheckout: string;

    constructor() {
        this.addShirt = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.proceedCheckout = "[style*='display: block;'] .button-container > a";

    }

    public addShirtToCart(): void {
        cy.get(this.addShirt).click();
    }

    public clickProceedToCheckout(): void {
        cy.get(this.proceedCheckout).click();
    }
}

export { ProductsListPage }
