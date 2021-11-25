function faseQuatroVisita(){
    var resposta = prompt("Escolha um número: \n1 - com um olhar confuso. \n2 -  atento ao que a mulher dizia. \n3 - parecendo duvidar.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../visita/visita-fase5.html"
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