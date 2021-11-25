function faseTresSeguranca(){
    var resposta = prompt("Escolha um número: \n1 - Ir atrás do segurança. \n2 - Continuar patrulhando. \n3 -  Voltar para falar com a jornalista.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../seuranca/seguranca-fase4.html"
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