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

(nombre) ? titulo.innerText = `Bienvenido/a ${nombre}` :  titulo.innerText = `Bienvenido/a`;

btn.onclick = ( ) => {
    login();
      
    Swal.fire({
        title: "Registrado",
        text: "Ya colocaste tu nombre",
        icon: "success"
      });
}

function login(){
    let nombre = inputNombre.value;

    (nombre != '') ? titulo.innerText = `Bienvenido/a ${nombre}` : p.innerText = 'Complete el nombre de usuario';
 
    console.log(nombre);
    localStorage.setItem('name', nombre)
}

inputNombre.addEventListener('blur', ()=>{
    const usuario = inputNombre.value.trim();

    (usuario.length > 20) ? p.innerText = 'El nombre de usuario es demasiado largo' : p.innerText = '';
  
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

