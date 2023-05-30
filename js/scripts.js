// let products = [];

// fetch("./js/products.json")
//     .then(response => response.json())
//     .then(data => {
//         products = data;

//         cargarProductos(products);
//         console.log(products);
// })

const products = [
    {
        id: "lavabo-01",
        title: "Fregadero de granito pulido",
        image: "https://m.media-amazon.com/images/I/511GKpLmpXL._AC_SY355_.jpg",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 51
    },
    {
        id: "lavabo-02",
        title: "Fregadero rectangular de hormigón",
        image: "https://m.media-amazon.com/images/I/51SwZ-crfkL._AC_SX355_.jpg",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 34
    },
    {
        id: "lavabo-03",
        title: "Lavabo en piedra natural",
        image: "https://m.media-amazon.com/images/I/61b3DwnrpTL._AC_SY355_.jpg",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 18
    },
    {
        id: "lavabo-04",
        title: "Lavabo sobre encimera cuarto de baño Milán",
        image: "https://www.wanda-collection.com/ar-lavabo-sobre-encimera-cuarto-de-bano-milan-rectangulo-30-x-40-cm-negro-924.jpg",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 189
    },
    {
        id: "lavabo-05",
        title: "Lavabo exclusivo de piedra natural charme",
        image: "https://www.arrelart.com/9610-large_default/lavabo-exclusivo-de-piedra-natural-charme.jpg",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 225
    },
    {
        id: "lavabo-06",
        title: "Lavabo sobre mueble AA",
        image: "https://img.archiexpo.es/images_ae/photo-mg/160885-13813105.webp",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 139
    },
    {
        id: "lavabo-07",
        title: "BAUXITA Lavabo encimera. 50x33x10 cm",
        image: "https://cdn.shopify.com/s/files/1/0272/5475/1366/products/DSC08125_2100x.jpg?v=1591966024",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 120
    },
    {
        id: "lavabo-08",
        title: "Lavabo ovalado de piedra zeolita okean",
        image: "https://www.arrelart.com/7332-large_default/lavabo-ovalado-piedra-zeolita-okean.jpg",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 275
    },
    {
        id: "lavabo-09",
        title: "Lavabo tratado de piedra natural lenny",
        image: "https://www.arrelart.com/6003-large_default/lavabo-tratado-de-piedra-natural-lenny.jpg",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 185
    },
    {
        id: "lavabo-10",
        title: "Lavabo MICRO Pizarra Nataural",
        image: "https://cdn.pymesenlared.es/img/31/373/16362/0x1200/microplus.1500286568.jpg",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 118
    },
    {
        id: "lavabo-11",
        title: "Lavabo de Arte Antiguo europeo retro sobre encimera",
        image: "https://ae01.alicdn.com/kf/HTB1dJzLv_XYBeNkHFrdq6AiuVXas/Lavabo-de-Arte-Antiguo-europeo-retro-sobre-encimera-lavabo-de-piedra-lavabo-individual-creativo-LO620529.jpg_Q90.jpg_.webp",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 115
    },
    {
        id: "lavabo-12",
        title: "Lavabo de sobre encimera rectangular",
        image: "https://b096bp98.tinifycdn.com/186635-thickbox_default/lavabo-de-sobre-encimera-rectangular-negro-45x30x12-cm-vidaxl.jpg?resize.width=712",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 115
    },
    {
        id: "bañera-1",
        title: "WOODBRIDGE Bañera independiente de acrílico",
        image: "https://m.media-amazon.com/images/I/81Ia0bPUIOL._AC_SL1500_.jpg",
        category: {
            name: "Bañeras",
            id: "bañeras"
        },
        price: 185
    },
    {
        id: "bañera-2",
        title: "Spa World Venzi - Bañera rectangular de hidromasaje",
        image: "https://m.media-amazon.com/images/I/91E4kedAJKL._AC_SX425_.jpg",
        category: {
            name: "Bañeras",
            id: "bañeras"
        },
        price: 2446
    },
    {
        id: "bañera-3",
        title: "Bañera de hielo plegable para adultos",
        image: "https://m.media-amazon.com/images/I/61dEodVNrnL._AC_SX425_.jpg",
        category: {
            name: "Bañeras",
            id: "bañeras"
        },
        price: 75
    },
    {
        id: "bañera-4",
        title: "Bañera plegable portátil",
        image: "https://m.media-amazon.com/images/I/51CQKnZQNwL._AC_SX425_.jpg",
        category: {
            name: "Bañeras",
            id: "bañeras"
        },
        price: 109
    },
    {
        id: "bañera-5",
        title: "AellerSen Bañeras portátiles, plegable para adultos,",
        image: "https://m.media-amazon.com/images/I/614JX5ZYZkL._AC_SX425_.jpg",
        category: {
            name: "Bañeras",
            id: "bañeras"
        },
        price: 84
    },
    {
        id: "bañera-6",
        title: "Bañera independiente de acrílico",
        image: "https://m.media-amazon.com/images/I/71rAUzBK3qL._AC_SX425_.jpg",
        category: {
            name: "Bañeras",
            id: "bañeras"
        },
        price: 300
    },
    {
        id: "bañera-7",
        title: "SEAAN Bañera portátil para adultos",
        image: "https://m.media-amazon.com/images/I/71W+KPt-RJL._AC_SX425_.jpg",
        category: {
            name: "Bañeras",
            id: "bañeras"
        },
        price: 79
    },
    {
        id: "bañera-8",
        title: "Empava Bañera de lujo de 59 pulgadas",
        image: "https://m.media-amazon.com/images/I/61xtfXvaVwL._AC_SL1500_.jpg",
        category: {
            name: "Bañeras",
            id: "bañeras"
        },
        price: 380
    },
    {
        id: "bañera-9",
        title: "KOHLER Stargaze - Bañera, color blanco",
        image: "https://m.media-amazon.com/images/I/41tvyH8rCrL._AC_SL1500_.jpg",
        category: {
            name: "Bañeras",
            id: "bañeras"
        },
        price: 170
    },
    {
        id: "bañera-10",
        title: "Kohler Baño de té para dos",
        image: "https://m.media-amazon.com/images/I/41F8sLOImKL._AC_SL1500_.jpg",
        category: {
            name: "Bañeras",
            id: "bañeras"
        },
        price: 287
    },
    {
        id: "bañera-11",
        title: "Atlantis Whirlpools - Bañera de hidromasaje rectangular",
        image: "https://m.media-amazon.com/images/I/81WJ5dYzniL._AC_SL1500_.jpg",
        category: {
            name: "Bañeras",
            id: "bañeras"
        },
        price: 1200
    },
    {
        id: "bañera-12",
        title: "Cetra - Bañera de hidromasaje",
        image: "https://m.media-amazon.com/images/I/417Ru3ZJlpL._AC_.jpg",
        category: {
            name: "Bañeras",
            id: "bañeras"
        },
        price: 2495
    }, 
];


const productsContainer = document.getElementById('products-container')

function cargarProductos() {
    products.forEach(product => {

        const div  = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <div class="container-img">
                <img class="product-image" src="${product.image}" alt="${product.title}" width="200px">
            </div>

            <div class="product-detail">
                <div class="container-title">
                    <h5 class="product-title">${product.title}</h5>
                </div>
                <div class="container-price">
                    <p class="product-precio">$${product.price}</p>
                </div>
            </div>
        `;

        productsContainer.appendChild(div)
    })
}
cargarProductos()





