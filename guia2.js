addEventListener("DOMContentLoaded", ()=>{
 let prod1=Number(prompt(`ingrese el valor del producto 1 `))
 let prod2=Number(prompt(`ingrese el valor del producto 2 `))
 let prod3=Number(prompt(`ingrese el valor del producto 3 `))
 let prod4=Number(prompt(`ingrese el valor del producto 4 `))
 let prod5=Number(prompt(`ingrese el valor del producto 5 `))
 let IVA=0.19
 let subtot= prod1+prod2+prod3+prod4+prod5
 let iva= subtot*IVA
 let total= subtot+iva
 console.log(`eel subtotal es`,subtot)
 console.log(`el IVA es igual:`,iva)
 console.log(`el total es:`,total)
})