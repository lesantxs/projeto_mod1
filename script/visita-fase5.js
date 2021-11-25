function faseCincoVisita(){
    var resposta = prompt("Escolha um número: \n1 - Ouví-lo e ir embora. \n2 - Ouví-lo, mas fazer algo. \n3 - Ouví-lo e não fazer nada.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 2){
            window.location.href = "../visita/visita-fase6.html"
        } else if(resposta == 3){
            window.location.href = "../resultado/perdeu.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}