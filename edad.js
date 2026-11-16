const aceptarBtn = document.getElementById("aceptarBtn")
const edadInput = document.getElementById("edadUsuario")

aceptarBtn.addEventListener("click", function () {

    if(edadInput.value == "")
    {
        alert('Ingresa algo')
    }
    else
    {
        if(isNaN(edadInput.value))
        {
            alert('Ingresa un numero')
        }
        else
        {
            let edad = Number(edadInput.value) //parse int para solo enteros
            if(edad <100 && edad>0){ verificarEdad(edad)}
            else { alert('Ingresa una edad valida')}
        }
    }
})

function verificarEdad(edad) {
    if (edad >= 18) {
        document.getElementById('resultado').innerHTML= "Eres mayor de edad"
    } else {
         document.getElementById('resultado').innerHTML= "Eres menor de edad"
    }

}