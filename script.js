const palavra1 =["comida","alho","bolo","bala","coco","doce","lima","pera","maça","cafe","suco"];
const palavra2 =["comida","amora","arroz","avelã","mamão","melão","pizza","jambo ","limão","pudim","bacon"];

const  tipoalimento= ["comida"];
let letra;
let palavra;
let reposta;
let  sorteio;
function Gerar4(){
    sorteio = parseInt(Math.random()*10);
    tipo = palavra1[0];
    palavra = palavra1[sorteio+1];
    letra = palavra.charAt(0);
    document.getElementById('tipo').innerHTML = tipo.toUpperCase();
    document.getElementById('tamanho').innerHTML = tipo.length;
    document.getElementById('letra').innerHTML = letra.toUpperCase();
   



    
}

function Gerar5(){
    sorteio = parseInt(Math.random()*10);
    tipo = palavra2[0];
    palavra = palavra2[sorteio+1];
    letra = palavra.charAt(0);
    document.getElementById('tipo').innerHTML = tipo.toUpperCase();
    document.getElementById('tamanho').innerHTML = tipo.length;
    document.getElementById('letra').innerHTML = letra.toUpperCase();
    
}

function Confirmar(){
    let palpite =(document.getElementById('palpite').value);
    if(palpite == palavra){

        document.getElementById('resultado').innerHTML = "voce acertou"
        document.getElementById('palavra').innerHTML = palavra;
        
    }
    else{
        document.getElementById('resultado').innerHTML = "voce errou"
        document.getElementById('palavra').innerHTML = palavra;

    }

    
}