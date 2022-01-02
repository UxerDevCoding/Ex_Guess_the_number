let numeroMaquina= Math.floor(Math.random() * (10 +1)) + 1;
let numeroUsuario = parseInt(prompt("Ingrese número del 1 al 10"));
let vidas = 3;

while (numeroMaquina !==numeroUsuario && vidas > 1) {
    let mensaje = 
        numeroMaquina > numeroUsuario 
            ? "el numeroMaquina es mayor" 
            : "el numeroMaquina es menor";

    console.log("Te equivocaste " + mensaje);
    numeroUsuario= parseInt(prompt("número del 1 al 10"))
    vidas --;
}

if (numeroMaquina === numeroUsuario) {
    console.log("Ganaste 😊");
} else {
    console.log("Perdiste 😒"); 
}



