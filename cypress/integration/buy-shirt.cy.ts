import {AddressStepPage, LoginPage, MenuContentPage, PaymentStepPage,
  ProductsListPage, ShippingStepPage, ShoppingCartPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const productLists = new ProductsListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productLists.addShirtToCart();
    productLists.clickProceedToCheckout();

    shoppingCartPage.clickProceedToCheckout();

    loginPage.login();

    addressStepPage.clickProceedToCheckout();

    shippingStepPage.checkTermsBox();
    shippingStepPage.clickProceedToCheckout();

    paymentStepPage.selectBankWire();
    paymentStepPage.clickConfirmOrderButton();

    paymentStepPage.getConfirmedOrder();
  });
});
