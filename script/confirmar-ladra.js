function confirmarJogo() {
    var resposta = prompt("Deseja continuar?\n1 - Não, voltar ao menu \n2 - Sim, seguir com ladra")
    while (true) {
        if (resposta == 1) {
            window.location.href = "../home.html"
        } else if (resposta == 2) {
            window.location.href = "../ladra/ladra-fase1.html"
        } else {
            alert("Resposta inválida.")
        }
        break
    }
}