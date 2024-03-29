//Queryselector
const productos = document.querySelector ('#productos');
const titulo = document.querySelector('h1');
const card = document.querySelector ('.card');
const subtitulo = document.querySelector ('.subtitulo');
const texto = document.querySelector ('p');
const contenedor = document.querySelector ('#card-productos');
const buscador = document.querySelector ('#inputSearch');
const btnBuscador = document.querySelector ('#btnBuscador');
const modal = document.querySelector ('#exampleModal')
const modalListProduct = document.querySelector ('#modalListProducts');
const btnModalCarrito = document.querySelector ('#btnModalCarrito');
const cartCount = document.querySelector ('#cartCount');
const cartSum = document.querySelector ('#cartSum');
const btnOrder = document.querySelector ('#btnOrder');

const btnVerTodos = document.querySelector ('#btnVerTodos');
const masProductos = document.querySelector ('#masProductos');

const data = JSON.parse (localStorage.getItem ('cart'));
const listCart = data ? data : [];

//Cargan más productos
const renderizarProductos = (data) => {
  masProductos.innerHTML = '';
  data.forEach(product => {
      masProductos.innerHTML += // html
                        `<div class="card" id="row">
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
  });
}

//Todos los productos
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

//Renderiza los productos para que aparezcan las tarjetas
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

    const product = todosProductos.find (item => item.id == id);
    console.table (product);

    cart.addToCart (product);
    cartCount.innerText = cart.getCount();

    Toastify({

      text: "Producto agregado al carrito",
      duration: 3000,
      style: {
        background: "#A6493F"
      }
      }).showToast();

    btnModalCarrito.addEventListener ('click', function (){
      const list = cart.getProducts();
      renderCart (list);

      cartSum.innerText = cart.getSum ();
    })
}

const renderCart = (list) => {
  modalListProduct.innerHTML = '';

  list.forEach (element => {
    modalListProduct.innerHTML += //HTML
    `  <tr>
    <td> ${element.nombre} </td>
    <td> ${element.stock} </td>
    <td> $${element.precio}</td>
    <td> $${element.precio * element.stock}</td>
  </tr>`
  })
}

renderProducts (todosProductos)

//Buscador de productos
buscador.addEventListener ('input', (event)=> {
    const search = event.target.value;
    const filtro = todosProductos.filter( (product) => product.nombre.toLowerCase().includes (search.toLowerCase ()));
    
    console.table (filtro);
    renderProducts(filtro);
})

//Ordenar por precios
btnOrder.addEventListener ('click', () => {

    todosProductos.sort ( (a,b) => {
        if (a.precio < b.precio){
            return -1
        }
        if (a.precio > b.precio){
            return 1
        }
        return 0
    })

    renderProducts(todosProductos);
    // btnOrder.setAttribute('disabled', true)

 //Ejemplo de Fetch a un servidor
    const endPoint = 'https://jsonplaceholder.typicode.com/comments';
    fetch (endPoint).then (respose => respose.json())
    .then (respJSON => {
      console.log (respJSON);
    });
})

btnOrder.addEventListener ('click', () => {
  console.log ('Ordenando los productos');

  setTimeout ( ()=> {
      console.log ('Los productos han sido ordenados')
  }, 500);
})

//Fetch local
btnVerTodos.addEventListener ('click', ()=> {
  console.log ('click');

const endPoint = 'datos.json';

 fetch(endPoint).then (respose => respose.json())
 .then (resp => {
    const data = resp.data;
    console.log (data);
    renderizarProductos (data);

  }).catch (error => {
    Swal.fire({
      title: "Upss...",
      text: 'ha ocurrido un error. Intentelo más tarde',
      icon: 'error',
      confirmButtonText: 'Aceptar'
  });
})
  });
