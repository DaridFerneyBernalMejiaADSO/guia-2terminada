addEventListener("DOMContentLoaded", ()=>{
    // Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que muestre
    // en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable temperatura es
    // mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra Normal
//temperatura y presion 
let temperatura=Number(prompt("ingrese la temperatura"))
if (temperatura > 100){
    console.log(`temperatura: alarma`)
}
else{
    console.log(`temperatura: normal`)
} 
let presion=Number(prompt(`ingrese la presion`))
if (presion>200){
    console.log(`presion: alarma`)
}
else {
    console.log(`presion: normal`)
}



    
})
