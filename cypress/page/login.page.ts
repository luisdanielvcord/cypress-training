class LoginPage {
    private email: string;
    private password: string;
    private emailField: string;
    private passwordField: string;
    private submitButton: string;

    constructor() {
        this.email = "aperdomobo@gmail.com";
        this.password = "WorkshopProtractor";
        this.emailField = "#email";
        this.passwordField = "#passwd";
        this.submitButton = "#SubmitLogin";
    }

    public login(): void {
        cy.get(this.emailField).type(this.email);
        cy.get(this.passwordField).type(this.password);
        cy.get(this.submitButton).click();   
    }

}

export { LoginPage }
