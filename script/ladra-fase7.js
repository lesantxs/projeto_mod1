function faseSeteLadra(){
    var resposta = prompt("Escolha um número: \n1 - Golpear. \n2 - Projetar algo. \n3 -  Inventar algo.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 2){
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 3){
            window.location.href = "../ladra/ladra-fase8.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}