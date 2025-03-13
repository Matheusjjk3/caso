function preencherNome(nome) {
    // Preenche o campo de input com o nome clicado
    document.getElementById("nomeInput").value = nome;
}

function verificarNome() {
    var nome = document.getElementById("nomeInput").value.toLowerCase();
    
    // Limpa a mensagem anterior, se houver
    var mensagemContainer = document.getElementById("mensagemContainer");
    mensagemContainer.innerHTML = ""; // Limpa o conteúdo anterior

    var mensagem = document.createElement("p");
    mensagem.classList.add("mensagem"); // Adiciona a classe de estilo para a mensagem

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
    } else if (nome === "vinícius") {
        mensagem.textContent = "Está errado porque tal tal";
    } else if (nome === "wiliam") {
        mensagem.textContent = "Está errado porque tal tal";
    } else if (nome === "rogeria") {
        mensagem.textContent = "Está errado porque tal tal";
    } else if (nome === "alanzin") {
        mensagem.textContent = "Está errado porque Alanzin é top demais";
    } else if (nome === "joao" || nome === "joão") {
        mensagem.textContent = "Está certo";
    } else {
        mensagem.textContent = "Esta pessoa não está relacionada ao caso";
    }

    // Adiciona a mensagem ao container
    mensagemContainer.appendChild(mensagem);
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
