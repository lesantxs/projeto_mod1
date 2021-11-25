function faseOitoLadra(){
    var resposta = prompt("Escolha um número: \n1 - Parar ali. \n2 - Continuar o caminho. \n3 - Tentar pegar.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 2){
            window.location.href = "../ladra/ladra-fase9.html"
        } else if(resposta == 3){
            window.location.href = "../resultado/perdeu.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}