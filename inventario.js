var AgregarP = document.querySelector("#AgregarP");
var BorrarP = document.querySelector("#BorrarP");
var BuscarP = document.querySelector("#BuscarP");
var ListarP = document.querySelector("#ListarP");
var ListarProductosI = document.querySelector("#ListarProductosI");
var btnAgregarPosicion = document.querySelector("#btnAgregarPosicion");

var producto = document.querySelector("#producto");
var codigoP = document.querySelector("#codigoP");
var descripcionP = document.querySelector("#descripcionP");
var cantidadP = document.querySelector("#cantidadP");
var costoP = document.querySelector("#costoP");
var listaP = document.querySelector("#listaP");
var agregarPosicion = document.querySelector("#BuscarP");

var resProducto = document.querySelector("#resProducto");
var resCodigoP = document.querySelector("#resCodigoP");
var resDescripcionP = document.querySelector("#resDescripcionP");
var resCantidadP = document.querySelector("#resCantidadP");
var resCostoP = document.querySelector("#resCostoP");
var resListaP = document.querySelector("#resListaP");
var resValorM = document.querySelector("#resValorM");

var vecProducto = new Array();
var vecCodigoP = new Array();
var vecDescripcionP = new Array();
var vecCantidadP = new Array();
var vecCostoP = new Array();
var vecListaP = new Array();
var vecAgregarPosicion = new Array();
var sumMer = 0;

class Producto {
    constructor(nombre, codigo, descripcion, cantidad, costo) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.costo = costo;
    }

    agregarP(producto) {
        vecProducto.push(producto);
    }

    agregarPosicion(posicion, producto) {

        if (posicion < 20 && posicion <= vecProducto.length) {
            vecProducto.splice(posicion - 1, 0, producto);
        } else {
            alert('No hay mas espacio')
        }

    }

    borrarP(codigo1) {
        for (let i = 0; i <= vecProducto.length; i++) {
            if (vecProducto[i]) {
                if (codigo1 === vecProducto[i].codigo) {
                    sumMer -= (vecProducto[i].costo * vecProducto[i].cantidad)
                    resValorM.innerHTML = '$' + sumMer
                    vecProducto.splice(i, 1)
                }
            } else {
                alert('Por favor ingrese un articulo')
            }
        }
    }

    buscarP(codigo2) {
        for (let i = 0; i <= vecProducto.length; i++) {
            if (vecProducto[i]) {
                if (codigo2 === vecProducto[i].codigo) {
                    console.log(vecProducto[i]);
                    resProducto.innerHTML = 'Nombre: ' + vecProducto[i].nombre;
                    resCodigoP.innerHTML = 'Codigo: ' + vecProducto[i].codigo;
                    resDescripcionP.innerHTML = 'Descripción: ' + vecProducto[i].descripcion;
                    resCantidadP.innerHTML = 'Cantidad: ' + vecProducto[i].cantidad;
                    resCostoP.innerHTML = 'Costo: ' + vecProducto[i].costo;
                }
            } else {
                alert('No existe');
            }
        }
    }
}


AgregarP.addEventListener('click', () => {
    let producto2 = new Producto(producto.value, codigoP.value, descripcionP.value, Number(cantidadP.value), Number(costoP.value));
    producto2.agregarP(producto2);
    sumMer += producto2.costo * producto2.cantidad;
    resValorM.innerHTML = '$' + sumMer;
    console.log(vecProducto);
})

BorrarP.addEventListener('click', () => {
    let producto = new Producto;
    producto.borrarP(codigoP.value);
    console.log(vecProducto);


})

BuscarP.addEventListener('click', () => {
    let producto = new Producto;
    producto.buscarP(codigoP.value);
})

ListarP.addEventListener('click', () => {
    listaP.innerHTML = "";
    resListaP.innerHTML = 'Productos: '
    for (let i = 0; i < vecProducto.length; i++) {
        let nueva = document.createElement('li');
        nueva.textContent = vecProductos[i].nombre + ' x ' + vecProducto[i].cantidad;
        listaP.appendChild(nueva);
    }
})

ListarProductosI.addEventListener('click', () => {
    listaP.innerHTML = "";
    resListaP.innerHTML = 'Productos: ';
    for (let i = vecProducto.length - 1; i >= 0; i--) {
        let nueva = document.createElement('li');
        nueva.textContent = vecProducto[i].nombre + ' x ' + vecProducto[i].cantidad;
        listaP.appendChild(nueva);
    }
})

btnAgregarPosicion.addEventListener('click', () => {
    let producto3 = new Producto(producto.value, codigoP.value, descripcionP.value, Number(cantidadP.value), Number(costoP.value));
    producto3.agregarPosicion(Number(agregarPosicion.value), producto3);
    console.log(vecProducto);
})