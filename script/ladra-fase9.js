function faseNoveLadra(){
    var resposta = prompt("Escolha um número: \n1 - Arrombar o cadeado. \n2 - Tentar abrir. \n3 - Quebrar o vidro.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 2){
            window.location.href = "../ladra/ladra-fase10.html"
        } else if(resposta == 3){
            window.location.href = "../resultado/perdeu.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}