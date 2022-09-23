addEventListener("DOMContentLoaded", ()=>{
    // En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es de planta,
    // la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora trabajada se le paga
    // a $10000. Para calcular su pago es necesario conocer el total de horas trabajadas.
 let tra=prompt(`ingrese en que trabaja planta (P) o administrador (A)`)
 .toUpperCase()
 if (tra==`P`){
    let h=Number(prompt(`cantidad de horas trabajas al dia?`))
    let sh=20000
    let suel=h*sh
    console.log(`pago de trabajadores de planta segun las horas`,suel)
 }
 else if (tra==`A`){
    let h=Number(prompt(`cantidad de horas trabajas al dia?`))
    let sho=10000
    let sue= h*sho
    console.log(`pago administradores administradores segun la horas`,sue)
    
 }
else {
    console.log(`invalido`)
}
})

