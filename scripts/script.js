const input = document.getElementById("inputPedido");
const botaoAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaPedidos");
const botaoAtender = document.getElementById("btnAtender");
const pedidoAtual = document.getElementById("pedidoAtual");


function adicionarPedido() {
    const texto = input.value.trim();

    
    if (texto === "") return;

    
    const li = document.createElement("li");

   
    const span = document.createElement("span");
    span.innerText = texto;

   
    span.addEventListener("click", () => {
        span.style.textDecoration =
            span.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
    });

    
    const btnRemover = document.createElement("button");
    btnRemover.innerText = "🗑️";

    btnRemover.addEventListener("click", () => {
        li.remove();
    });

    
    li.appendChild(span);
    li.appendChild(btnRemover);

  
    lista.appendChild(li);

    
    input.value = "";
}


btnAdicionar.addEventListener("click", adicionarPedido);


input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        adicionarPedido();
    }
});

btnAtender.addEventListener("click", () => {
    const primeiro = lista.firstElementChild;

    if (!primeiro) {
        pedidoAtual.innerText = "Nenhum pedido na fila";
        return;
    }

    const texto = primeiro.querySelector("span").innerText;

    pedidoAtual.innerText = "Atendendo: " + texto;

    primeiro.remove();
});

function atualizarContador() {
    console.log("Pedidos:", lista.children.length);
}