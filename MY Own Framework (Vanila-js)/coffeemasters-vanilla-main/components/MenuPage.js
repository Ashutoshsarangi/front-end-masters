export class MenuPage extends  HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
        this.loadCSS();
    }

    async loadCSS () {
        const css = await fetch('components/MenuPage.css');
        const cssText = await css.text();
        const style = document.createElement('style');
        style.textContent = cssText;
        this.root.appendChild(style);
    }

    connectedCallback() {
        alert('I am inside');
        const template = document.getElementById('menu-page-template');
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);

        window.addEventListener('appMenuUpdated', (e) => {
            this.render();
        });

        this.render();
    }

    render() {
        if (app.store.menu) {
            this.root.querySelector('#menu').innerHTML = '';
            for (let category of app.store.menu) {
              const liCategory = document.createElement('li');
              liCategory.innerHTML = `
              <h3>${category.name}</h3>
              <ul class="category"></ul>
              `
                this.root.querySelector('#menu').appendChild(liCategory);

              category.products.forEach(product => {
                  const item = document.createElement('product-item');
                  item.dataset.product = JSON.stringify(product);
                  liCategory.querySelector('.category').appendChild(item);
              });
            }
        } else {
            this.root.querySelector('#menu').innerHTML = '<h1>Loading...</h1>';
        }
    }
}

customElements.define('menu-page', MenuPage);
