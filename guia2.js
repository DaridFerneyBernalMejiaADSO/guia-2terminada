addEventListener("DOMContentLoaded", ()=>{
    
    //Determinar si un número es positivo y menor que 100.
    console.log('Holas') 
    let numero = Number(prompt(`ingrese su numero`))
    if (numero>0 & numero<100){
        console.log(`el numero ${numero} es positivo y menor de 100`)
    } 
    else{
        console.log(`el numero es mayor de 100 y es negativo`,numero)
    } 
    
    


})
