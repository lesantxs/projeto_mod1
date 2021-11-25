function faseTresVisita(){
    var resposta = prompt("Escolha um número: \n1 - Não consegue agir. \n2 -  Bate na cabeça. \n3 - Não bate na cabeça.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 2){
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 3){
            window.location.href = "../visita/visita-fase4.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}