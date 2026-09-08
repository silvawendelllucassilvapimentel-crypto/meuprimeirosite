let botaoNao = document.getElementById("nao");

botaoNao.addEventListener("mouseover", function() {

    let x = Math.random() * 500;
    let y = Math.random() * 300;

    botaoNao.style.position = "absolute";
    botaoNao.style.left = x + "px";
    botaoNao.style.top = y + "px";

});