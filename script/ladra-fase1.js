function faseUmLadra(){
    var resposta = prompt("Escolha um número: \n1 - Roubar o que era de seu interesse. \n2 - Roubar a pintura combinada. \n3 -  Ficar entediada e procurar em outro museu.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../ladra/ladra-fase2.html"
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