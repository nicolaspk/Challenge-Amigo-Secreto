let listaDeAmigos = [];

// Adiciona amigo ao array e atualiza a lista <ul>
function adicionarAmigo() {
    const campoInput = document.getElementById('amigo');
    const nome = campoInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    listaDeAmigos.push(nome);
    campoInput.value = "";
    atualizarListaAmigos();
}

// Atualiza a lista <ul> com os amigos
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = listaDeAmigos[i];
        lista.appendChild(item);
    }
}

// Sorteia um amigo aleatoriamente e exibe o resultado
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpa resultado anterior

    if (listaDeAmigos.length === 0) {
        resultado.innerHTML = "<li>Nenhum amigo disponível para sortear.</li>";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const nomeSorteado = listaDeAmigos[indiceAleatorio];

    resultado.innerHTML = `<li>Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
}