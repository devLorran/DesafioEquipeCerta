function cadastraJogo() {
    var nomeJogo = document.getElementById('nomeJogo');
    var descJogo = document.getElementById('descJogo');
    var exibeDados = document.getElementById("exibeDados");
    var dados = JSON.parse(localStorage.getItem("dadosJogo"));

    if (dados == null) {
        localStorage.setItem("dadosJogo", "[]");
        dados = [];
    }
    var auxRegistro = {
        nome: nomeJogo.value,
        descJogo: descJogo.value
    }
    dados.push(auxRegistro);
    if (dados == null) {
        alert("Não foi possível adicionar o jogo!")
    } else {
        localStorage.setItem("dadosJogo", JSON.stringify(dados));
        alert("Jogo cadastrado com sucesso!")
    }
    exibeDados.innerHTML = JSON.stringify(dados);
}