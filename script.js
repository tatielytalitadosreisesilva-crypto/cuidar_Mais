```javascript
// Notificação ao escolher um plano
document.querySelectorAll(".select-plan").forEach(botao => {
    botao.addEventListener("click", () => {
        alert("Plano " + botao.dataset.plan + " escolhido!");
    });
});


// Botões que levam até os planos
document.querySelectorAll(".nav-cta, .hero-actions .btn-primary").forEach(botao => {
    botao.addEventListener("click", event => {
        event.preventDefault();

        document.querySelector("#planos").scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Telas do MVP
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

function atualizarTela() {
    document.querySelector("#screenImage").src = telas[telaAtual].imagem;
    document.querySelector("#screenTitle").textContent = telas[telaAtual].titulo;
    document.querySelector("#screenText").textContent = telas[telaAtual].descricao;
    document.querySelector("#slideCount").textContent =
        `${telaAtual + 1} / ${telas.length}`;

    document.querySelectorAll(".screen-thumb").forEach((thumb, index) => {
        thumb.classList.toggle("active", index === telaAtual);
    });
}


// Botão próxima tela
document.querySelector("#nextScreen").addEventListener("click", () => {
    telaAtual = (telaAtual + 1) % telas.length;
    atualizarTela();
});


// Botão tela anterior
document.querySelector("#prevScreen").addEventListener("click", () => {
    telaAtual = (telaAtual - 1 + telas.length) % telas.length;
    atualizarTela();
});


// Selecionar uma tela pelas miniaturas
document.querySelectorAll(".screen-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
        telaAtual = Number(thumb.dataset.index);
        atualizarTela();
    });
});

atualizarTela();


// Menu para celular
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


// Janela de demonstração, caso exista um botão para abri-la
const demoButton = document.querySelector("#demoButton");
const demoModal = document.querySelector("#demoModal");
const closeModal = document.querySelector("#closeModal");

if (demoButton && demoModal && closeModal) {
    demoButton.addEventListener("click", () => {
        demoModal.classList.add("show");
        demoModal.setAttribute("aria-hidden", "false");
    });

    closeModal.addEventListener("click", () => {
        demo