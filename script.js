

/*animaciones*/ 
var pregunta=false
var app = document.getElementById('pregunta');

var string='TIENES LO NECESARIO PARA SALVAR A LA HUMANIDAD?'
var retraso=20;
function animacionPregunta(){
  
  new Typewriter(app, {
    strings: string,
    autoStart: true,
    loop: false,
    delay: retraso,
    cursor: null,
    
  
  });
  
  pregunta=true;
  
}



if (pregunta==false){
  animacionPregunta();
}


let eligeTuArma=false;

function animacionEligeTuArma(){
  var elemento=document.getElementById("titulo-elige-arma");
  elemento.classList.add("mostrar");
  eligeTuArma=true;
}
var tiempoEligeTuArma=retraso*string.length+800
setTimeout(animacionEligeTuArma, tiempoEligeTuArma);

function animacionArmasPuntuacion(){
  var elemento=document.getElementById("armas-puntuacion")
  elemento.classList.add("mostrar");
}
setTimeout(animacionArmasPuntuacion, tiempoEligeTuArma+800);

/*fin animaciones*/


/*Juego*/
let puntajeMaquina=0;
let puntajeJugador=0;
let rondas=0;

let jugadorPuntuacion =document.getElementById("puntuacion-jugador");
let maquinaPuntuacion =document.getElementById("puntuacion-maquina");

let mensajeResultado=document.getElementById("mensaje-resultado");
let mensajeOriginal= mensajeResultado.textContent;

/*eleccion de la maquina*/
function getComputerChoice(){
  let numeroRandom=Math.floor(Math.random() * 3) + 1;
  let eleccion;
  if (numeroRandom==1){
    eleccion="piedra"
  }
  else if (numeroRandom==2){
    eleccion="papel";
  }
  else{
    eleccion="tijera"
  }
  return eleccion;
}



/*comparar elecciones*/
function comparar(playerSelection,computerSelection){
  let resultado=null;
  if (playerSelection === computerSelection) {
    resultado= "Empate";
    mensajeResultado.textContent="Empate"
  } else if (
    (playerSelection === "piedra" && computerSelection === "tijera") ||
    (playerSelection === "papel" && computerSelection === "piedra") ||
    (playerSelection === "tijera" && computerSelection === "papel")
  ) {
    resultado=  "Jugador";
    mensajeResultado.textContent="Jugador gana: "+playerSelection+" vence a "+computerSelection;
  } else {
    resultado=  "Maquina";
    mensajeResultado.textContent="Maquina gana: "+computerSelection+" vence a "+playerSelection;
  }
  actualizarPuntuacion(resultado);
}

/*actualizar puntuaciones*/
function actualizarPuntuacion(resultado){
  if(resultado=="Jugador"){
    puntajeJugador++;
    jugadorPuntuacion.textContent=puntajeJugador;
    rondas++;
  }
  else if (resultado=="Maquina"){
    puntajeMaquina++;
    maquinaPuntuacion.textContent=puntajeMaquina;
    rondas++;
  }
  console.log(rondas);
  declararGanador();
}
/*declarar ganador*/
function declararGanador(){
  if(rondas==5){
    if (puntajeMaquina>puntajeJugador){
      mensajeResultado.textContent="Maquina gano la partida, los humanos fueron exterminados";
    }
    else{
      mensajeResultado.textContent="Jugador gano la partida, los humanos viviran un dia mas";
    }
    setTimeout(reiniciarPuntuaciones,4000);
  } 
}
/*reiniciar puntuaciones*/
function reiniciarPuntuaciones(){
  puntajeMaquina=0;
  puntajeJugador=0;
  rondas=0;
  mensajeResultado.textContent=mensajeOriginal;
  jugadorPuntuacion.textContent=puntajeJugador;
  maquinaPuntuacion.textContent=puntajeMaquina;
}
/*eleccion del jugador*/
document.getElementById("piedra").addEventListener("click", function(){
  comparar(this.id,getComputerChoice());
});
document.getElementById("papel").addEventListener("click", function(){
  comparar(this.id,getComputerChoice());
});
document.getElementById("tijera").addEventListener("click", function(){
  comparar(this.id,getComputerChoice());
});

/*fin juego*/

