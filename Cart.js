class Cart {
    constructor (list = []){
        this.cart = list;
    }

    addToCart ({id, nombre, precio, img}){
        const index = this.cart.findIndex (product => product.id == id);
        if (index == -1){
            this.cart.push ({id, nombre, precio, stock: 1});
        }
        else {
        this.cart [index].stock += 1;
        }

        localStorage.setItem('cart', JSON.stringify(this.cart));

    }
    getProducts (){
        return this.cart;
    }

    getCount (){
        const count = this.cart.reduce ( (cant, product) => {return cant + product.stock}, 0)
        return count;
        
    }
    getSum (){
        const sum = this.cart.reduce ( (acum, product) => {return acum + (product.stock * product.precio)}, 0)
        return sum;
    }
}

const cart = new Cart (listCart);
cartCount.innerText = cart.getCount ();

