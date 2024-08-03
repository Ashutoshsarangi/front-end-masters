import API from './services/Api.js';
import Store from './services/Store.js';
import {loadData} from "./services/Menu.js";
import Router from './services/Router.js';

// Link to Web components

import {MenuPage} from "./components/MenuPage.js";
import {OrderPage} from "./components/OrderPage.js";
import {DetailsPage} from "./components/DetailsPage.js";
import {ProductItem} from "./components/ProductItem.js";
import {CartItem} from "./components/CartItem.js";

window.app = {};
app.store= Store;
app.Router = Router;
window.addEventListener('DOMContentLoaded', () => {
    // This is after DOM is loaded / Parsed
    // this is happening in the defer, but better to handle in some tricky scenarios like images loading etc.
     console.log('DOM fully loaded and parsed');
     loadData()
     app.Router.init();
});

window.addEventListener('appCartUpdated', (e) => {
     const badge = document.getElementById('badge');
     const quantity = app.store.cart.reduce((acc, curr) => {
          return acc + curr.quantity;
     }, 0);

     badge.textContent = quantity;
     badge.hidden = quantity == 0;
});