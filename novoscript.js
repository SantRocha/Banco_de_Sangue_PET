function escolherLink() {
    var escolha = document.getElementById("escolha").value;
    var botaoLink = document.getElementById("botao-link");

    if (escolha === "cao") {
        botaoLink.href = "carteira-cao.html";
    } else if (escolha === "gato") {
        botaoLink.href = "carteira-gato.html";
    }
}
