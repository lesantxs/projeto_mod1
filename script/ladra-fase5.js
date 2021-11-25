function faseCincoLadra(){
    var resposta = prompt("Escolha um número: \n1 - Usar ilusão. \n2 - Usar projeção. \n3 - Atacá-lo diretamente.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 2){
            window.location.href = "../ladra/ladra-fase6.html"
        } else if(resposta == 3){
            window.location.href = "../resultado/perdeu.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}