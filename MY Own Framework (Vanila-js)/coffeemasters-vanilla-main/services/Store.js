const Store = {
    menu : null,
    cart : [],
};

const proxiedStore = new Proxy(Store, {
    set(target, prop, value) {
        target[prop] = value;
        if (prop === 'menu') {
            window.dispatchEvent(new Event('appMenuUpdated'));
        }
        if (prop === 'cart') {
            window.dispatchEvent(new Event('appCartUpdated'));
        }
        return true;
    }
});
export default proxiedStore;