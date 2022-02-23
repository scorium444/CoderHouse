console.log("Proyecto Prueba")
let inicial = parseInt( prompt("Ingrese el valor inicial"))
while (isNaN(inicial)){
    alert("No es un numero")
    inicial = parseInt( prompt("Ingrese el valor inicial"))
}
let descuento = prompt("Aplicar descuentos: \n Opcion 1: del 10% \n Opcion 2: del 20%")
// 1 El usuario pone un monto inicial de un producto
// 2 Se debe preguntar que tipo de descuento es del 10% o del 20%
// 3 Si no ingreso ningun dato se debe volver a repetir el ciclo
// 4 Si son acumulables se deben sumar al descuento anterior
// 5 Mandar un Alert con el valor final del producto con el descuento incluido       
// Esta funcion calcula de cuanto es el descuento
function descuento1(Capital, x) {
    return Capital * x
}
// Esta funcion calcula el valor final segun que descuento se seleccione, en caso de ser erroneo se repite
function descuento2(a, b, c) {
    while (a > 0){
        if (a == "1"){
            b = c - descuento1(c, 0.1)
            alert(`monto final es ${b}`);
            return b
        }
        if (a == "2") {
            b = c - descuento1(c, 0.2) 
            alert(`monto final es ${b}`);
            return b
        }
        else
         alert("Mal ingresado") 
         a = prompt("ingresar otra vez")
    }
}         
let Montofinal = ""
let resultadoFinal1 = descuento2(descuento, Montofinal, inicial)
console.log(resultadoFinal1);
let contador = 2
let otravez= ""
let Montofinalfinal = ""
//Aqui se pregunta al usuario si quiere aplicar un segundo descuento luego del primero. Tomando como monto inicial el resultado final de la funcion anterior
while (contador != 0) {
    contador--
    otravez = prompt("Desea sumar otro descuento Si o No")
        if (otravez == "Si") {
            descuento = prompt("Aplicar descuentos: \n Opcion 1: del 10% \n Opcion 2: del 20%")
            descuento2(descuento, Montofinalfinal, resultadoFinal1)
            break
        }
        if (otravez == "No"){
            alert(`Entonces te ${quedaresultadoFinal1}`)
            break
        }    
        else{
            alert("Entrada no valida, tienes 2 intentos")
        }   
}             