addEventListener("DOMContentLoaded", ()=>{
// # Desarrollar un diagrama que lea 3 valores diferentes
let valor1= Number(prompt("ingrese el valor 1="))
let valor2= Number(prompt("ingrese el valor 2="))
let valor3= Number(prompt("ingrese el valor 3="))
if( valor1<valor2 && valor1<valor3){
    console.log(`el valor 1 es menor`,valor1)
}
else if (valor2<valor3 && valor2<valor1){
    console.log(`el valor 2 es menor`,valor2)
}
else if ( valor3<valor2 && valor3<valor1){
    console.log(`el valor 3 es menor `,valor3)
}
if (valor3<valor2 && valor3<valor1){
    console.log(`el valor 1 es mayor`,valor1)
}
else if(valor2>valor3 && valor2>valor1){
    console.log(`valor 2 es mayor`,valor2)
}
else if (valor3>valor2 && valor3>valor1){
    console.log(`el valor 3 es mayor`,valor3)
}
if(valor3==valor2 && valor3 == valor1){
    console.log(`el valor 1 igual 2`,valor1,valor2)
}
else if(valor2 == valor1){
    console.log(`el valor 2 es igual al valor 1`,valor2,valor3)

}
})
