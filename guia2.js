addEventListener("DOMContentLoaded", ()=>{
    // Cálculo de áreas - Elige una figura geométrica:" Triángulo y Círculo
    let fig=prompt(`¿a cual figura le quiere calcular el area? triangulo(T), circulo(C)`)
    if (fig==`T`){
        let base=Number(prompt(`ingrese la base`))
        let altura=Number(prompt(`ingrese la altura`))
        let resul=(base*altura)/2
        console.log("el area del triangulo es ",resul)
    }
    if (fig==`C`){
        let rad=Number(prompt(`ingrese el valor del radio`))
        let resul=Math.PI*rad**2
        console.log("el area del circulo es",resul)

    }
    else{
        console.log(`lo ingresado no es valido`)
    }


 
})
