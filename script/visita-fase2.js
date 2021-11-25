function faseDoisVisita(){
    var resposta = prompt("Escolha um número: \n1 - Achou realmente bonito e seguiu sua caminhada. \n2 - Percebeu que estava com fome. \n3 - Decidiu ficar só mais um pouco e voltar para casa.")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../resultado/perdeu.html"
        } else if(resposta == 2){
            window.location.href = "../visita/visita-fase3.html"
        } else if(resposta == 3){
            window.location.href = "../resultado/perdeu.html"
        } else {
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}