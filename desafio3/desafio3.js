let precioUnitario = 500
let nombreProducto = "leche" //let para designar variable//
let cantidadDeseada = prompt(`Cantidad deseada de ${nombreProducto}: `) //Pide información /
parseInt(cantidadDeseada)
let precioFinal=(cantidadDeseada*precioUnitario)

if (cantidadDeseada >=5){
    descuento=precioFinal*10/100
    precioFinal=precioFinal-descuento
    precioUnitario=precioFinal/cantidadDeseada
    alert(`Tuviste un descuento del 10% en tu compra, costo total de las ${cantidadDeseada} ${nombreProducto} que compraste ${precioFinal} (precio cada una ${precioUnitario})`)  

}
else{
alert(`Costo total de las ${cantidadDeseada} ${nombreProducto} que compra: ${precioFinal} (precio cada una ${precioUnitario})`) //alerta// 
}