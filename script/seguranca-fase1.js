function faseUmSeguranca(){
    var resposta = prompt("Escolha um número: \n1 - Ir pro sul. \n2 - Ir pro oeste. \n3 -  Ir pro leste.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 2){
            window.location.href = "../seguranca/seguranca-fase2.html"
        } else if(resposta == 3){
            window.location.href = "../resultado/perdeu.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}