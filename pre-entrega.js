//Queryselectors
const productos = document.querySelector ('#productos');
const titulo = document.querySelector('h1');
const card = document.querySelector ('.card');
const subtitulo = document.querySelector ('.subtitulo');
const texto = document.querySelector ('p');
const contenedor = document.querySelector ('#card-productos');
const inputNombre = document.querySelector('#nombre');
const btn = document.querySelector ('#btn');
const p = document.querySelector ('.advertencia')
const btn2 = document.querySelector ('#btn2');
let iconoCard ;


//Solicita el nombre al usuario para darle la bienvenida + cantidad de caracteres que debe poner
const nombre = localStorage.getItem ('name');
if (nombre){
    titulo.innerText = `Bienvenido/a ${nombre}`;
}
else{
    titulo.innerText = `Bienvenido/a`;
}

btn.onclick = ( ) => {
    login();
}

function login(){
    let nombre = inputNombre.value;

    if (nombre != ''){
        titulo.innerText = `Bienvenido/a ${nombre}`
    }
    else{
        p.innerText = 'Complete el nombre de usuario';
    }

    console.log(nombre);
    localStorage.setItem('name', nombre)
}

inputNombre.addEventListener('blur', ()=>{
    const usuario = inputNombre.value.trim();

    if(usuario.length > 20){
        p.innerText = 'El nombre de usuario es demasiado largo';
    }
    else{
        p.innerText = '';
    }
})

btn2.addEventListener('click', ()=>{
    localStorage.removeItem('name');
    titulo.innerText = `Bienvenido/a`;
})

//Mostrar los productos que estan en oferta
function Producto (nombre, precio){

        this.nombre = nombre;
        this.precio = precio;

        this.descuento = function(){
            this.precioConDescuento = this.precio * 0.75;
            alert ('El precio con descuento queda en: ' + '$' + this.precioConDescuento);
        }
    }

const producto1 = new Producto ('Platos', 25000);
const producto2 = new Producto ('Tazas', 15000);
const producto3 = new Producto ('Macetas', 30000);
const producto4 = new Producto ('Mates', 10000);

console.log (producto1, producto2, producto3, producto4);

//Lista de todos los producos
const productoInicio = [
        {id: 1, nombre: 'Platos', categoria: 'Cocina', precio: 25000, img: './media/img-plato7.jpg'},
        {id: 2, nombre: 'Tazas', categoria: 'Cocina', precio: 15000, img: './media/img-taza3.jpg'},
        {id: 3, nombre: 'Mates', categoria: 'Cocina', precio: 10000, img: './media/img-mate3.jpg'},
        {id: 4, nombre: 'Bowls', categoria: 'Cocina', precio: 20000, img: './media/img-bowl3.jpg'},
        {id: 5, nombre: 'Escultura', categoria: 'Hogar', precio: 35000, img: './media/img-escultura.jpg'}
    ];
    
const renderProducts = (list) => {
    contenedor.innerHTML = '';
    
    list.forEach (product => {
    contenedor.innerHTML += //HTML
    `<div class="card">
    <div class="card-image">
    <img src="${product.img}" class="imagen-card">
    </div>
    <div class="card-body">
        <h4>${product.nombre}</h4>
        <button id="${product.id} " type="button" class="btnAdd">
        <i class="fa-solid fa-cart-plus"></i>
    </button>
        <p class="texto-card">$${product.precio}</p>
        </div>`;
    })

    
 //Agrega un elemento al carrito
    const btns = document.querySelectorAll ('.btnAdd');

    btns.forEach(btn => {
    btn.addEventListener ('click', addToCart);
    });
    }

    const addToCart = (e) =>{
        const id = e.target.id;

     const product = productoInicio.find (item => item.id == id);
        console.table (product);

        cart.addToCart(product);
        cartCount.innerText = cart.getCount ();
    }

    renderProducts (productoInicio)


//Prueba archivo JSON
const persona ={
    nombre: 'Sofia',
    email: 'email@gmail.com'
}
const text = JSON.stringify(persona)
console.log(persona);
console.log(text);

localStorage.setItem ('persona', text);

const datoString = localStorage.getItem ('persona');
const Objeto = JSON.parse(datoString);

console.log(Objeto);

