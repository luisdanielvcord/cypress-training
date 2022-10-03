class ProductsListPage {
    private addShirt: string;
    private proceedCheckout: string;

    constructor() {
        this.addShirt = "Add to cart";
        this.proceedCheckout = "Proceed to checkout";

    }

    public addShirtToCart(): void {
        cy.contains(this.addShirt).click();
    }

    public proceedToCheckout(): void {
        cy.contains(this.proceedCheckout).click();
    }
}

export { ProductsListPage }
