function perdeu(){
    var resposta = prompt("Deseja: \n1 - Voltar para a página anterior. \n2 - Voltar para a home")
    while(true){
        if(resposta == 1){
            window.history.back()
        }else if(resposta == 2){
            window.location.href = "../home.html"
        }else{
            alert("Errou, jovem! Digite uma resposta válida.")
        }
        break
    }
}