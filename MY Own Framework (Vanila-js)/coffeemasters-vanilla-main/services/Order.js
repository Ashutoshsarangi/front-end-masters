import {getProductById} from './Menu.js';


export async function addToCart (id) {
    const product = await getProductById(id);
    const result = app.store.cart.filter(productInCart => productInCart.product.id === id);
    if (result.length > 0) {
       return app.store.cart.map(product=> {
          if (product.product.id === id) {
              product.quantity += 1;
          }
            return product;
       });
    } else {
        app.store.cart = [...app.store.cart, {product, quantity: 1}];
    }
}

export function  removeFromCart(id) {
    app.store.cart = app.store.cart.filter(p => p.product.id !== id);
}