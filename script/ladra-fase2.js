function faseDoisLadra(){
    var resposta = prompt("Escolha um número: \n1 - Uma criança. \n2 - Uma adolescente. \n3 -  Uma senhora.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 2){
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 3){
            window.location.href = "../ladra/ladra-fase3.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}