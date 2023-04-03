"use strict";

// VAMOS A CAPTURAR TODOS LOS ELEMENTOS DEL DOM PARA 
// LAS OPCIONES DEL PIEDRA PAPEL O TIJERA

let botonPiedra = document.querySelector('.piedra')
let botonPapel = document.querySelector('.papel')
let botonTijera = document.querySelector('.tijera')

let manoUsuario = document.querySelector('.mano_usuario')
let manoPc = document.querySelector('.mano_pc')

let puntajeUsuario = document.querySelector('.puntaje_usuario p')
let puntajePC = document.querySelector('.puntaje_pc p')

let labelResultado = document.querySelector('.resultado')

let tablero = document.querySelector('.tablero')

let eleccionUsuario = ""
let eleccionPc = ""

let contadorUsuario = 0;
let contadorPc = 0;

// ALERTA

const swalInicio = () =>{
    Swal.fire(
        '¿Una partida o miedo?',
        'Gana el primero con 3 puntos, ¿Va?',
        'question'
        /**Para usar un allowOutsideClick se
         * necesita ponerle objetos a las frases
         * como en el codigo de mas abajo
         */
    )
}
swalInicio();

const SwalGanador = () =>{
    Swal.fire({
        icon: 'success',
        tittle: 'Waos, ganaste una',
        text: 'Pura suerte. Seguro no ganas de nuevo',
        confirmButtonText: '¿Que no?',
        allowOutsideClick: true
    })
}

const SwalPerdedor = () =>{
    Swal.fire({
      icon: 'error',
        tittle: 'Perdiste, loco',
        text: 'Nah, ¿Te gana una maquina?',
        confirmButtonText: 'BUT IT REFUSED',
        /**Los valores posibles son True o False.
         * Al ponerlo en True permitimos que el
         * usuario cierre la ventana modal haciendo
         * click fuera de la misma
         */
        allowOutsideClick: false
    })
}

const limpiarMarcador = () => {
    contadorUsuario = 0;
    contadorPc = 0;
    puntajeUsuario.textContent = contadorUsuario
    puntajePC.textContent = contadorPc
}

const ganadores = (puntajeUsuario, puntajePC) => {
    console.log ("Usuario: " +puntajeUsuario, "Computador:" +puntajePC, "aca se muestra el resultado")
    if(puntajeUsuario >= 3 && puntajeUsuario > puntajePC){
        console.log("Usuario ganador")
        SwalGanador();
        setTimeout(limpiarMarcador, 3000)
    }
    else if (puntajePC >= 3 && puntajePC > puntajeUsuario) {
        console.log("Usuario perdedor")
        SwalPerdedor();
        setTimeout(limpiarMarcador, 3000)
    }
}

const resultado = () => {
    if (eleccionUsuario == "piedra") {
        if (eleccionPc == "piedra") {
            labelResultado.textContent = "¡Empate! 🤝"
        }
        if (eleccionPc == "papel") {
            labelResultado.textContent = "¡Perdiste! 🤨📷";
            contadorPc++;
            puntajePC.textContent = contadorPc;
            ganadores(contadorUsuario, contadorPc)
        }
        if (eleccionPc == "tijera") {
            labelResultado.textContent = "¡Ganaste! 😔👌✨";
            contadorUsuario++;
            puntajeUsuario.textContent = contadorUsuario;
            ganadores(contadorUsuario, contadorPc)
        }
    }

    if (eleccionUsuario == "papel") {
        if (eleccionPc == "piedra") {
            labelResultado.textContent = "¡Ganaste! 😔👌✨";
            contadorUsuario++;
            puntajeUsuario.textContent = contadorUsuario;
            ganadores(contadorUsuario, contadorPc)
        }
        if (eleccionPc == "papel") {
            labelResultado.textContent = "¡Empate! 🤝!"
        }
        if (eleccionPc == "tijera") {
            labelResultado.textContent = "¡Perdiste! 🤨📷";
            contadorPc++;
            puntajePC.textContent = contadorPc;
            ganadores(contadorUsuario, contadorPc)
        }
    }

    if (eleccionUsuario == "tijera") {
        if (eleccionPc == "piedra") {
            labelResultado.textContent = "¡Perdiste! 🤨📷";
            contadorPc++;
            puntajePC.textContent = contadorPc;
            ganadores(contadorUsuario, contadorPc)
        }
        if (eleccionPc == "papel") {
            labelResultado.textContent = "¡Ganaste! 😔👌✨";
            contadorUsuario++;
            puntajeUsuario.textContent = contadorUsuario;
            ganadores(contadorUsuario, contadorPc)
        }
        if (eleccionPc == "tijera") {
            labelResultado.textContent = "¡Empate! 🤝!"
        }
    }
}

const eleccionComp = () => {
    let opcionAzar = Math.floor(Math.random() * 3);
    //opcion piedra
    if (opcionAzar == 0){
        manoPc.src = "./assets/piedra_computadora.png"
        eleccionPc = "piedra"
    }
    else if (opcionAzar == 1) {
        //opcion papel
        manoPc.src = "./assets/papel_computadora.png"
        eleccionPc = "papel"
    }
    else {
        //opcion para tijera
        manoPc.src = "./assets/tijera_computadora.png"
        eleccionPc = "tijera"
    }
}

botonPiedra.onclick = () => {
    manoUsuario.src = "./assets/piedra_ada.png";
    manoPc.src = "./assets/piedra_computadora.png";
    labelResultado.textContent = "...",
    tablero.classList.add ("Jugando");
    setTimeout( () => {
        eleccionUsuario = "piedra"
        manoUsuario.src = "./assets/piedra_ada.png";
        eleccionComp();
        tablero.classList.remove("jugando")
        resultado();
    }, 2000)
}

botonPapel.onclick = () => {
    manoUsuario.src = "./assets/papel_ada.png";
    manoPc.src = "./assets/piedra_computadora.png";
    labelResultado.textContent = "...",
    tablero.classList.add ("Jugando");
    setTimeout( () => {
        eleccionUsuario = "papel"
        manoUsuario.src = "./assets/papel_ada.png";
        eleccionComp();
        tablero.classList.remove("jugando")
        resultado();
    }, 2000)
}

botonTijera.onclick = () => {
    manoUsuario.src = "./assets/tijera_ada.png";
    manoPc.src = "./assets/piedra_computadora.png";
    labelResultado.textContent = "...",
    tablero.classList.add ("Jugando");
    setTimeout( () => {
        eleccionUsuario = "tijera"
        manoUsuario.src = "./assets/tijera_ada.png";
        eleccionComp();
        tablero.classList.remove("jugando")
        resultado();
    }, 2000)
}

