function faseCincoSeguranca(){
    var resposta = prompt("Escolha um número: \n1 - Seguir o som. \n2 - Descer direto. \n3 - Checar a sala.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 2){
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 3){
            window.location.href = "../seguranca/seguranca-fase6.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}