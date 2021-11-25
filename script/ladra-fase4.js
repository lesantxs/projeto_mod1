function faseQuatroLadra(){
    var resposta = prompt("Escolha um número: \n1 - Dar um soco. \n2 - Dizer que precisa ir ao banheiro. \n3 - Inventar uma desculpa.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../ladra/ladra-fase5.html"
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