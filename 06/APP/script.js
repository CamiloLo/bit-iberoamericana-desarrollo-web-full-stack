const $resultado = document.getElementById('resultado');
const $inciar = document.getElementById('iniciar');

let edad;
let flag = false;

const tieneDocumento = () => {
    const tieneDoc = confirm('¿Tiene documento valido?');
    return tieneDoc 
};

function esMayorDeEdad(x) {
    if(x>=18){
        return true;
    } else {
        return false;
    }
}

document.addEventListener('DOMContentLoaded' ,()=> {
    $inciar.addEventListener('click', () => {
        do {
            edad = prompt('Ingrese su edad')
            edad = parseInt(edad);
            if (isNaN(edad)) {
                alert('No ingreso un numero, por favor ingresa tu edad');
            } else {
                if (edad < 0 || edad > 100) {
                  alert('Por favor ingresa tu edad');  
                } else {
                    const cond1 = esMayorDeEdad(edad);
                    const cond2 = tieneDocumento();
                    if(cond1 && cond2) {
                        $resultado.textContent = 'Si puede votar';
                    } else {
                        $resultado.textContent = 'No puede votar';
                    }
                    flag = true;
                }
            }

        } while (!flag);
    })

})