//Queryselector
const productos = document.querySelector ('#productos');
const titulo = document.querySelector('h1');
const card = document.querySelector ('.card');
const subtitulo = document.querySelector ('.subtitulo');
const texto = document.querySelector ('p');
const contenedor = document.querySelector ('#card-productos');
const cartCount = document.querySelector ('#iconoNav');
const buscador = document.querySelector ('#inputSearch');

//todos los productos
const todosProductos = [
    {id: 1, nombre: 'Plato con borde', categoria: 'Cocina', precio: 25000, img: './media/img-plato7.jpg'},
    {id: 2, nombre: 'Taza con dibujo', categoria: 'Cocina', precio: 15000, img: './media/img-taza3.jpg'},
    {id: 3, nombre: 'Mate avión', categoria: 'Cocina', precio: 10000, img: './media/img-mate3.jpg'},
    {id: 4, nombre: 'Bowl nube', categoria: 'Cocina', precio: 20000, img: './media/img-bowl3.jpg'},
    {id: 5, nombre: 'Buda mediano', categoria: 'Hogar', precio: 35000, img: './media/img-escultura.jpg'},
    {id: 6, nombre: 'Maceta O', categoria: 'Jardín', precio: 30000, img: './media/img-maceta2.jpg'},
    {id: 7, nombre: 'Soporte vidrio', categoria: 'Hogar', precio: 10000, img: './media/img-vela2.jpg'},
    {id: 8, nombre: 'Olla mediana', categoria: 'Cocina', precio: 50000, img: './media/img-olla.jpg'}
];

for (let i=0; i<todosProductos.length; i++){
    let elemento = todosProductos[i];
    console.log(elemento);

    contenedor.innerHTML += //HTML
    `<div class="card">
    <div class="card-image">
    <img src="${elemento.img}" class="imagen-card">
    </div>
    <div class="card-body">
        <h4>${elemento.nombre}</h4>
        <i class='bx bx-cart bx-md btnAdd'></i>
       <p class="texto-card">$${elemento.precio}</p>
        </div>`;
}

//Agrega un elemento al carrito
iconoAdd = document.querySelectorAll ('.btnAdd');

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

//Buscador
buscador.addEventListener ('input', (event)=> {
    console.log (event.target.value)
})

