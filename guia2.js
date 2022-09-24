addEventListener("DOMContentLoaded", ()=>{
// en una tienda de helado
let prod=Number(prompt(`ingrese el precio del producto`))
let mem=prompt(`ingrese su membresia tipo (A),(B),(C)`)
.toUpperCase()
if (mem ==`A`){
    let desc=prod*0.10
    console.log(`el descuento de tipo A es:`,desc)

}
else if( mem == `B`){
    let descb=prod*0.15
    console.log(`el descuentom de tipo B es `,descb)
}
else if(mem == `C`){
    let descc=prod*0.20
    console.log(`el descuento tipo C es `,descc)
}
})
