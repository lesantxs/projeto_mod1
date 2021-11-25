function faseSeteSeguranca(){
    var resposta = prompt("Escolha um número: \n1 - Indicar para o homem ir para o leste enquanto vai para o oeste. \n2 - Indicar para irem juntos para o norte. \n3 - Indicar para o homem ir para o norte enquanto vai para o leste.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../seuranca/seguranca-fase8.html"
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