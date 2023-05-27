const products = [
    {
        id: "lavabo-01",
        title: "Fregadero de granito pulido de ballet negro",
        image: "https://m.media-amazon.com/images/I/511GKpLmpXL._AC_SY355_.jpg",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 51
    },
    {
        id: "lavabo-02",
        title: "Fregadero rectangular de hormigón de onda poco profunda de 22 pulgadas (gris oscuro)",
        image: "https://m.media-amazon.com/images/I/51SwZ-crfkL._AC_SX355_.jpg",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 34
    },
    {
        id: "lavabo-03",
        title: "Lavabo en piedra natural, diametro 40 cm",
        image: "https://m.media-amazon.com/images/I/61b3DwnrpTL._AC_SY355_.jpg",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 18
    },
    {
        id: "lavabo-04",
        title: "Lavabo sobre encimera cuarto de baño Milán rectángulo 30 x 40 cm negro",
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
    },{
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
        title: "Lavabo de Arte Antiguo europeo retro sobre encimera, lavabo de piedra, lavabo individual creativo LO620529",
        image: "https://ae01.alicdn.com/kf/HTB1dJzLv_XYBeNkHFrdq6AiuVXas/Lavabo-de-Arte-Antiguo-europeo-retro-sobre-encimera-lavabo-de-piedra-lavabo-individual-creativo-LO620529.jpg_Q90.jpg_.webp",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 115
    },{
        id: "lavabo-12",
        title: "Lavabo de sobre encimera rectangular negro 45x30x12 cm VidaXL",
        image: "https://b096bp98.tinifycdn.com/186635-thickbox_default/lavabo-de-sobre-encimera-rectangular-negro-45x30x12-cm-vidaxl.jpg?resize.width=712",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 115
    },{
        id: "lavabo-13",
        title: "Lavabo de piedra sunset negro",
        image: "https://www.campoloco.es/wp-content/uploads/2014/03/20107514.jpg",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 441
    },{
        id: "lavabo-14",
        title: "Lavabo Sobre Encimera De Piedra De Río, Pieza Única, Akta",
        image: "https://www.viadurini.es/data/prod/img/lavabo-da-appoggio-pezzo-unico-in-pietra-di-fiume-akta.jpg",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 108
    },{
        id: "lavabo-15",
        title: "Lavabo de piedra Natural de Río, lavabo de baño",
        image: "https://ae01.alicdn.com/kf/Sb473671a7fb74927b646900d2e301353x/Lavabo-de-piedra-Natural-de-R-o-lavabo-de-ba-o.jpg_Q90.jpg_.webp",
        category: {
            name: "Lavabos",
            id: "lavabos"
        },
        price: 300
    },
    
];


const productsContainer = document.getElementById('products-container')

function cargarProductos() {
    products.forEach(product => {

        const div  = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
        <img class="product-image" src="${product.image}" alt="${product.title}" width="200px">
            <div class="product-detail">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-precio">${product.price}</p>
            </div>
        `;

        productsContainer.appendChild(div)
    })
}
cargarProductos();