//CICLO + CONDICIONAL

const productos = [
    {nombre: "Clarinete Buffet E11" , precio: 500000},
    {nombre: "Clarinete Buffet Tosca" , precio: 5000000},
    {nombre: "Clarinete Buffet Festival" , precio: 2500000},
    {nombre: "Clarinete Buffet R13" , precio: 1000000},
];

let carrito=[]

let seleccion = prompt("Quieres comprar un producto? (s-si / n-no)")

while (seleccion != "s" && seleccion != "n"){
    alert("Por favor ingresa si o no")
    seleccion = prompt("Quieras comprar un producto? (s-si / n-no)")
}

if(seleccion == "s"){
    alert("Nuestra lista de productos")
    let todosLosProductos = productos.map ((producto) => producto.nombre + " " + producto.precio + "$");

    alert(todosLosProductos.join(" - "))
} else if (mensaje == "n"){
    alert("Gracias por venir, hasta pronto!")
}

while(seleccion !="n"){
    let producto = prompt("Agregar producto")
    let precio = 0

    if(producto == "Clarinete Buffet E11" || producto == "Clarinete Buffet Tosca" || producto == "Clarinete Buffet Festival" || producto == "Clarinete Buffet R13" ){
        switch (producto){
            case "Clarinete Buffet E11":
            precio = 500000;
            break;
            case "Clarinete Buffet Tosca":
            precio = 5000000;
            break;
            case "Clarinete Buffet Festival":
            precio = 2500000;
            break;
            case "Clarinete Buffet R13":
            precio = 1000000;
            break;
        }
        let unidades = parseInt(prompt("¿Cuantas unidades llevara?"))

        carrito.push({producto, unidades, precio})
        console.log ( carrito)
    }else {
        alert("Sin stock discponible")
    }
}


//FUNCIONES
