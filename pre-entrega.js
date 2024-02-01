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
        {id: 5, nombre: 'Escultura', categoria: 'Hogar', precio: 35000, img: './media/img-escultura.jpg'},
    ];
    
for (let i=0; i<productoInicio.length; i++){
    
    let elemento = productoInicio[i];
    console.log(elemento);

    contenedor.innerHTML += //HTML
    `<div class="card">
    <div class="card-image">
    <img src="${elemento.img}" class="imagen-card">
    </div>
    <div class="card-body">
        <h4>${elemento.nombre}</h4>
        <i class='bx bx-cart bx-md' id='iconoCard'></i>
        <p class="texto-card">$${elemento.precio}</p>
     </div>`;
}

//Agrega al carrito
iconoAdd = document.querySelectorAll ('#iconoCard');

iconoAdd.forEach (iconoCard => {
    iconoCard.addEventListener ('click', (evento)=> {
        console.log (evento.target);
        const id = evento.target.id;
        addCarrito (id);
    })
});

function addCarrito (id){
    console.log ('Add');
}

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

//Buscar una categoría en el carrito
// productoInicio.forEach ((item) => {
//     console.log (item.nombre.toUpperCase())
// });

// let buscar = prompt ('Busca tu categoría de productos');

// const encontrados = productoInicio.find ((item) => item.categoria.toLowerCase() === buscar.toLowerCase());

// if (encontrados){
//     alert ('Se encontró la siguiente categoría: ' + encontrados.categoria)
// }
// else {
//     alert ('Esa categoría no existe ' + buscar)
// } 

//Busqueda por nombres en el carrito
// class Objeto {
//     constructor (productoInicio){
//         this.productoInicio = productoInicio;
//     }

//     getProductbyName (nombre){
//         const name = this.productoInicio.filter (item => item.nombre.toLowerCase().includes (nombre.toLowerCase()));
//         return name;
//     } 
// }

// const libro = new Objeto (productoInicio);
// const elementos = libro.getProductbyName('t');

// console.table(elementos);


// // //Agrega un elemento al carrito
// // while (confirm ('¿Deseas agregar otro producto al carrito?')){
// //     producto = prompt ('Indica tu producto');
// //     productoInicio.push (producto);
// // }

// // for (let i=0; i<productoInicio.length; i++){
// //     console.log (carrito [i]);
// // }

// //Quita un elemento del carrito
// while (confirm ('¿Deseas quitar un elemento del carrito?')){

//     producto = prompt ('Indica el producto que deseas quitar');
//     productoInicio.splice (3,1);
//     console.table (productoInicio);
// }


