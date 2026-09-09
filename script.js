let carrinho = [];

const botoes = document.querySelectorAll(".botao-carrinho");

const abrirCarrinho = document.getElementById("abrir-carrinho");
const carrinhoConteudo = document.getElementById("carrinho-conteudo");

const listaCarrinho = document.getElementById("lista-carrinho");
const quantidadeCarrinho = document.getElementById("quantidade-carrinho");

const totalCarrinho = document.getElementById("total-carrinho");
const enviarWhatsapp = document.getElementById("enviar-whatsapp");


// ADICIONAR PRODUTO

botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const produto = botao.parentElement;

        const nome = produto.dataset.nome;
        const preco = Number(produto.dataset.preco);

        const produtoExistente = carrinho.find(function(item) {
            return item.nome === nome;
        });

        if (produtoExistente) {

            produtoExistente.quantidade++;

        } else {

            carrinho.push({
                nome: nome,
                preco: preco,
                quantidade: 1
            });

        }

        atualizarCarrinho();

    });

});


// ABRIR E FECHAR CARRINHO

abrirCarrinho.addEventListener("click", function() {

    carrinhoConteudo.classList.toggle("aberto");

});


// ATUALIZAR CARRINHO

function atualizarCarrinho() {

    listaCarrinho.innerHTML = "";

    let total = 0;
    let quantidade = 0;


    carrinho.forEach(function(item, index) {

        const subtotal = item.preco * item.quantidade;

        total += subtotal;
        quantidade += item.quantidade;


        const div = document.createElement("div");

        div.classList.add("item-carrinho");


        div.innerHTML = `
            <span>
                ${item.nome}
                <br>
                ${item.quantidade}x R$ ${item.preco.toFixed(2).replace(".", ",")}
            </span>

            <button onclick="removerProduto(${index})">
                ✕
            </button>
        `;


        listaCarrinho.appendChild(div);

    });


    quantidadeCarrinho.textContent = quantidade;


    totalCarrinho.textContent =
        "Total: R$ " +
        total.toFixed(2).replace(".", ",");

}


// REMOVER PRODUTO

function removerProduto(index) {

    if (carrinho[index].quantidade > 1) {

        carrinho[index].quantidade--;

    } else {

        carrinho.splice(index, 1);

    }

    atualizarCarrinho();

}
// ENVIAR PEDIDO PELO WHATSAPP

enviarWhatsapp.addEventListener("click", function() {

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = "Olá! Gostaria de fazer este pedido:%0A%0A";
    let total = 0;

    carrinho.forEach(function(item) {

        const subtotal = item.preco * item.quantidade;

        total += subtotal;

        mensagem +=
            "• " +
            item.quantidade +
            "x " +
            item.nome +
            " - R$ " +
            subtotal.toFixed(2).replace(".", ",") +
            "%0A";
    });

    mensagem +=
        "%0A*Total: R$ " +
        total.toFixed(2).replace(".", ",") +
        "*";


    const telefone = "5593992080997";

    const link =
        "https://wa.me/" +
        telefone +
        "?text=" +
        mensagem;

    window.open(link, "_blank");

});