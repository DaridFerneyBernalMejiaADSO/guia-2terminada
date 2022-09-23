addEventListener("DOMContentLoaded", ()=>{
    //#calcular todos los pagos hechos en un restaurante 
   let con=Number(prompt("ingrese un total de consumo"))
    if (con > 130000){
       let des= con*(15/100)
       let dtotal= con - des
       console.log(`total a pagar con descuento `,dtotal)
    }
    else{
        console.log(`no tienes descuento, tu debes que pagar:${con}`)
    }

    
})
//Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede los
//$130.000 el descuento será del 15%, de lo contrario no hay descuento.
