function procesarDatos(){
    const monto = Number(document.getElementById("monto").value)
    const meses = Number(document.getElementById("meses").value)
    const resultado = document.getElementById("resultado")

    if(isNaN(monto) || monto<=0 || meses<=0){
        resultado.innerText = "Error: completá todos los campos correctamente"; 
        resultado.style.color= "red"
        return 
    }

    const totalDeuda = monto*meses
    resultado.innerText = "Total: $" + totalDeuda
    if (meses<=2){
        resultado.style.color = "green"
        resultado.innerText+= ", Deuda Leve"
    }else if (meses<=4){
        resultado.style.color = "orange"
        if (meses==3){
            resultado.innerText+= ", Deuda Media (3 meses)"
        }else{
            resultado.innerText+= ", Deuda Media (4 meses)"
        }
    }else{
        resultado.style.color = "red"  
        resultado.innerText+= ", Deuda Grave"
    }


}

document.getElementById("monto").addEventListener("keydown", function(e) {
    if (e.key === "Enter") procesarDatos()
})

document.getElementById("meses").addEventListener("keydown", function(e) {
    if (e.key === "Enter") procesarDatos()
})