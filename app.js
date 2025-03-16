//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    let nomeFormulario = document.getElementById("amigo");
    let nomeAmigo = nomeFormulario.value;

    console.clear();
    console.log(`Novo nome: ${nomeAmigo}`);

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nomeAmigo);
    nomeFormulario.value = "";
    atualizarLista();
    
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        console.log(`Elemento ${i} da lista: ${amigo}`);
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert("Adicione amigos antes de realizar o sorteio.");
        return;
    }

    let numeroAmigo = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroAmigo];

    let resultado = document.getElementById("resultado");
    console.log(`Amigo sorteado número ${numeroAmigo}: ${amigoSorteado}`)
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}


function resetarLista() {
    amigos = [];
    atualizarLista();
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}