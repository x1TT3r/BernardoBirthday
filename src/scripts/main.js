AOS.init();

var dataEvento = new Date("Mar 7, 2025 19:00:00");
var timeStampDoEvento = dataEvento.getTime();

var contadorDeHoras = setInterval(function(){
    var agora = new Date();
    
    var timeStampAtual = agora.getTime();
    
    var distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    var diaEmMs = 1000 * 60 * 60 * 24;
    var horaEmMs = 1000 * 60 * 60;
    var minutosEmMs = 1000 * 60;

    var diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);

    var horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / (horaEmMs));

    var minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutosEmMs);

    var segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteOEvento < 0) {
        clearInterval(contadorDeHoras);
        document.getElementById("contador").innerHTML = 'Evento Expirado !'
    }

}, 1000);

$(".button").on('click', function(){
    var botao = $(this);
    botao.css({
        'background-color':'green',
        'justify-content':'center'
    });
    botao.text('Confirmado');
    $(".footer__text").text('Obrigado por confirmar sua Presença será muito especial pra mim !!!');
    confetti({
        particleCount: 1000,
        spread: 200,
        origin: { y: 0.6 }
    });
    
})