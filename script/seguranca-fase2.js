function faseDoisSeguranca(){
    var resposta = prompt("Escolha um número: \n1 - Acreditar. \n2 - Não acreditar. \n3 -  Ignorar.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../seuranca/seguranca-fase3.html"
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