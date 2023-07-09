

/*animacion pregunta*/ 
var pregunta=false
var app = document.getElementById('pregunta');

var string='TIENES LO QUE NECESARIO PARA SALVAR A LA HUMANIDAD?'
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


