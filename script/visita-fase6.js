function faseSeisVisita(){
    var resposta = prompt("Escolha um número: \n1 - Seguir o som. \n2 - Continuar no caminho. \n3 - Sair do museu.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 2){
            window.location.href = "../visita/visita-fase7.html"
        } else if(resposta == 3){
            window.location.href = "../resultado/perdeu.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}