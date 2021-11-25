function faseSeisLadra(){
    var resposta = prompt("Escolha um número: \n1 - Amarrá-los. \n2 - Escondê-los. \n3 - Deixá-los ali mesmo.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../ladra/ladra-fase7.html"
        } else if(resposta == 2){
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 3){
            window.location.href = "../resultado/perdeu.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}