//No pude hacer que funcione, podrías ayudarme por favor :C

class Cart {
    constructor (list = []){
        this.cart = list;
        console.log ('Hola')
    }

    addToCart (product){
        this.cart.push (product);

        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    getProducts (){
        return this.cart;
    }

    getCount (){
          return this.cart.length;
    }
    getSum (){
        return 0;
    }
}