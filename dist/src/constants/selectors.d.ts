export declare const selectors: {
    readonly login: {
        readonly usernameInput: "[data-test=\"username\"]";
        readonly passwordInput: "[data-test=\"password\"]";
        readonly loginButton: "[data-test=\"login-button\"]";
        readonly errorMessage: "[data-test=\"error\"]";
        readonly errorButton: "[data-test=\"error-button\"]";
    };
    readonly inventory: {
        readonly backpack: "[data-test=\"add-to-cart-sauce-labs-backpack\"]";
        readonly bikeLight: "[data-test=\"add-to-cart-sauce-labs-bike-light\"]";
        readonly boltTShirt: "[data-test=\"add-to-cart-sauce-labs-bolt-t-shirt\"]";
        readonly fleeceJacket: "[data-test=\"add-to-cart-sauce-labs-fleece-jacket\"]";
        readonly labSonesie: "[data-test=\"add-to-cart-sauce-labs-onesie\"]";
        readonly shirtRed: "[data-test=\"add-to-cart-test.allthethings()-t-shirt-(red)\"]";
        readonly menuButton: "#react-burger-menu-btn";
        readonly logoutLink: "[data-test=\"logout-sidebar-link\"]";
        readonly pageTitle: "[data-test=\"title\"]";
        readonly cartBadge: "[data-test=\"shopping-cart-badge\"]";
        readonly itemPrice: "[data-test=\"inventory-item-price\"]";
        readonly burgerMenu: "[data-test=\"open-menu\"]";
        readonly itemName: "[data-test=\"inventory-item-name\"]";
    };
    readonly cart: {
        readonly shoppingCartLink: "[data-test=\"shopping-cart-link\"]";
        readonly continueShopping: "[data-test=\"continue-shopping\"]";
        readonly checkoutBtn: "[data-test=\"checkout\"]";
        readonly inventory_item_price: "[data-test=\"inventory-item-price\"]";
        readonly inventory_item_name: ".inventory_item_name";
    };
    readonly checkout: {
        readonly continueBtn: "[data-test=\"continue\"]";
        readonly cancelBtn: "[data-test=\"cancel\"]";
        readonly firstName: "[data-test=\"firstName\"]";
        readonly lastName: "[data-test=\"lastName\"]";
        readonly postalCode: "[data-test=\"postalCode\"]";
        readonly finish: "[data-test=\"finish\"]";
        readonly backToProductsBtn: "[data-test=\"back-to-products\"]";
        readonly completeHeader: "[data-test=\"complete-header\"]";
        readonly error: readonly ["data-test=\"error\""];
    };
    readonly filter: {
        readonly sortDropdown: "select[data-test=\"product-sort-container\"]";
        readonly highToLow: "hilo";
        readonly lowToHigh: "lohi";
        readonly nameAZ: "az";
        readonly nameZA: "za";
    };
    readonly removeButtons: {
        readonly backpack: "[data-test='remove-sauce-labs-backpack']";
    };
};
export declare const inventorySelectors: ("[data-test=\"add-to-cart-sauce-labs-backpack\"]" | "[data-test=\"add-to-cart-sauce-labs-bike-light\"]" | "[data-test=\"add-to-cart-sauce-labs-bolt-t-shirt\"]" | "[data-test=\"add-to-cart-sauce-labs-fleece-jacket\"]" | "[data-test=\"add-to-cart-sauce-labs-onesie\"]" | "[data-test=\"add-to-cart-test.allthethings()-t-shirt-(red)\"]")[];
