function faseQuatroSeguranca(){
    var resposta = prompt("Escolha um número: \n1 - Contar pra ele. \n2 - Fazer algumas perguntas. \n3 -  Se fazer de desentendida.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 2){
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 3){
            window.location.href = "../seguranca/seguranca-fase5.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}