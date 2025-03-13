function verificarNome() {
    var nome = document.getElementById("nomeInput").value.toLowerCase();
    
    // Remove todas as mensagens anteriores
    var mensagens = document.querySelectorAll(".mensagem");
    mensagens.forEach(function(mensagem) {
        mensagem.remove();
    });

    var mensagem = document.createElement("p");
    mensagem.classList.add("mensagem"); // Adiciona uma classe para facilitar a remoção futura

    if (nome === "roberto") {
        mensagem.textContent = "Está errado porque tal tal";
    } else if (nome === "ana") {
        mensagem.textContent = "Está errado porque tal tal";
    } else if (nome === "fabiola") {
        mensagem.textContent = "Está errado porque tal tal";
    } else if (nome === "robinson") {
        mensagem.textContent = "Está errado porque tal tal";
    } else if (nome === "everton") {
        mensagem.textContent = "Está errado porque tal tal";
    } else if (nome === "vinivius") {
        mensagem.textContent = "Está errado porque tal tal";
    } else if (nome === "vinícius") {
        mensagem.textContent = "Está errado porque tal tal";
    } else if (nome === "robinson") {
        mensagem.textContent = "Está errado porque tal tal";
    } else if (nome === "wiliam") {
        mensagem.textContent = "Está errado porque tal tal";
    } else if (nome === "rogeria") {
        mensagem.textContent = "Está errado porque tal tal";
    } else if (nome === "joao" || nome === "joão") {
        mensagem.textContent = "Está certo";
    } else {
        mensagem.textContent = "Esta pessoa não está relacionada ao caso";
    }

    document.body.appendChild(mensagem);
}

document.getElementById("nomeInput").addEventListener("keydown", function(event) {
    // Verifica se a tecla pressionada foi "Enter" (código 13)
    if (event.key === "Enter") {
        // Previne a ação padrão do Enter (para evitar que a página recarregue)
        event.preventDefault();

        // Chama a função do botão
        verificarNome();
    }
});
