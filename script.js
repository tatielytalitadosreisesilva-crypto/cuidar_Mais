document.querySelectorAll(".select-plan").forEach(botao => {
    botao.addEventListener("click", () => {
        alert("Plano " + botao.dataset.plan + " escolhido!");
    });
});

document.querySelectorAll(".nav-cta, .hero-actions .btn-primary").forEach(botao => {
    botao.addEventListener("click", event => {
        event.preventDefault();

        const planos = document.querySelector("#planos");

        if (planos) {
            planos.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const telas = [
    {
        titulo: "Tela inicial do idoso",
        descricao: "Visão rápida dos próximos avisos, compromissos, atividades e acesso à família.",
        imagem: "imagens/pagina inicial.jpeg"
    },
    {
        titulo: "Login",
        descricao: "Tela de acesso para entrar no aplicativo Cuidar+.",
        imagem: "imagens/login.jpeg"
    },
    {
        titulo: "Meus compromissos",
        descricao: "Lista de medicamentos, consultas, atividades e outros compromissos.",
        imagem: "imagens/compromossos.jpeg"
    },
    {
        titulo: "Novo lembrete",
        descricao: "Permite criar um lembrete escolhendo data e horário.",
        imagem: "imagens/lembrete.jpeg"
    },
    {
        titulo: "Atividades",
        descricao: "Ajuda o idoso a encontrar atividades de convivência e bem-estar.",
        imagem: "imagens/atividades.jpeg"
    },
    {
        titulo: "Acessibilidade",
        descricao: "Apresenta recursos para facilitar a visualização e utilização do aplicativo.",
        imagem: "imagens/acessibilidade.jpeg"
    }
];

let telaAtual = 0;

const screenImage = document.querySelector("#screenImage");
const screenTitle = document.querySelector("#screenTitle");
const screenText = document.querySelector("#screenText");
const slideCount = document.querySelector("#slideCount");
const nextScreen = document.querySelector("#nextScreen");
const prevScreen = document.querySelector("#prevScreen");

function atualizarTela() {
    if (!screenImage || !screenTitle || !screenText || !slideCount) {
        return;
    }

    const tela = telas[telaAtual];

    screenImage.src = tela.imagem;
    screenImage.alt = tela.titulo;
    screenTitle.textContent = tela.titulo;
    screenText.textContent = tela.descricao;
    slideCount.textContent = `${telaAtual + 1} / ${telas.length}`;

    document.querySelectorAll(".screen-thumb").forEach((thumb, index) => {
        thumb.classList.toggle("active", index === telaAtual);
    });
}

if (nextScreen) {
    nextScreen.addEventListener("click", () => {
        telaAtual = (telaAtual + 1) % telas.length;
        atualizarTela();
    });
}

if (prevScreen) {
    prevScreen.addEventListener("click", () => {
        telaAtual = (telaAtual - 1 + telas.length) % telas.length;
        atualizarTela();
    });
}

document.querySelectorAll(".screen-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
        const indice = Number(thumb.dataset.index);

        if (Number.isInteger(indice) && indice >= 0 && indice < telas.length) {
            telaAtual = indice;
            atualizarTela();
        }
    });
});

atualizarTela();

const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("open");
    });

    mainNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
        });
    });
}

const demoButton = document.querySelector("#demoButton");
const demoModal = document.querySelector("#demoModal");
const closeModal = document.querySelector("#closeModal");

if (demoButton && demoModal && closeModal) {
    demoButton.addEventListener("click", () => {
        demoModal.classList.add("show");
        demoModal.setAttribute("aria-hidden", "false");
    });

    closeModal.addEventListener("click", () => {
        demoModal.classList.remove("show");
        demoModal.setAttribute("aria-hidden", "true");
    });

    demoModal.addEventListener("click", event => {
        if (event.target === demoModal) {
            demoModal.classList.remove("show");
            demoModal.setAttribute("aria-hidden", "true");
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            demoModal.classList.remove("show");
            demoModal.setAttribute("aria-hidden", "true");
        }
    });
}
