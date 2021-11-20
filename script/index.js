function iniciarEscolha(){
    var personagens = ""
    while(true){
        personagens = prompt("*Present Mic se prepara* \n \n— Manda aííí!! \n \nEscolha o número do personagem: \n1 - Ladra \n2 - Segurança \n3 - Visita")
        if(personagens == 1){
            window.location.href = "./ladra/ladra.html"
        }else if(personagens == 2){
            window.location.href = "./seguranca/seguranca.html"
        }else if(personagens == 3){
            window.location.href = "./visita/visita.html"
        }else{
            alert("Errou, jovem! Digite um personagem válido.")
        }
        break
    }
}