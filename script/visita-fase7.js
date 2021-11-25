function faseSeteVisita(){
    var resposta = prompt("Escolha um número: \n1 - Cair. \n2 - Bater na cabeça. \n3 - Não fazer nada.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../visita/visita-fase8.html"
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