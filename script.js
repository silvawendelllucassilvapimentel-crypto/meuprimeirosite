const sim = document.getElementById("sim");
const nao = document.getElementById("nao");

// Botão NÃO foge quando passa o mouse
nao.addEventListener("mouseover", function () {
    const largura = window.innerWidth - nao.offsetWidth;
    const altura = window.innerHeight - nao.offsetHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    nao.style.position = "fixed";
    nao.style.left = x + "px";
    nao.style.top = y + "px";
});

// Quando clicar em SIM
sim.addEventListener("click", function () {

    nao.style.display = "none";
    sim.style.display = "none";

    document.querySelector("h1").innerHTML = "EU SABIA! ❤️";

    // Cria os corações
    for (let i = 0; i < 30; i++) {
        const coracao = document.createElement("div");

        coracao.innerHTML = "❤️";
        coracao.classList.add("coracao");

        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        coracao.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 6000);
    }
});