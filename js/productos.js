const productos = [
    {
        "modelo": "iPhone 13",
        "img": "https://http2.mlstatic.com/D_NQ_NP_619667-MLA47781882790_102021-O.webp",
        "precio": 983999,
        "categoria": "celular",
        "colores": ["rojo","verde","gris","negro"],
        "memoria": ["128GB","256GB","512GB","1TB"]
    },
    {
        "modelo": "iPhone 14",
        "img": "https://http2.mlstatic.com/D_NQ_NP_786356-MLM51559385272_092022-O.webp",
        "precio": 1014000,
        "categoria": "celular",
        "colores": ["rojo","gris","negro"],
        "memoria": ["128GB","256GB","512GB","1TB"]
    },
    {
        "modelo": "iPhone 14 Pro",
        "img": "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2024/01/iPhone14PROMAX.jpg",
        "precio": 1999999,
        "categoria": "celular",
        "colores": ["rojo","azul","gris","blanco","marron"],
        "memoria": ["128GB","256GB","512GB","1TB"]
    },
    {
        "modelo": "iPhone 14 Pro Max",
        "img": "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2024/01/iPhone14PROMAX.jpg",
        "precio": 1999999,
        "categoria": "celular",
        "colores": ["rojo","azul","gris","blanco","marron"],
        "memoria": ["128GB","256GB","512GB","1TB"]
    },
    {
        "modelo": "iPhone 15",
        "img": "https://http2.mlstatic.com/D_NQ_NP_768125-MLA71783090116_092023-O.webp",
        "precio": 1889999,
        "categoria": "celular",
        "colores": ["rojo","azul","gris","blanco","marron"],
        "memoria": ["128GB","256GB","512GB","1TB"]
    },
    {
        "modelo": "iPhone 15 Pro",
        "img": "https://http2.mlstatic.com/D_NQ_NP_768125-MLA71783090116_092023-O.webp",
        "precio": 1889999,
        "categoria": "celular",
        "colores": ["rojo","azul","gris","blanco","marron"],
        "memoria": ["128GB","256GB","512GB","1TB"]
    },
    {
        "modelo": "iPhone 15 Pro Max",
        "img": "https://http2.mlstatic.com/D_NQ_NP_768125-MLA71783090116_092023-O.webp",
        "precio": 1889999,
        "categoria": "celular",
        "colores": ["rojo","azul","gris","blanco","marron"],
        "memoria": ["128GB","256GB","512GB","1TB"]
    },
    {
        "modelo": "Watch S8",
        "img": "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2024/01/watchS8.jpg",
        "precio": 2000000,
        "categoria": "reloj",
        "colores": ["verde","negro","gris"],
        "memoria": ["128GB","256GB","512GB","1TB"]
    },
    {
        "modelo": "MacBook Pro",
        "img": "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/11/macbookpro_max_-1.jpg",
        "precio": 1880000,
        "categoria": "notebook",
        "colores": ["negro","azul","blanco"],
        "memoria": ["128GB","256GB","512GB","1TB"]
    },
    {
        "modelo": "MacBook Air",
        "img": "https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp",
        "precio": 150000,
        "categoria": "notebook",
        "colores": ["negro","azul","blanco"],
        "memoria": ["128GB","256GB","512GB","1TB"]
    },
    {
        "modelo": "iMac",
        "img": "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/04/imac24.jpg",
        "precio": 1799999,
        "categoria": "computadora",
        "colores": ["negro","blanco"],
        "memoria": ["128GB","256GB","512GB","1TB"]
    },
    {
        "modelo": "iPad 9th generacion",
        "img": "https://http2.mlstatic.com/D_NQ_NP_830867-MLA74089488678_012024-O.webp",
        "precio": 740000,
        "categoria": "tablet",
        "colores": ["negro","azul","rosa"],
        "memoria": ["128GB","256GB","512GB","1TB"]
    },
    {
        "modelo": "iPad 10th generacion",
        "img": "https://http2.mlstatic.com/D_NQ_NP_803992-MLA52988770428_122022-O.webp",
        "precio": 999999,
        "categoria": "tablet",
        "colores": ["negro","azul","blanco","marron"],
        "memoria": ["128GB","256GB","512GB","1TB"]
    },
    {
        "modelo": "iPad Mini",
        "img": "https://http2.mlstatic.com/D_NQ_NP_998453-MLA48034797620_102021-O.webp",
        "precio": 795000,
        "categoria": "tablet",
        "colores": ["negro","azul","rosa"],
        "memoria": ["128GB","256GB","512GB","1TB"]
    },
    {
        "modelo": "iPad Pro",
        "img": "https://http2.mlstatic.com/D_NQ_NP_923870-MLA46975173473_082021-O.webp",
        "precio": 2400000,
        "categoria": "tablet",
        "colores": ["negro","azul","rosa","blanco","gris","marron"],
        "memoria": ["128GB","256GB","512GB","1TB"]
    }
];

