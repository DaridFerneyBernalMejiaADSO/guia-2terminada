addEventListener("DOMContentLoaded", ()=>{
//programa nombre, apellido edad
let nombre=prompt(`ingrese su nombre`)
let apellido=prompt(`ingrese su apellido`)
let edad= Number(prompt(`ingrese su edad`))
let nota1=Number(prompt(`ingrese la nota 1 :`))
let nota2=Number(prompt(`ingrese la nota 2 :`))
let nota3=Number(prompt(`ingrese la nota 3 :`))
let promed=(nota1+nota2+nota3)/3
if(promed > 59)[
    console.log(`el estudiante ${nombre} ${apellido} su edad ${edad} fue aprobado `)
]
else[
    console.log(`el estudiante ${nombre} ${apellido} su edad ${edad} No fue aprobado `)
]
console.log(`el promedio del grado  es `,promed)




})
//     #programa de nombre, apellido edad,
//     nombre=(input("ingrese sus nombres"))
//     apellido=(input("ingreses sus apellidos"))
//     edad=int(input("ingrese su edad"))
    
//     nota1=int(input("ingrese la primera nota"))
//     nota2=int(input("ingrese la segunda nota"))
//     nota3=int(input("ingrese la tercera nota"))
//     promed=(nota1+nota2+nota3)/3
//     if promed > 59:
//       print("aprobado")
//     else:
//       print("no aprobado")
//     print("el promedio es",promed)    