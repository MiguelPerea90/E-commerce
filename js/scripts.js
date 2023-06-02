let products = [];

fetch("./js/products.json")
    .then(response => response.json())
    .then(data => {
        products = data;

        cargarProductos(products);
})

const productsContainer = document.getElementById('products-container')
const botonesCategorias = document.querySelectorAll(".botones-categorias")

function cargarProductos() {
    products.forEach(product => {

        const div  = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <div class="container-img">
                <img class="product-image" src="${product.image}" alt="${product.title}">
            </div>

            <div class="product-detail">
                
                    <p class="product-title">${product.title.slice(0, 51)}</p>
                
                
                    <p class="product-precio">$${product.price}.00</p>
               
            </div>
        `;

        productsContainer.appendChild(div)
    })
}
cargarProductos()

console.log(botonesCategorias)
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.target.classList.add("active")
        
    })
})










