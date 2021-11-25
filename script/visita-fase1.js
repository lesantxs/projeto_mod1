function faseUmVisita(){
    var resposta = prompt("Escolha um número: \n1 - Sentou no banco ali para observar. \n2 - Decidiu seguir o caminho que havia no chão. \n3 - Decidiu olhar para o outro lado.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 2){
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 3){
            window.location.href = "../visita/visita-fase2.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}