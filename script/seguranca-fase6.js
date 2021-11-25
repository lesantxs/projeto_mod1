function faseSeisSeguranca(){
    var resposta = prompt("Escolha um número: \n1 - Ignorar \n2 - Falar pra ele ficar. \n3 - Deixar ele ir.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 2){
            window.location.href = "../seuranca/seguranca-fase7.html"
        } else if(resposta == 3){
            window.location.href = "../resultado/perdeu.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}