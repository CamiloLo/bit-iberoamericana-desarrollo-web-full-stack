const $contador = document.getElementById('contador');
const $btnincrementar = document.getElementById('btnIncrementar')
const $btndecrementar = document.getElementById('btnDecrementar')

let contador = 0 

$contador.textContent = contador ;

function incrementar() {
  contador++;
  $contador.textContent = contador;
}

function decrementar() {
  contador--;
  $contador.textContent = contador;
}

document.addEventListener('DOMContentLoaded', () => {
  $btnincrementar.addEventListener('click', () => {
    console.log('click')
    incrementar();
    if (contador > 0) {
      $contador.classList.remove('red');
      $contador.classList.add('blue');
    }
    if (contador === 0) {
      $contador.classList.remove('red');
      $contador.classList.remove('blue');
    }
  });
  $btndecrementar.addEventListener('click', () => {
    decrementar();
    if (contador < 0) {
      $contador.classList.remove('blue');
      $contador.classList.add('red');
    }
    if (contador === 0) {
      $contador.classList.remove('red');
      $contador.classList.remove('blue');
    }
  });
});