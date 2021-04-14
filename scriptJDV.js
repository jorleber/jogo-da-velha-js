const jogador1 = {
    simbolo: "X",
    img: "img/x.png"};
const jogador2 = {
    simbolo: "O",
    img: "img/o.png"};
var vezDoJogador = jogador1;
var fimDeJogo = false;
var contadorDeJogadas = 0;
const corGanhador = "yellow";
const corEmpate = "red";

carregarInformacoes();

function carregarInformacoes(){
    if(fimDeJogo){
        return ;
    }
    if(vezDoJogador == jogador1){
        $("#imgJogador").prop("src","img/x.png");
    } else{
        $("#imgJogador").prop("src","img/o.png");
    }
}

$(".celula").on('click', function(event){
    
    if(!fimDeJogo){
        if($(`#${this.id}`).attr("contem") == ""){
            $(`#${this.id}`).append(`<img src="${vezDoJogador.img}">`);
            $(`#${this.id}`).attr("contem",`${vezDoJogador.simbolo}`);
            vezDoJogador = vezDoJogador == jogador1 ? jogador2 : jogador1;
            $("#imgJogador").prop("src",`${vezDoJogador.img}`);
            contadorDeJogadas++;
        } else{
            alert("Erro!");
        }
        verificaSequencia(this.id);
    }
    if(contadorDeJogadas == 9){
        mudaCorSequenciaFimJogo();
    }
});

function verificaSequencia(id){
    switch(id){
        case '1':
            if(comparaSimbolo(id,"2","3")){
                fimDeJogo = true;
            } else if(comparaSimbolo(id,"4","7")){
                fimDeJogo = true;
            } else if(comparaSimbolo(id,"5","9")){
                fimDeJogo = true;
            }
            break;
        case '2':
            if(comparaSimbolo(id,"1","3")){
                fimDeJogo = true;
            } else if(comparaSimbolo(id,"5","8")){
                fimDeJogo = true;
            }
            break;
        case '3':
            if(comparaSimbolo(id,"1","2")){
                fimDeJogo = true;
            } else if(comparaSimbolo(id,"5","7")){
                fimDeJogo = true;
            } else if(comparaSimbolo(id,"6","9")){
                fimDeJogo = true;
            }
            break;
        case '4':
            if(comparaSimbolo(id,"1","7")){
                fimDeJogo = true;
            } else if(comparaSimbolo(id,"5","6")){
                fimDeJogo = true;
            }
            break;
        case '5':
            if(comparaSimbolo(id,"3","7")){
                fimDeJogo = true;
            } else if(comparaSimbolo(id,"1","9")){
                fimDeJogo = true;
            } else if(comparaSimbolo(id,"2","8")){
                fimDeJogo = true;
            } else if(comparaSimbolo(id,"4","6")){
                fimDeJogo = true;
            }
            break;
        case '6':
            if(comparaSimbolo(id,"3","9")){
                fimDeJogo = true;
            } else if(comparaSimbolo(id,"4","5")){
                fimDeJogo = true;
            }
            break;
        case '7':
            if(comparaSimbolo(id,"8","9")){
                fimDeJogo = true;
            } else if(comparaSimbolo(id,"4","1")){
                fimDeJogo = true;
            } else if(comparaSimbolo(id,"5","3")){
                fimDeJogo = true;
            }
            break;
        case '8':
            if(comparaSimbolo(id,"7","9")){
                fimDeJogo = true;
            } else if(comparaSimbolo(id,"2","5")){
                fimDeJogo = true;
            }
            break;
        case '9':
            if(comparaSimbolo(id,"7","8")){
                fimDeJogo = true;
            } else if(comparaSimbolo(id,"1","5")){
                fimDeJogo = true;
            } else if(comparaSimbolo(id,"3","6")){
                fimDeJogo = true;
            }
            break;
    }
}

function comparaSimbolo(a,b,c){
    if($(`#${a}`).attr("contem") == $(`#${b}`).attr("contem") && $(`#${a}`).attr("contem") == $(`#${c}`).attr("contem")){
        mudaCorSequencia(a,b,c);
        return true;
    }
    return false;
}

function mudaCorSequencia(a,b,c){
    $(`#${a}`).css("background-color", corGanhador);
    $(`#${b}`).css("background-color", corGanhador);
    $(`#${c}`).css("background-color", corGanhador);
}

function mudaCorSequenciaFimJogo(){
    $(`#1`).css("background-color", corEmpate);
    $(`#2`).css("background-color", corEmpate);
    $(`#3`).css("background-color", corEmpate);

    $(`#4`).css("background-color", corEmpate);
    $(`#5`).css("background-color", corEmpate);
    $(`#6`).css("background-color", corEmpate);

    $(`#7`).css("background-color", corEmpate);
    $(`#8`).css("background-color", corEmpate);
    $(`#9`).css("background-color", corEmpate);
}