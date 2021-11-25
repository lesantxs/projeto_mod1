function faseOitoSeguranca(){
    var resposta = prompt("Escolha um número: \n1 - Atacar. \n2 - Recuar \n3 - Chamar a equipe.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../seuranca/seguranca-fase9.html"
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