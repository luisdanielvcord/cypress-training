class LoginPage {
    private emailField: string;
    private passwordField: string;
    private submitButton: string;

    constructor() {
        this.emailField = "#email";
        this.passwordField = "#passwd";
        this.submitButton = "#SubmitLogin";
    }

    public login(email: string, password: string): void {
        cy.get(this.emailField).type(email);
        cy.get(this.passwordField).type(password);
        cy.get(this.submitButton).click();
    }

}

export { LoginPage }
