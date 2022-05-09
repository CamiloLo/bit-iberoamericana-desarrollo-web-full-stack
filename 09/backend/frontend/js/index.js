//VARIABLES
const d= document
const apiUrl= 'http://localhost:4000/api/v1/todos'
const $main= d.querySelector('main')
const $h1= d.createElement('h1')
const $input= d.createElement('input')
const $crearBtn = d.createElement('button')
const $p = d.createElement('p')
const $ol= d.createElement('ol')

$h1.textContent= 'Organiza tu dia'
$main.appendChild($h1)
$main.appendChild($input)
$crearBtn.setAttribute('id', 'crearBtn')
$crearBtn.textContent = 'Crear tarea'
$main.appendChild($crearBtn)

let tareas= null
let $palomitas= null
let $botonesEliminar= null


//EVENTOS

d.addEventListener('DOMContentLoaded', ()=>{
    leerTareas()
    escucharEventos()
})

const escucharEventos=()=>{
    $crearBtn.addEventListener('click', crearTarea)
}

const vigilarPalomitas = (palomitas) => {
    //console.log(palomitas);
    palomitas.forEach(palomita => {
        const id = palomita.parentNode.id
        //console.log(id)
        const nombre= palomita.parentNode.dataset.nombre
        //console.log(nombre)
        const completada= palomita.checked
        //console.log(completada)
        palomita.addEventListener('click', ()=>actualizarTarea(id, nombre, completada))
    });
}

const vigilarEliminar = (botones) => {
    //console.log(botones);
    botones.forEach(boton => {
        const id = boton.parentNode.id
        //console.log(id)
        boton.addEventListener('click', ()=>elimiarTarea(id))
    });
}


//FUNCIONES
$main.classList.add('input')
$crearBtn.classList.add('button')
$h1.classList.add('h1')
const crearTarea= () => {
    //console.log('crear tarea')
      $input.value
      //console.log('tarea:', tarea)
      const tarea={
          name:$input.value,
        completed: false 
    }
    fetch(apiUrl, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(tarea)
    }).then(respuesta=> respuesta.json())
      .then(datos=>{
          //console.log('datos:', datos)
          if (datos.success) {
              leerTareas()
              $input.value= null
            }
        })
        .catch(error=>console.log('error:', error))
    }
    
const leerTareas= () =>{
    $p.textContent=''
    $ol.innerHTML= null
    fetch(apiUrl)
.then((respuesta)=> respuesta.json())
.then((datos)=> {
    tareas= datos.success
    //console.log(tareas)
    if (tareas.length === 0) {
        //console.log('no hay tareas')
        $p.textContent= 'No hay tareas'
        $main.appendChild($p)
    } else {
        tareas.forEach((elemento) => {
            //console.log(elemento)
             const $li= d.createElement('li')
             $li.setAttribute('id', elemento._id);
             const $borrarBtn= d.createElement('button')
             const $palomitas= d.createElement('input')
             $palomitas.setAttribute('type', 'checkbox')
             $palomitas.checked= elemento.completed
             $li.appendChild(d.createTextNode(elemento.name))
             $borrarBtn.classList.add('eliminar')
             $borrarBtn.textContent= 'Eliminar'
             $li.dataset.nombre = elemento.name
             $li.dataset.completada = elemento.completed
             $li.appendChild($palomitas)
             $li.appendChild($borrarBtn)
             $ol.appendChild($li)
     
         });
         $main.appendChild($ol)
         $palomitas=d.querySelectorAll('input[type=checkbox]')
         //console.log($palomita)
         $botonesEliminar= d.querySelectorAll('.eliminar')
         //console.log($botonesEliminar)
         vigilarPalomitas($palomitas)
         vigilarEliminar($botonesEliminar);
    }

})
.catch(error => console.log('error:', error))
}

const actualizarTarea=(id, nombre, completada)=>{
    //console.log(id, nombre, completada)
    const tarea={
        name: nombre,
        completed: !completada,
    }
    console.log ('tarea:', tarea)
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(tarea)
    }).then(respuesta=> leerTareas())
      .catch(error=>console.log('error:', error))


}


const elimiarTarea=(id)=>{
    //console.log(id)
    fetch(`${apiUrl}/${id}`,{
        method: 'DELETE',
    } )
    .then(respuesta=>leerTareas())
    .catch(error => console.log('error:', error)) 


}
