import {
  AddressStepPage,
  LoginPage,
  MenuContentPage,
  PaymentStepPage,
  ProductsListPage,
  ShippingStepPage,
  ShoppingCartPage,
} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productLists: ProductsListPage;
  let shoppingCartPage: ShoppingCartPage;
  let loginPage: LoginPage;
  let addressStepPage: AddressStepPage;
  let shippingStepPage: ShippingStepPage;
  let paymentStepPage: PaymentStepPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    productLists = new ProductsListPage();
    shoppingCartPage = new ShoppingCartPage();
    loginPage = new LoginPage();
    addressStepPage = new AddressStepPage();
    shippingStepPage = new ShippingStepPage();
    paymentStepPage = new PaymentStepPage();
  });

  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productLists.addShirtToCart();
    productLists.proceedToCheckout();
    shoppingCartPage.proceedToCheckout();
    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");
    addressStepPage.proceedToCheckout();
    shippingStepPage.acceptTerms();
    shippingStepPage.proceedToCheckout();
    paymentStepPage.selectBankWire();
    paymentStepPage.confirmOrder();

    paymentStepPage.getConfirmationMessage().should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
