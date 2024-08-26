const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(event){
    event.preventDefault()
    
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");
    
    const containerNomeDoItem = document.createElement("div");
    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value;
    containerNomeDoItem.appendChild(nomeDoItem);
    
    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src= "img/Excluir.svg";
    imagemRemover.alt= "Excluir";
    
    const imagemEditar = document.createElement("img");
    imagemEditar.src= "img/Edição.svg";
    imagemEditar.alt= "Editar";

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);
    
    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);
    
    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista)
}