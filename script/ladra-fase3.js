function faseTresLadra(){
    var resposta = prompt("Escolha um número: \n1 - apoiou o braço da senhora em si. \n2 - pareceu desconfiado. \n3 - ignora a senhora.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../ladra/ladra-fase4.html"
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