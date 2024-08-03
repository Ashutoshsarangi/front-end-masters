const Router = {
    init : function () {
        console.log('Router initialized');
        document.querySelectorAll('a.navlink').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const route = e.target.getAttribute('href');
                this.go(route);
            });
        });

        // Event Handler when URL change directly in the browser
        window.addEventListener('popstate', e => {
            this.go(e.state.route);
        });

        this.go(location.pathname);
    },
    go : function (route, addToHistory = true) {
        console.log('Going to route --> ', route);
        if (addToHistory) {
            history.pushState({route}, '', route); // This will add the route to the browser history
        }

        let pageElement = null;

        switch (route) {
            case '/':
                pageElement = document.createElement('menu-page');
                break;
            case '/order':
                pageElement = document.createElement('order-page');
                break;
            default:
                if (route.startsWith('/product-')) {
                    const productId = route.split('-')[1];
                    alert(productId);
                    pageElement = document.createElement('details-page');
                    pageElement.dataset.productId = productId;
                    break;
                }
                document.body.innerHTML = '<h1>404 Page Not Found</h1>';
                break;
        }
        const mainElement = document.querySelector('main');
        mainElement.children[0]?.remove();// it will remove everything before adding the new page
        mainElement.appendChild(pageElement)
        window.scrollX = 0;
        window.scrollY = 0;
    }
};

export default Router;