let productosMostrados = productos;
const coloresDisponibles = ["azul","rojo","blanco","negro","gris","verde","rosa","marron","amarillo"];

function agregarProductos(productos) {
    const productosPublicados = document.querySelector(".productos-publicados");
    productosPublicados.innerHTML = ``;
    productos.forEach(producto => {
        let nuevoProducto = document.createElement("li");
        crearProducto(producto,nuevoProducto);
        productosPublicados.appendChild(nuevoProducto);
    });
}

function crearProducto(producto,nuevoProducto) {
    nuevoProducto.classList.add("producto");
    nuevoProducto.innerHTML = `
        <img src=${producto.img} alt=${producto.modelo}>
        <h2>${producto.modelo}</h2>
        <p>${formatoPrecio(producto.precio)}</p>`

    let formCarrito = document.createElement("form");
        formCarrito.classList.add("form-carrito");

    let selectColor = document.createElement("div");
    selectColor.classList.add("selec-color");
    selectColor.innerHTML = `<p>Seleccionar un color:</p>`
    producto.colores.forEach(color => {
        selectColor.innerHTML += `
        <label>
            <input type="radio" name="color" value=${color}>
            <span class="cbox-color" id="input-${color}"><span class="color"></span>${color}</span>
        </label>`
    });

    let selectMemoria = document.createElement("div");
    selectMemoria.classList.add("selec-memoria");
    selectMemoria.innerHTML = `<p>Seleccionar memoria:</p>`
    producto.memoria.forEach(memoria => {
        selectMemoria.innerHTML += `
        <label>
            <input type="radio" name="memoria" value=${memoria}>
            <span class="cbox-memoria" id="input-${memoria}">${memoria}</span>
        </label>`
    });

    let agregarCarritoBTN = document.createElement("input");
    agregarCarritoBTN.classList.add("btn-agregar-carrito");
    agregarCarritoBTN.setAttribute("type","submit");
    agregarCarritoBTN.setAttribute("value","Agregar al carrito");
    agregarCarritoBTN.addEventListener("click",(e)=>{
        e.preventDefault();
        agregarAlCarrito(producto, selectColor, selectMemoria)});

    formCarrito.appendChild(selectColor);
    formCarrito.appendChild(selectMemoria);
    formCarrito.appendChild(agregarCarritoBTN);
    nuevoProducto.appendChild(formCarrito);
}

function obtenerValorRadio(radios) {
    let valor;
    for (const radio of radios) {
        if (radio.checked) {
            valor = radio.value;
            break;
        }
    }
    return valor;
}

function agregarAlCarrito(producto, colores, capacidades) {
    let color = obtenerValorRadio(colores.querySelectorAll('input[name="color"]'));
    let memoria = obtenerValorRadio(capacidades.querySelectorAll('input[name="memoria"]'));
    if (color && memoria) {
        let aux = producto;
        aux.colores = color;
        aux.memoria = memoria;
        aux.cantidad = 1;
        let carritoLS = JSON.parse(localStorage.getItem("carrito"));
        if (carritoLS.productos.length === 0) {
            carritoLS = {"productos":[aux]};
        } else {
            repetido = buscarProductoRepetido(aux);
            if (repetido !== -1) {
                carritoLS.productos[repetido].cantidad++;
            } else {
                carritoLS.productos.push(aux);
            }
        }
        localStorage.setItem("carrito",JSON.stringify(carritoLS));
    } else {
        console.log("Seleccione un color y la capacidad de memoria deseada");
    }
}

