class MenuContentPage {
    private tShirtsMenu: string;
    private dressesMenu: string;
    private menuContentPageURL: string;

    constructor() {
        this.tShirtsMenu = "#block_top_menu > ul > li > [title=\"T-shirts\"]";
        this.dressesMenu = "#block_top_menu > ul > li > [title=\"Dresses\"]";
        this.menuContentPageURL = "http://automationpractice.com/";

    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL);
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtsMenu).click();
    }

    public goToDressesMenu(): void {
        cy.get(this.dressesMenu).click();
    }
}

export { MenuContentPage }
