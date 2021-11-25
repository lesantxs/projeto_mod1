function faseOitoVisita(){
    var resposta = prompt("Escolha um número: \n1 - Se protegeu no chão. \n2 - Tentou segurá-la")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../visita/visita-fase9.html"
        } else if(resposta == 2){
            window.location.href = "../resultado/perdeu.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}