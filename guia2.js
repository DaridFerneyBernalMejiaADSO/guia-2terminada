addEventListener("DOMContentLoaded", ()=>{
// # Calcule el mayor de tres números, permitiendo leer 3 valores diferentes
let num1= Number(prompt(`ingrese su numero 1`))
let num2= Number(prompt(`ingrese su numero 2`))
let num3= Number(prompt(`ingrese su numero 3`))
if(num1>num2 && num1>num3){
    console.log(`numero 1 es mayor`)
}
if (num2>num3 && num2>num1){
    console.log(`numero 2 es mayor`)
}
else{
    console.log(`el numero 3 es mayor`)
}


})
 