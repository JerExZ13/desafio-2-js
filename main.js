function sumar() {
    const numero1 = parseInt(prompt('Ingresa un numero'));
    const numero2 = parseInt(prompt('Ingresa otro numero'));

    const resultado = numero1 + numero2;

    alert('El resultado es ' + resultado);
}
function restar() {
    const numero1 = parseInt(prompt('Ingresa un numero'));
    const numero2 = parseInt(prompt('Ingresa otro numero'));

    const resultado = numero1 - numero2;

    alert('El resultado es ' + resultado);
}
function multiplicar() {
    const numero1 = parseInt(prompt('Ingresa un numero'));
    const numero2 = parseInt(prompt('Ingresa otro numero'));

    const resultado = numero1 * numero2;

    alert('El resultado es ' + resultado);
}
function dividir() {
    const numero1 = parseInt(prompt('Ingresa un numero'));
    const numero2 = parseInt(prompt('Ingresa otro numero'));

    const resultado = numero1 / numero2;

    alert('El resultado es ' + resultado);
}


let resultadoFinal = 0
let operacionSeleccionada = parseInt(
    prompt(
        'Ingresa la operacion que quieres realizar: \n1-sumar\n2-restar\n3-multiplicar\n4-dividir'
    )
)
let seguirOperando = true
let decision

while (seguirOperando === true) {
    if (operacionSeleccionada === 1) {
        sumar()
    } else if (operacionSeleccionada === 2) {
        restar()
    } else if (operacionSeleccionada === 3) {
        multiplicar()
    } else if (operacionSeleccionada === 4) {
        dividir()
    } else {
        operacionSeleccionada = parseInt(prompt('Ingresa una operacion existente; \n1-sumar\n2-restar\n3-multiplicar\n4-dividir'))
        continue
    }
    decision = parseInt(prompt('Quieres realizar otra operacion? \n1.Si\n2.No'))
  if (decision === 1) {
    operacionSeleccionada = parseInt(
      prompt(
        'Ingresa la operacion que quieres realizar: \n1-sumar\n2-restar\n3-multiplicar\n4-dividir'
      )
    )
  } else if (decision === 2) {
    seguirOperando = false
  }
}