function buscarProductoRepetido(producto){
    return JSON.parse(localStorage.getItem("carrito")).productos.map(e => JSON.stringify({"modelo": e.modelo, "color": e.colores, "memoria": e.memoria})).indexOf(JSON.stringify({"modelo": producto.modelo, "color": producto.colores, "memoria": producto.memoria}));
}

function iniciarCarrito() {
    if (!localStorage.getItem("carrito")) {
        localStorage.setItem("carrito",JSON.stringify({"productos":[]}));
    }
}

const formatoPrecio = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    let arr = number.toFixed(2).toString().split('.');
    arr[0] = arr[0].replace(exp,rep);
    return '$' + ((arr[1]) ? arr.join('.') : arr[0]);
}

function crearBarraBusqueda(){
    const barraBusqueda = document.createElement("div");
    barraBusqueda.classList.add("buscador");
    barraBusqueda.innerHTML = `
        <input type="text" name="buscador" class="in-busqueda" placeholder="Buscar">
        <button class="btn-buscador"><svg class="buscar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg></button>`;
    setTimeout(()=>{
        document.querySelector(".container-fluid").insertBefore(barraBusqueda,document.querySelector(".navbar-toggler"));
        document.querySelector(".btn-buscador").addEventListener("click",(e)=>{
            e.preventDefault();
            const valorBuscado = document.querySelector(".in-busqueda");
            if (valorBuscado){
                buscarProductos(valorBuscado.value);
                agregarProductos(productosMostrados);
            }
        });
        document.querySelector(".in-busqueda").addEventListener("keypress",(e)=>{
            if (e.key === 'Enter') {
                const valorBuscado = document.querySelector(".in-busqueda");
                if (valorBuscado){
                    buscarProductos(valorBuscado.value);
                    agregarProductos(productosMostrados);
                }
            }
        });
    },1);
    
}

function buscarProductos(valor){
    productosMostrados = productos.map(producto=>{
        if (producto.modelo.toLowerCase().includes(valor.toLowerCase())){
            return producto;
        }
    }).filter(el => el);
}

function crearFiltro(){
    const contenedorFiltro = document.querySelector(".filtrar-productos");
    contenedorFiltro.innerHTML = `
        ${(window.innerWidth <= 992)?'<details>':'<div class="contenedor-filtro">'}
            <${(window.innerWidth <= 992)?'summary':'h2'}>Filtrar productos</${(window.innerWidth <= 992)?'summary':'h2'}>
            <form action="" method="GET" autocomplete="off" class="formulario card card-body">
                <div class="section1">  
                    <select id="GET-categoria" name="categoria" >
                        <option disabled selected>Elige una categoría...</option>
                        <option>Todos</option>
                        <option>iPhone</option>
                        <option>iPad</option>
                        <option>Mac</option>
                        <option>Watch</option>
                        <option>AirPods</option>
                        <option>Cables</option>
                        <option>Fundas</option>
                        <option>Cargadores</option>
                        <option>Otros accesorios</option>
                    </select>
                    <h3>Precio</h3>
                    <div class="price-range">
                        <div class="price-range-input">
                            <label for="GET-min-price">Desde</label>
                            <input id="GET-min-price" type="number" placeholder="0" name="min-price">
                        </div>
                        <div class="price-range-input">
                            <label for="GET-min-price">Hasta</label>
                            <input id="GET-max-price" type="number" placeholder="3000000" name="max-price">
                        </div>
                    </div>
                </div>
                <div class="section2">
                    <h3>Colores</h3>
                    <div class="filtrar-colores"></div>
                </div>
                <input class="send-button" type="submit" value="Buscar">
            </form>
            ${(window.innerWidth <= 992)?'</details>':'</div>'}`;
        let filtroColor = document.querySelector(".filtrar-colores");
        coloresDisponibles.forEach(color => {
            filtroColor.innerHTML += `
                <label>
                    <input type="checkbox" value="${color}"/>
                    <span class="cbox-color" id="cbox-${color}"><span class="color"></span>${color}</span>
                </label>`
        });
}








document.addEventListener("DOMContentLoaded",()=>{
    iniciarCarrito();
    crearBarraBusqueda();
    crearFiltro();
    agregarProductos(productos,undefined);
});

window.addEventListener("resize",()=>crearFiltro());
